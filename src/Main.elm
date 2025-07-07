port module Main exposing (..)


import Browser
import Dict
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput)
import Task
import Time
import Process
import Audio

import Afrekenen exposing (..)
import Database exposing (..)
import Hoofdspel exposing (..)
import Letters exposing (Letter(..))
import Types exposing (..)
import Utils exposing (..)
import Woordraden exposing (..)
import Http exposing (Error(..))
import Json.Encode
import Json.Decode


port audioPortToJS : Json.Encode.Value -> Cmd msg
port audioPortFromJS : (Json.Decode.Value -> msg) -> Sub msg

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


type Model = HomeScreen {now : Time.Posix, thesheet : Maybe Vraagsheet, username : String, oauth : String, waiting : Bool, muziek : Adios, muziekstart : Time.Posix } --, spreadsheettext : String }
           | InGame HoofdStatus
           | Woordraden WoordraadStatus
           | Afrekenen Afrekenen



init : String -> (Model, Cmd Msg, Audio.AudioCmd Msg)
init oauthtoken =
  ( HomeScreen { now = Time.millisToPosix 0, thesheet = Nothing, username = "", oauth = oauthtoken, waiting = False, muziek = {tune=Nothing, tik=Nothing, raden=Nothing}, muziekstart = Time.millisToPosix 0 }
  , Cmd.batch [Task.perform Tick Time.now
              ] --, readSpreadsheet oauthtoken]
  , Audio.cmdNone
  -- , Audio.loadAudio SoundLoaded "https://maartjevdkoppel.github.io/audio/tune.mp3"
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
        Ok () -> ( HomeScreen status, Process.sleep 2000 |> \_ -> readSpreadsheet status.oauth, Audio.cmdNone)
        Err e -> (HomeScreen {status | username = "Error adding user" }, Cmd.none, Audio.cmdNone)
      Answer naam -> (HomeScreen {status | username = naam}, Cmd.none, Audio.cmdNone)
      PlayAudio -> (model, Cmd.none, Audio.cmdBatch 
          [ Audio.loadAudio (soundloaded "tune")  "https://maartjevdkoppel.github.io/audio/tune.mp3"
          , Audio.loadAudio (soundloaded "tik")   "https://maartjevdkoppel.github.io/audio/tik.mp3"
          , Audio.loadAudio (soundloaded "raden") "https://maartjevdkoppel.github.io/audio/woordraad.mp3"
          ])
      SoundLoaded result -> case result of
        Ok (sound, id) -> let x = status.muziek in (HomeScreen {status | muziek = case id of
            "tune" ->  {x | tune  = Just sound} 
            "tik" ->   {x | tik   = Just sound}
            "raden" -> {x | raden = Just sound}
            _ -> status.muziek
          , muziekstart = case id of
            "tune" -> status.now
            _ -> status.muziekstart
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
        , muziek = Maybe.map (\x -> (x,status.currentTime)) status.muziek.raden
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
      Submit -> if status.woord == status.correctwoord 
                then (Afrekenen { basis = status.punten
                                , uithethoofd = List.sum (List.map (\(l1,_,b) -> case l1 of
                                      UitHetHoofd _ -> if b then 1 else 0
                                      Paars -> 1
                                      _ -> 0
                                    ) status.koopbaar)
                                , fout = List.length (List.filter (\(_,_,b) -> not b) status.koopbaar)
                                }, Cmd.none, Audio.cmdNone) 
                else (model, Cmd.none, Audio.cmdNone) -- TODO
      _ -> (Woordraden (woordupdate msg status), Cmd.none, Audio.cmdNone)
    Afrekenen status -> (model, Cmd.none, Audio.cmdNone)
      

-- SUBSCRIPTIONS


subscriptions : Audio.AudioData -> Model -> Sub Msg
subscriptions _ _ =
  Time.every 1000 Tick



-- VIEW


view : Audio.AudioData -> Model -> Html Msg
view _ model =
  case model of
    HomeScreen status -> case status.muziek.tune of
      Nothing -> button [onClick PlayAudio] [text "Goeienavondhartelijk welkom bij twee voor 12"]
      Just _ ->
        div [] (Utils.rows -- TODO: highscores
        [ (20, [], [input [placeholder "naam", value status.username, onInput Answer] []])
        , (20, [], case (status.username, Maybe.andThen (Dict.get status.username) status.thesheet) of
                    ("", _) -> []
                    (_, Nothing) -> if status.waiting 
                                    then [text "Even geduld alstublieft"] 
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
  HomeScreen status -> case status.muziek.tune of
    Nothing -> Audio.silence
    Just muziek -> Audio.audio muziek status.muziekstart 
  InGame status -> case status.muziek.tik of
    Nothing -> Audio.silence
    Just muziek -> if status.searching && evensec status.currentTime
      then Audio.audio muziek status.currentTime
      else Audio.silence
  Woordraden status -> case status.muziek of
    Nothing -> Audio.silence
    Just (muziek, tijd) -> Audio.audio muziek tijd
  _ -> Audio.silence
