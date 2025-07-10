port module Main exposing (..)

import Audio
import Dict
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput)
import Http exposing (Error(..))
import Json.Decode
import Json.Encode
import Process
import Task
import Time

import Afrekenen exposing (..)
import Database exposing (..)
import Hoofdspel exposing (..)
import Letters exposing (Letter(..))
import Types exposing (..)
import Utils exposing (..)
import Woordraden exposing (..)

-- PORTS

port videoEventStream : Json.Encode.Value -> Cmd msg
port audioPortToJS : Json.Encode.Value -> Cmd msg
port audioPortFromJS : (Json.Decode.Value -> msg) -> Sub msg
port confetti : Json.Encode.Value -> Cmd msg


staatdespreadsheetaan : Bool
staatdespreadsheetaan = True

-- MAIN

main : Program String (Audio.Model Msg Model) (Audio.Msg Msg)
main =
  Audio.elementWithAudio
    { init = init
    , view = view
    , update = update
    , subscriptions = subscriptions
    , audio = audio
    , audioPort = { toJS = audioPortToJS, fromJS = audioPortFromJS }
    }


-- MODEL


type Model = HomeScreen {now : Time.Posix, thesheet : Maybe Vraagsheet, username : String, oauth : String, waiting : Bool, muziek : Adios, muziekstart : Maybe Time.Posix } --, spreadsheettext : String }
           | InGame HoofdStatus
           | Woordraden WoordraadStatus
           | Afrekenen Afrekenen



init : String -> (Model, Cmd Msg, Audio.AudioCmd Msg)
init oauthtoken =
  ( HomeScreen { now = Time.millisToPosix 0, thesheet = Nothing, username = "", oauth = oauthtoken, waiting = False, muziek = {tune=Nothing, tik=Nothing, raden=Nothing, faal = Nothing}, muziekstart = Nothing }
  , Cmd.batch [ Task.perform Tick Time.now
              , pushVideoEvent Setup
              , if staatdespreadsheetaan then readSpreadsheet oauthtoken else Cmd.none
              ] 
  , Audio.cmdNone
  )



-- UPDATE


update : Audio.AudioData -> Msg -> Model -> (Model, Cmd Msg, Audio.AudioCmd Msg)
update _ msg model =
  case model of
    HomeScreen status -> case msg of
      StartGame -> case status.username of
        "" -> (model, Cmd.none, Audio.cmdNone)
        naam -> case status.thesheet of
          Nothing -> (InGame (startgame status.now {woord="", vragen=Dict.empty, antwoorden=Dict.empty, volgorde=Dict.empty, paardsprongrng=(1,1)} status.oauth status.muziek), Cmd.none, Audio.cmdNone) --(model, Cmd.none)
          Just sheet -> case Dict.get naam sheet of
            Nothing -> (HomeScreen {status | waiting = True}, adduser naam status.oauth, Audio.cmdNone)
            Just info -> (InGame (startgame status.now info status.oauth status.muziek), logstartgame info naam status.now status.oauth, Audio.cmdNone)
      
      --(InGame (startgame status.now), Cmd.none)
      Tick newtime -> (HomeScreen {status | now = newtime }, Cmd.none, Audio.cmdNone)
      DataReceived result ->
        case result of
          Ok data -> ( HomeScreen {status | thesheet = data}, Cmd.none, Audio.cmdNone)
          _ -> ( model, Cmd.none , Audio.cmdNone)
      UserAdded r -> case r of
        Ok () -> ( HomeScreen status, Process.sleep 1000 |> \_ -> readSpreadsheet status.oauth, Audio.cmdNone)
        Err e -> (HomeScreen {status | username = "Error adding user" }, Cmd.none, Audio.cmdNone)
      Answer naam -> (HomeScreen {status | username = naam}, Cmd.none, Audio.cmdNone)
      PlayAudio -> (HomeScreen {status | muziekstart = Just status.now}
                   , pushVideoEvent Play
                   , Audio.cmdBatch 
                      [ Audio.loadAudio (soundloaded "tune")  "https://maartjevdkoppel.github.io/audio/tune.mp3"
                      , Audio.loadAudio (soundloaded "tik")   "https://maartjevdkoppel.github.io/audio/tik.mp3"
                      , Audio.loadAudio (soundloaded "raden") "https://maartjevdkoppel.github.io/audio/woordraad.mp3"
                      , Audio.loadAudio (soundloaded "faal")  "https://maartjevdkoppel.github.io/audio/woord-faal.mp3"
                      ]
                   )
      SoundLoaded result -> case result of
        Ok (sound, id) -> let x = status.muziek in (HomeScreen {status | muziek = case id of
            "tune" ->  {x | tune  = Just sound} 
            "tik" ->   {x | tik   = Just sound}
            "raden" -> {x | raden = Just sound}
            "faal" ->  {x | faal  = Just sound}
            _ -> status.muziek
          -- , muziekstart = case id of
          --   "tune" -> status.now
          --   _ -> status.muziekstart
          }, Cmd.none, Audio.cmdNone)
        _ -> (model, Cmd.none, Audio.cmdNone)
      _ -> (model, Cmd.none, Audio.cmdNone)

    InGame status -> case msg of
      NaarWoordraden -> (Woordraden 
        { currentTime = Time.millisToPosix ((Time.posixToMillis status.currentTime) + 1000) 
        , timeTheGameEnds = Time.millisToPosix ((Time.posixToMillis status.currentTime) + 1000*60*2+1000)
        , punten = status.punten
        , koopbaar = List.map (naarWoordRaden status) [1,2,3,4,5,6,7,8,9,10,11,12]
        , gekocht = List.repeat 12 Wit
        , woord = ""
        , oauth = status.oauth
        , correctwoord = status.data.woord
        , muziek  = Maybe.map (\x -> (x,status.currentTime)) status.muziek.raden
        , kooptik = Maybe.map (\x -> (x,Time.millisToPosix 0)) status.muziek.tik
        , faal = status.muziek.faal
        }, Cmd.none, Audio.cmdNone)
      SoundLoaded result -> case result of
        Ok (sound, id) -> let x = status.muziek in (InGame {status | muziek = case id of
            "tune" ->  {x | tune  = Just sound} 
            "tik" ->   {x | tik   = Just sound}
            "raden" -> {x | raden = Just sound}
            _ -> status.muziek
          }, Cmd.none, Audio.cmdNone)
        _ -> (InGame status, Cmd.none, Audio.cmdNone)
      _ -> case hoofdupdate msg status of
        (status2, cmd2) -> (InGame status2, cmd2, Audio.cmdNone)
    Woordraden status -> case msg of
      Tick newtime -> (Woordraden { status | currentTime = newtime}, if Time.posixToMillis newtime > Time.posixToMillis status.timeTheGameEnds then Task.perform (\_ -> Submit) (Task.succeed ()) else Cmd.none, Audio.cmdNone)
      Submit -> if testcorrect status.woord status.correctwoord 
                then (Afrekenen (Win { basis = status.punten
                                , uithethoofd = List.sum (List.map (\(l1,_,b) -> case l1 of
                                      UitHetHoofd _ -> if b then 1 else 0
                                      Paars -> 1
                                      _ -> 0
                                    ) status.koopbaar)
                                , fout = List.length (List.filter (\(_,_,b) -> not b) status.koopbaar)
                                }), confetti Json.Encode.null, Audio.cmdNone) 
                else (Afrekenen (Verlies {gegeven = Dict.empty, juist = Dict.empty, woord = status.woord, faalstart = Maybe.map (\f -> (f, status.currentTime)) status.faal}), Cmd.none, Audio.cmdNone) -- TODO
      _ -> (Woordraden (woordupdate msg status), Cmd.none, Audio.cmdNone)
    Afrekenen status -> (model, Cmd.none, Audio.cmdNone)
      

-- SUBSCRIPTIONS


subscriptions : Audio.AudioData -> Model -> Sub Msg
subscriptions _ _ =
  Time.every 50 Tick



-- VIEW


view : Audio.AudioData -> Model -> Html Msg
view _ model =
  case model of
    HomeScreen status -> case status.muziekstart of
      Nothing ->
        div [style "background-image" "url('images/leeg.jpeg')", style "background-size" "100%", style "height" "100%"] [video [ id "media-video", style "width" "100%", onClick PlayAudio ] [ source [ src "video/intro.mp4", type_ "video/mp4" ] [] ]]
      Just ms -> let millisdiff = Time.posixToMillis status.now - Time.posixToMillis ms in
        if millisdiff <= 18000 
        then
          div [style "background-image" "url('images/leeg.jpeg')", style "background-size" "100%", style "height" "100%"] [video [ id "media-video", onClick PlayAudio, style "width" "100%", style "opacity" (String.fromInt (Basics.max ((16000-(Basics.max 15000 millisdiff)) // 10) 0) ++ "%")] [ source [ src "video/intro.mp4", type_ "video/mp4" ] [] ]]
        else
          div [style "background-image" "url('images/leeg.jpeg')", style "background-size" "100%", style "height" "100%"] (Utils.rows -- TODO: highscores
          [ (30, [], [])
          , (30, [style "color" "white", style "font-weight" "bolder", style "font-size" "5cqh", style "text-align" "center", style "width" "100%"], 
                 [text "Goeienavond, hartelijk welkom bij 2 voor 12.", br [] [], text "Vandaag spelen we met een nieuwe kandidaat.", br [] [], text "Wil je je voorstellen?"])
          , (10, [style "left" "50%", style "font-size" "4cqh"], [input [placeholder "naam", value status.username, onInput Answer] []])
          , (30, [], case (status.username, Maybe.andThen (Dict.get status.username) status.thesheet) of
                      ("", _) -> [text ""]
                      (_, Nothing) -> if status.waiting 
                                      then [text "Je staat op de wachtrij, er zijn nog 3586 kandidaten voor je. (Dit kan 10-20 seconden duren)"]
                                      else [button [onClick StartGame] [text "Schrijf je in"]]
                      _ -> [button [onClick StartGame] [text "Begin het spel!"]]
          )
          -- , (60, [], [text status.spreadsheettext])
          ])
    InGame status -> viewGame status
    Woordraden status -> viewWoord status
    Afrekenen status -> viewAfrekenen status

-- AUDIO
audio _ model = case model of
  -- HomeScreen status -> case status.muziek.tune of
  --   Nothing -> Audio.silence
  --   Just muziek -> Audio.audio muziek status.muziekstart 
  InGame status -> case status.muziek.tik of
    Nothing -> Audio.silence
    Just muziek -> if status.searching 
      then Audio.audio muziek status.recentstetik
      else Audio.silence
  Woordraden status -> 
    let audio1 = case status.muziek of
          Nothing -> Audio.silence
          Just (muziek, tijd) -> Audio.scaleVolume 0.2 (Audio.audio muziek tijd)
        audio2 = case status.kooptik of
          Nothing -> Audio.silence
          Just (muziek, tijd) -> Audio.audio muziek tijd
    in Audio.group [audio1, audio2]
  Afrekenen (Verlies info) -> case info.faalstart of
    Nothing -> Audio.silence
    Just (muziek, tijd) -> Audio.audio muziek tijd 
  _ -> Audio.silence





{-| These are all the kinds of messages that can be sent to the video player.
Add more cases if we want to tell the video player new things.
-}
type VideoEvent
    = Setup
    | Play
    | Pause
    | Stop
    | Restart
    | Mute
    | Unmute
    | VolumeDown
    | VolumeUp
    | SeekTo Float


{-| This is the function we should use to send messages to the video player. It
takes care of encoding and pushing through the port.
-}
pushVideoEvent : VideoEvent -> Cmd msg
pushVideoEvent event =
    event
        |> encodeVideoEvent
        |> videoEventStream


{-| Encodes a VideoEvent as a simple JSON value. As new events are added, also
add a case for the encoder. Elm will throw a compile-time error if you forget,
so don't worry about forgetting.
-}
encodeVideoEvent : VideoEvent -> Json.Encode.Value
encodeVideoEvent event =
    case event of
        Setup ->
            Json.Encode.object
                [ ( "kind", Json.Encode.string "setup" ) ]

        Play ->
            Json.Encode.object
                [ ( "kind", Json.Encode.string "play" ) ]

        Pause ->
            Json.Encode.object
                [ ( "kind", Json.Encode.string "pause" ) ]

        Stop ->
            Json.Encode.object
                [ ( "kind", Json.Encode.string "stop" ) ]

        Restart ->
            Json.Encode.object
                [ ( "kind", Json.Encode.string "restart" ) ]

        Mute ->
            Json.Encode.object
                [ ( "kind", Json.Encode.string "mute" ) ]

        Unmute ->
            Json.Encode.object
                [ ( "kind", Json.Encode.string "unmute" ) ]

        VolumeDown ->
            Json.Encode.object
                [ ( "kind", Json.Encode.string "volumedown" ) ]

        VolumeUp ->
            Json.Encode.object
                [ ( "kind", Json.Encode.string "volumeup" ) ]

        SeekTo position ->
            Json.Encode.object
                [ ( "kind", Json.Encode.string "seekto" )
                , ( "position", Json.Encode.float position )
                ]