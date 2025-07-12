port module Main exposing (..)

import Audio
import Dict
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput)
import Http exposing (Error(..))
import Json.Decode
import Json.Encode
import Maybe.Extra
import Process
import Task
import Time

import Afrekenen exposing (..)
import Database exposing (..)
import Highscores exposing (..)
import Hoofdspel exposing (..)
import Letters exposing (Letter(..))
import Types exposing (..)
import Utils exposing (..)
import Woordraden exposing (..)
import Nakijken exposing (..)

-- PORTS

port videoEventStream : Json.Encode.Value -> Cmd msg
port audioPortToJS : Json.Encode.Value -> Cmd msg
port audioPortFromJS : (Json.Decode.Value -> msg) -> Sub msg
port confetti : Json.Encode.Value -> Cmd msg


staatdespreadsheetaan : Bool
staatdespreadsheetaan = True
intro : Bool
intro = True

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


type Model = HomeScreen {now : Time.Posix, thesheet : Maybe Vraagsheet, username : String, oauth : String, waiting : Bool, muziek : Adios, introstart : Maybe Time.Posix } --, spreadsheettext : String }
           | InGame HoofdStatus
           | Woordraden WoordraadStatus
           | Afrekenen Afrekenen
           | Highscore HighscoreStatus
           | Nakijken Nakijkstatus



init : String -> (Model, Cmd Msg, Audio.AudioCmd Msg)
init oauthtoken =
  ( HomeScreen { now = Time.millisToPosix 0, thesheet = Nothing, username = "", oauth = oauthtoken, waiting = False, introstart = Nothing
               , muziek = { tune=Nothing
                          , tik=Nothing
                          , raden=Nothing
                          , faal = Nothing
                          , psmuziek = Nothing
                          , psbel = Nothing
                          , wikibel = Nothing
                          }
               }
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
          Nothing -> if staatdespreadsheetaan then (model, readSpreadsheet status.oauth, Audio.cmdNone) else (InGame (startgame status.now {woord="", vragen=Dict.empty, antwoorden=Dict.empty, volgorde=Dict.empty, paardsprongrng=(1,1)} status.oauth status.muziek), Cmd.none, Audio.cmdNone) --(model, Cmd.none)
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
      PlayAudio -> (HomeScreen {status | introstart = Just status.now}
                   , Cmd.batch 
                      [ pushVideoEvent Play
                      , Process.sleep (if intro then 16000 else 0) |> Task.perform (\() -> StartStopWiki)
                      ]
                   , Audio.cmdBatch 
                      [ Audio.loadAudio (soundloaded "tune")  "https://maartjevdkoppel.github.io/audio/tune.mp3"
                      , Audio.loadAudio (soundloaded "tik")   "https://maartjevdkoppel.github.io/audio/tik.mp3"
                      , Audio.loadAudio (soundloaded "raden") "https://maartjevdkoppel.github.io/audio/woordraad.mp3"
                      , Audio.loadAudio (soundloaded "faal")  "https://maartjevdkoppel.github.io/audio/woord-faal.mp3"
                      , Audio.loadAudio (soundloaded "psmuziek")  "https://maartjevdkoppel.github.io/audio/paardensprong-muziek.mp3"
                      , Audio.loadAudio (soundloaded "psbel")  "https://maartjevdkoppel.github.io/audio/paardensprong-tijd-op.mp3"
                      , Audio.loadAudio (soundloaded "wikibel")  "https://maartjevdkoppel.github.io/audio/stop-zoeken.mp3"
                      ]
                   )
      SoundLoaded result -> case result of
        Ok (sound, id) -> let x = status.muziek in (HomeScreen {status | muziek = case id of
            "tune" ->     {x | tune  = Just sound} 
            "tik" ->      {x | tik   = Just sound}
            "raden" ->    {x | raden = Just sound}
            "faal" ->     {x | faal  = Just sound}
            "psmuziek" -> {x | psmuziek = Just sound}
            "psbel" ->    {x | psbel =    Just sound}
            "wikibel" ->  {x | wikibel =  Just sound}
            _ -> status.muziek
          -- , muziekstart = case id of
          --   "tune" -> status.now
          --   _ -> status.muziekstart
          }, Cmd.none, Audio.cmdNone)
        _ -> (model, Cmd.none, Audio.cmdNone)
      StartStopWiki -> -- dit is natuurlijk onzin hier, wordt gebruikt als proxy voor volume down
        (model, Cmd.batch [pushVideoEvent VolumeDown, pushVideoEvent VolumeDown, pushVideoEvent VolumeDown, pushVideoEvent VolumeDown, pushVideoEvent VolumeDown], Audio.cmdNone)
      GetHighscores -> (model, readHighscores status.oauth, Audio.cmdNone)
      HighscoreReceived result -> case result of 
        Ok alle -> (Highscore {huidig = Vijftien, jouw = Nothing, alle=alle, oauth = status.oauth, muziek = status.muziek}, Cmd.none, Audio.cmdNone)
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
        , logindex = status.logindex
        , nakijkinfo = mkNakijk status.data status.gegevenantwoorden status.searched
        , adios = status.muziek
        }, Cmd.none, Audio.cmdNone)
      SoundLoaded result -> case result of
        Ok (sound, id) -> let x = status.muziek in (InGame {status | muziek = case id of
            "tune" ->     {x | tune  = Just sound} 
            "tik" ->      {x | tik   = Just sound}
            "raden" ->    {x | raden = Just sound}
            "faal" ->     {x | faal  = Just sound}
            "psmuziek" -> {x | psmuziek = Just sound}
            "psbel" ->    {x | psbel =    Just sound}
            "wikibel" ->  {x | wikibel =  Just sound}
            _ -> status.muziek
          }, Cmd.none, Audio.cmdNone)
        _ -> (InGame status, Cmd.none, Audio.cmdNone)
      _ -> case hoofdupdate msg status of
        (status2, cmd2) -> (InGame status2, cmd2, Audio.cmdNone)
    Woordraden status -> case msg of
      Tick newtime -> (Woordraden { status | currentTime = newtime}, if Time.posixToMillis newtime > Time.posixToMillis status.timeTheGameEnds then Task.perform (\_ -> Submit) (Task.succeed ()) else Cmd.none, Audio.cmdNone)
      Submit -> 
        let uithethoofd = List.sum (List.map (\(l1,_,b) -> case l1 of
                              UitHetHoofd _ -> if b then 1 else 0
                              Paars -> 1
                              _ -> 0
                            ) status.koopbaar)
            fout = List.length (List.filter (\(_,_,b) -> not b) status.koopbaar)
            punten = if testcorrect status.woord status.correctwoord 
                      then status.punten + 10*uithethoofd + 100 - 25 * (Basics.min 4 fout) 
                      else 0
            door = { focus = Nothing
                   , tijdover = Time.posixToMillis status.timeTheGameEnds - Time.posixToMillis status.currentTime
                   , punten = punten
                   , info = status.nakijkinfo
                   , oauth = status.oauth
                   , muziek = status.adios
                   }
        in
        if testcorrect status.woord status.correctwoord 
        then (Afrekenen (Win { basis = status.punten
                        , uithethoofd = uithethoofd
                        , fout = fout
                        , door = door
                        }), Cmd.batch [confetti Json.Encode.null, schrijfscore punten status.logindex status.oauth], Audio.cmdNone) 
        else (Afrekenen (Verlies {woord = status.correctwoord, faalstart = Maybe.map (\f -> (f, status.currentTime)) status.faal, door=door}), schrijfscore 0 status.logindex status.oauth, Audio.cmdNone) -- TODO
      _ -> (Woordraden (woordupdate msg status), Cmd.none, Audio.cmdNone)
    Afrekenen status -> case msg of
      Submit -> let door = case status of
                      Win info -> info.door
                      Verlies info -> info.door
        in (Nakijken door, Cmd.none, Audio.cmdNone)
      _ -> (model, Cmd.none, Audio.cmdNone)
    Highscore status -> case msg of
      Submit -> 
        (HomeScreen { now = Time.millisToPosix 100000, thesheet = Nothing, username = "", oauth = status.oauth, waiting = False, introstart = Just (Time.millisToPosix 0)
                    , muziek = status.muziek
                    }
        , if staatdespreadsheetaan then readSpreadsheet status.oauth else Cmd.none
        , Audio.cmdNone)
      _ -> (Highscore (updatehs status msg), Cmd.none, Audio.cmdNone)
    Nakijken status -> case msg of
      LetterKopen i -> (Nakijken {status | focus = Just i}, Cmd.none, Audio.cmdNone)
      GetHighscores -> (model, readHighscores status.oauth, Audio.cmdNone)
      HighscoreReceived result -> case result of
        Ok data -> (Highscore {alle=data, jouw = Just (Vijftien, status.punten), huidig = Vijftien, oauth = status.oauth, muziek = status.muziek}, Cmd.none, Audio.cmdNone)
        _ -> (model, Cmd.none, Audio.cmdNone)
      _ -> (model, Cmd.none, Audio.cmdNone)
      

-- SUBSCRIPTIONS


subscriptions : Audio.AudioData -> Model -> Sub Msg
subscriptions _ _ =
  Time.every 50 Tick



-- VIEW


view : Audio.AudioData -> Model -> Html Msg
view _ model =
  case model of
    InGame status -> viewGame status
    Woordraden status -> viewWoord status
    Afrekenen status -> viewAfrekenen status
    HomeScreen status -> case status.introstart of
      Nothing ->
        div [style "background-image" "url('images/leeg.jpeg')", style "background-size" "100%", style "height" "100%"] 
            [video [ id "media-video", style "width" "100%", onClick PlayAudio ] [ source [ src "video/intro.mp4", type_ "video/mp4" ] [] ]
            , div [style "left" "50%", style "position" "absolute", style "transform" "translate(-50%, -70cqh)", style "font-size" "5cqh", onClick PlayAudio] [text "Klik om te beginnen"]]
      Just ms -> let millisdiff = Time.posixToMillis status.now - Time.posixToMillis ms in
        if millisdiff <= if intro then 18000 else 10
        then
          div [style "background-image" "url('images/leeg.jpeg')", style "background-size" "100%", style "height" "100%"] 
              [video [ id "media-video", onClick PlayAudio, style "width" "100%", style "opacity" (String.fromInt (Basics.max ((16000-(Basics.max 15000 millisdiff)) // 10) 0) ++ "%")] [ source [ src "video/intro.mp4", type_ "video/mp4" ] [] ]]
        else
          beginmenu status
    Highscore status -> viewHighscore status
    Nakijken status -> viewNakijk status

beginmenu status = div 
  [style "background-image" "url('images/leeg.jpeg')", style "background-size" "100%", style "height" "100%"] 
  (Utils.rows -- TODO: highscores
    [ (15, [], [])
    , (5, [], Utils.cols
        [(38,[])
        ,(10,[button [onClick GetHighscores, style "height" "100%", style "width" "100%", style "background-color" "rgba(88, 88, 88, 1)", style "color" "white", style "border" "none", style "border-radius" "1cqh", style "font-size" "3cqh", style "font-family" "Lucida Sans", style "box-shadow" "1px 9px #888888"] 
                      [text "Highscores"]])
        ,(45,[])
        ])
    , (20, [], [])
    , (20,  [ style "color" "white", style "font-weight" "bolder", style "font-size" "3.5cqh", style "text-align" "center", style "width" "100%"
            , style "text-shadow" "2px 2px 4px #000000" 
            ], Utils.cols
                [ (10, [])
                , (80, [text "Goeienavond, hartelijk welkom bij 2 voor 12.", br [] [], text "Wil je je voorstellen?"])
                , (10, [])
                ]
      )
    , (10, [] --[style "left" "50%", style "font-size" "4cqh", style "align" "center"]
        , Utils.cols
            [ (38, [])
            , (7, [input [placeholder "naam", value status.username, onInput Answer, style "height" "100%", style "padding" "0cqh 2cqh", style "font-size" "3cqh"] []])
            , (3, [])
            , (14,  let styles = ([onClick StartGame, style "height" "70%", style "background-color" "rgb(227, 7, 20)", style "color" "white", style "border" "none", style "border-radius" "1cqh", style "font-size" "3cqh", style "font-family" "Lucida Sans", style "box-shadow" "1px 9px #888888"] ++ centeringstuff) 
                    in if status.username == "" 
                        then [text ""] 
                        else if Maybe.Extra.isJust (status.thesheet |> Maybe.andThen (Dict.get status.username))
                              then [button styles [text "\u{00A0}Begin het spel!\u{00A0}"]]
                              else if status.waiting
                                    then [text "Je staat op de wachtrij, er zijn nog 3586 kandidaten voor je. (Dit kan 10-20 seconden duren)"]
                                    else [button styles [text "\u{00A0}Schrijf je in!\u{00A0}"]])
            , (38, [])
            ]
      )
    ]
  )

-- AUDIO
audio _ model = 
  let maybeplay x = case x of
        Nothing -> Audio.silence
        Just (muziek,tijd) -> Audio.audio muziek tijd
  in case model of
  -- HomeScreen status -> case status.muziek.tune of
  --   Nothing -> Audio.silence
  --   Just muziek -> Audio.audio muziek status.muziekstart 
  InGame status -> Audio.group
    [ maybeplay (Maybe.map2 (\x y -> (x,y)) status.muziek.tik status.recentstetik)
    , maybeplay (status.muziek.psbel |> Maybe.andThen
        (\bel -> status.paardensprongbegintijd |> Maybe.andThen (\psbt -> 
          if status.questionNumber == 8 
          && Time.posixToMillis status.currentTime > 30000 + Time.posixToMillis psbt
          && Time.posixToMillis status.currentTime < 31000 + Time.posixToMillis psbt
          then Just (bel, Time.millisToPosix (30000+Time.posixToMillis psbt)) 
          else Nothing)))
    , Audio.scaleVolume 0.2 (maybeplay (Maybe.Extra.join (Maybe.map2 (\muziek psbt -> 
          if status.questionNumber == 8
          && (status.searching || Time.posixToMillis status.currentTime < 30000+Time.posixToMillis psbt) 
          then Just (muziek, psbt)
          else Nothing) status.muziek.psmuziek status.paardensprongbegintijd)))
    , maybeplay (Maybe.map2 Tuple.pair status.muziek.wikibel status.recentstebel)
    ]
  Woordraden status -> Audio.group 
    [ Audio.scaleVolume 0.2 (maybeplay status.muziek)
    , maybeplay status.kooptik
    ]
  Afrekenen (Verlies info) -> maybeplay info.faalstart
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