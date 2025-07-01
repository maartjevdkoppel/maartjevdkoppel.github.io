module Main exposing (..)


import Browser
import Dict
import Html exposing (..)
import Html.Events exposing (onClick)
import Set
import Task
import Time

import Utils exposing (..)
import Hoofdspel exposing (..)
import Types exposing (..)
import Woordraden exposing (..)
import Letters exposing (Letter(..))

-- MAIN

main : Program () Model Msg
main =
  Browser.element
    { init = init
    , view = view
    , update = update
    , subscriptions = subscriptions
    }


-- MODEL


type Model = HomeScreen Time.Posix
           | InGame HoofdStatus
           | Woordraden WoordraadStatus



init : () -> (Model, Cmd Msg)
init _ =
  ( HomeScreen (Time.millisToPosix 0)
  , Task.perform Tick Time.now
  )



-- UPDATE


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
  case model of
    HomeScreen now -> case msg of
      StartGame -> (InGame (startgame now), Cmd.none)
      Tick newtime -> (HomeScreen newtime, Cmd.none)
      _ -> (model, Cmd.none)

    InGame status -> case msg of
      NaarWoordraden -> (Woordraden 
        { currentTime = Time.millisToPosix ((Time.posixToMillis status.currentTime) + 1000) 
        , timeTheGameEnds = Time.millisToPosix ((Time.posixToMillis status.currentTime) + 1000*60*2+1000)
        , punten = status.punten
        , koopbaar = List.map (naarWoordRaden status) [1,2,3,4,5,6,7,8,9,10,11,12]
        , gekocht = List.repeat 12 Wit
        , woord = ""
        }, Cmd.none)
      _ -> case hoofdupdate msg status of
        (status2, cmd2) -> (InGame status2, cmd2)
    Woordraden status -> (Woordraden (woordupdate msg status), Cmd.none)
      

-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
  Time.every 1000 Tick



-- VIEW


view : Model -> Html Msg
view model =
  case model of
    HomeScreen _ -> div [] [button [onClick StartGame] [text "Begin!"]]
    InGame status -> viewGame status
    Woordraden status -> viewWoord status
