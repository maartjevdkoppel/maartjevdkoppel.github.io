module Main exposing (..)


import Browser
import Html exposing (..)
import Html.Events exposing (onClick)
import Task
import Time
import Utils exposing (..)
import Svg
import Svg.Attributes as Svg

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
subscriptions _ =
  Time.every 100 Tick



-- VIEW


view : Model -> Html Msg
view model =
  case model.timeTheGameEnds of
    Nothing -> div [] [button [onClick StartGame] [text "Begin!"]]
    Just endtime ->
      let millisdiff = Time.posixToMillis endtime - Time.posixToMillis model.time in 
      div [] (rows 
        [ (90, cols
          [ (40, [Svg.svg [ Svg.width "300", Svg.height "1000", Svg.viewBox "0 0 300 1000" ] 
            [ Svg.rect [ Svg.x "10", Svg.y "10", Svg.width "250", Svg.height "800", Svg.rx "15", Svg.ry "15" ] []
            , Svg.foreignObject [Svg.x "10", Svg.y "10", Svg.width "200", Svg.height "500"] (rows 
            [ (60,  [text "vraag hier"])
            , (20,  [text "antwoordveld"])
            , (20, [text "navigatie"]) 
            ])]])
          , (60,[ text "wiki"])
          ])
        , (10, cols
          [ (10, [clock millisdiff])
          , (80, [ text "letters hier!"])
          , (10, [ text "500"]) --punten
          ])
        ])

-- gegeven aantal milliseconden tot einde, maak klok
clock : Int -> Html Msg
clock millisdiff = 
  let second = modBy 60 (millisdiff // 1000)
      minute = (millisdiff // 1000) // 60
  in text (String.fromInt minute ++ ":" ++ String.fromInt second)

