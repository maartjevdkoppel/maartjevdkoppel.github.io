module Main exposing (..)


import Browser
import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)
import Task
import Time


-- MAIN

main =
  Browser.element
    { init = init
    , view = view
    , update = update
    , subscriptions = subscriptions
    }


-- MODEL


type alias Model = 
  { time : Time.Posix
  , timeTheGameEnds : Maybe Time.Posix
  }


init : () -> (Model, Cmd Msg)
init _ =
  ( Model (Time.millisToPosix 0) Nothing
  , Task.perform Tick Time.now
  )



-- UPDATE


type Msg
  = StartGame
  | Tick Time.Posix


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
  case msg of
    StartGame -> 
      ( { model | timeTheGameEnds = Just (Time.millisToPosix ((Time.posixToMillis model.time) + 12000*60)) }
      , Cmd.none
      )
    Tick newtime -> 
      ( { model | time = newtime }
      , Cmd.none
      )


-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
  Time.every 1000 Tick



-- VIEW


view : Model -> Html Msg
view model =
  case model.timeTheGameEnds of
    Nothing -> div [] [button [onClick StartGame] [text "Begin!"]]
    Just endtime ->
      let
        millisdiff = Time.posixToMillis endtime - Time.posixToMillis model.time
        second = modBy 60 (millisdiff // 1000)
        minute = (millisdiff // 1000) // 60
      in div [] [ text (String.fromInt minute ++ ":" ++ String.fromInt second)]
