module Main exposing (..)


import Browser
import Html exposing (..)
import Html.Attributes exposing (placeholder, value, style, src)
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
  , answer : String
  }


init : () -> (Model, Cmd Msg)
init _ =
  ( Model (Time.millisToPosix 0) 
          Nothing --(Just (Time.millisToPosix 0)) -- Nothing
          ""
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
          [ (40, [Svg.svg [ Svg.width "300", Svg.height "400", Svg.viewBox "0 0 300 400" ] -- een witte rechthoek. puur omdat 
            [ Svg.rect [ Svg.x "0", Svg.y "0", Svg.width "300", Svg.height "400", Svg.fill "#ffffff" ] []
            , Svg.foreignObject [Svg.x "0", Svg.y "0", Svg.width "300", Svg.height "400"] (rows 
            [ (60,  [text "vraag hier"])
            , (20,  [input [placeholder "antwoord", value model.answer] [], button [] [text "indienen"]])
            , (20, [button [] [text "Vorige vraag"], button [] [text "Volgende vraag"]]) 
            ])]])
          , (60, [ button [] [text "Dat zoeken we op"]
                 , img [src "images/astrid.jpg"] []])
          ])
        , (10, cols
          [ (10, [clock millisdiff])
          , (80, [letters model])
          , (10, [punten 500])
          ])
        ])

-- gegeven aantal milliseconden tot einde, maak klok
clock : Int -> Html Msg
clock millisdiff = 
  let second = modBy 60 (millisdiff // 1000)
      minute = (millisdiff // 1000) // 60
  in Svg.svg [Svg.width "100", Svg.height "50", Svg.viewBox "0 0 100 50"]
             [ Svg.rect [Svg.x "0", Svg.y "0", Svg.width "75", Svg.height "50", Svg.fill "#ff0000"] []
             , Svg.circle [Svg.cx "75", Svg.cy "25", Svg.r "25", Svg.fill "#ff0000"] []
             , Svg.circle [Svg.cx "75", Svg.cy "25", Svg.r "21", Svg.stroke "#ffffff", Svg.strokeWidth "2", Svg.fill "none"] []
             , Svg.foreignObject [Svg.x "55", Svg.y "15", Svg.width "50", Svg.height "50"] [div [style "color" "white"] [text (String.fromInt minute ++ ":" ++ String.fromInt second)]]]

letters : Model -> Html Msg
letters model =
  table [] [ tr [] (List.repeat 12 (th [style "border" "1px solid black"] [text "A"]))
           , tr [style "color" "red"] (List.map (String.fromInt >> text >> \i -> td [] [i]) [1,2,3,4,5,6,7,8,9,10,11,12])]

punten : Int -> Html Msg
punten x =
  Svg.svg [Svg.width "100", Svg.height "50", Svg.viewBox "0 0 100 50"]
          [ Svg.rect [Svg.x "25", Svg.y "0", Svg.width "75", Svg.height "50", Svg.fill "#ff0000"] []
          , Svg.circle [Svg.cx "25", Svg.cy "25", Svg.r "25", Svg.fill "#ff0000"] []
          , Svg.circle [Svg.cx "25", Svg.cy "25", Svg.r "21", Svg.stroke "#ffffff", Svg.strokeWidth "2", Svg.fill "none"] []
          , Svg.foreignObject [Svg.x "10", Svg.y "15", Svg.width "50", Svg.height "50"] [div [style "color" "white"] [text (String.fromInt x)]]]

