module Main exposing (..)


import Browser
import Dict
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput)
import Task
import Time
import Process

import Afrekenen exposing (..)
import Database exposing (..)
import Hoofdspel exposing (..)
import Letters exposing (Letter(..))
import Types exposing (..)
import Utils exposing (..)
import Woordraden exposing (..)
import Http exposing (Error(..))

-- MAIN

main : Program String Model Msg
main =
  Browser.element
    { init = init
    , view = view
    , update = update
    , subscriptions = subscriptions
    }


-- MODEL


type Model = HomeScreen {now : Time.Posix, thesheet : Maybe Vraagsheet, username : String, oauth : String, waiting : Bool } --, spreadsheettext : String }
           | InGame HoofdStatus
           | Woordraden WoordraadStatus
           | Afrekenen Afrekenen



init : String -> (Model, Cmd Msg)
init oauthtoken =
  ( HomeScreen { now = Time.millisToPosix 0, thesheet = Nothing, username = "", oauth = oauthtoken, waiting = False }
  , Cmd.batch [Task.perform Tick Time.now
              , readSpreadsheet oauthtoken]
  )



-- UPDATE


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
  case model of
    HomeScreen status -> case msg of
      StartGame -> case status.username of
        "" -> (model, Cmd.none)
        naam -> case status.thesheet of
          Nothing -> (model, Cmd.none)
          Just sheet -> case Dict.get naam sheet of
            Nothing -> (HomeScreen {status | waiting = True}, adduser naam status.oauth)
            Just info -> (InGame (startgame status.now info status.oauth), logstartgame info naam status.now status.oauth)
      
      --(InGame (startgame status.now), Cmd.none)
      Tick newtime -> (HomeScreen {status | now = newtime }, Cmd.none)
      DataReceived result ->
        case result of
          Ok data -> ( HomeScreen {status | thesheet = data}, Cmd.none)
          _ -> ( model, Cmd.none )
      UserAdded r -> case r of
        Ok () -> ( HomeScreen status, Process.sleep 2000 |> \_ -> readSpreadsheet status.oauth)
        Err e -> (HomeScreen {status | username = "Error adding user" }, Cmd.none)
      Answer naam -> (HomeScreen {status | username = naam}, Cmd.none)
      _ -> (model, Cmd.none)

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
        }, Cmd.none)
      _ -> case hoofdupdate msg status of
        (status2, cmd2) -> (InGame status2, cmd2)
    Woordraden status -> case msg of
      Tick newtime -> (Woordraden { status | currentTime = newtime}, if Time.posixToMillis newtime > Time.posixToMillis status.timeTheGameEnds then Task.perform (\_ -> Submit) (Task.succeed ()) else Cmd.none)
      Submit -> if status.woord == status.correctwoord 
                then (Afrekenen { basis = status.punten
                                , uithethoofd = List.sum (List.map (\(l1,_,b) -> case l1 of
                                      UitHetHoofd _ -> if b then 1 else 0
                                      Paars -> 1
                                      _ -> 0
                                    ) status.koopbaar)
                                , fout = List.length (List.filter (\(_,_,b) -> not b) status.koopbaar)
                                }, Cmd.none) 
                else (model, Cmd.none) -- TODO
      _ -> (Woordraden (woordupdate msg status), Cmd.none)
    Afrekenen status -> (model, Cmd.none)
      

-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
  Time.every 1000 Tick



-- VIEW


view : Model -> Html Msg
view model =
  case model of
    HomeScreen status -> div [] (Utils.rows -- TODO: highscores
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
