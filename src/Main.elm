module Main exposing (..)


import Browser
import Dict
import Html exposing (..)
import Html.Attributes exposing (placeholder, value, style, src, type_, disabled, id)
import Html.Events exposing (onClick, onInput)
import Set
import Svg
import Svg.Attributes as Svg
import Task
import Time
import Utils exposing (..)

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


-- type alias Model = 
--   { time : Time.Posix
--   , timeTheGameEnds : Maybe Time.Posix
--   , answer : String
--   }

type Model = HomeScreen Time.Posix
           | InGame Status

type alias Status = 
  { currentTime : Time.Posix
  , timeTheGameEnds : Time.Posix
  , questions : Dict.Dict Int String
  , answers : Dict.Dict Int String
  , questionNumber : Int
  , lastQuestion : Int
  , searching : Bool
  , punten : Int
  , searched : Set.Set Int
  }



init : () -> (Model, Cmd Msg)
init _ =
  ( HomeScreen (Time.millisToPosix 0)
  , Task.perform Tick Time.now
  )



-- UPDATE


type Msg
  = StartGame
  | Tick Time.Posix
  | StartStopWiki
  | Answer String
  | PreviousQ
  | NextQ


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
  case model of
    HomeScreen now -> case msg of
      StartGame -> (InGame { currentTime=now
                           , timeTheGameEnds=Time.millisToPosix (Time.posixToMillis now + 12*60*1000)
                           , questions = Dict.fromList ((1, "Humpty Dumpty had a great fall. Who could put him back together again?") :: List.map (\i -> (i,"vraag "++String.fromInt i)) [2,3,4,5,6,7,8,9,10,11,12])
                           , answers = Dict.empty
                           , questionNumber = 1
                           , lastQuestion = 1
                           , searching = False
                           , punten = 500
                           , searched = Set.empty}, Cmd.none)
      Tick newtime -> (HomeScreen newtime, Cmd.none)
      _ -> (model, Cmd.none)
    InGame status ->
      case msg of
        StartGame -> -- gek, hoort nooit te gebeuren
          ( InGame { status | timeTheGameEnds = Time.millisToPosix ((Time.posixToMillis status.currentTime) + 12000*60) }
          , Cmd.none
          )
        Tick newtime -> 
          ( InGame { status | currentTime = newtime
                            , punten = if status.searching && evensec newtime then status.punten - 1 else status.punten -- TODO misschien netter om bij te houden hoe lang de huidige zoek is, zodat je geen nadeel of voordeel hebt als je net op een even aantal begint
                   }
          , Cmd.none
          )
        StartStopWiki -> (InGame { status | searching = not status.searching, searched = Set.insert status.questionNumber status.searched}, Cmd.none)
        Answer answer -> (InGame { status | answers = Dict.insert status.questionNumber answer status.answers}, Cmd.none)
        PreviousQ -> (InGame {status | questionNumber = status.questionNumber - 1}, Cmd.none)
        NextQ     -> (InGame {status | questionNumber = status.questionNumber + 1
                                     , lastQuestion = max status.lastQuestion (status.questionNumber + 1)}, Cmd.none)

-- even aantal seconden
evensec : Time.Posix -> Bool
evensec t = 0 == modBy 2 ((Time.posixToMillis t) // 1000)

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

viewGame : Status -> Html Msg
viewGame status =
  div [style "background-image" "url('images/astrid.jpg')", style "background-size" "100%", style "height" "100%"] 
      (rows 
        [ (80, [], cols
                    [ (25, vraagbox status)
                    , (70, wiki status)
                    ])
        , (15, [style "background-color" "rgba(237, 230, 214, 0.9)", style "font-weight" "bolder"], cols
                    [ (10, [klok status])
                    , (70, [letters status])
                    , (10, [punten status.punten])
                    ])
        ])

klok : Status -> Html Msg
klok status = 
  let millisdiff =  Time.posixToMillis status.timeTheGameEnds - Time.posixToMillis status.currentTime 
      second = modBy 60 (millisdiff // 1000)
      secondstr = if second > 9 then String.fromInt second else "0"++String.fromInt second
      minute = (millisdiff // 1000) // 60
      minutestr = if minute > 9 then String.fromInt minute else "0"++String.fromInt minute
  in Svg.svg svgfullsize
             [ Svg.rect [Svg.x "0", Svg.y "0", Svg.width "calc(100% - 7.5cqh)", Svg.height "100%", Svg.fill "#ff0000"] []
             , Svg.circle [Svg.cx "calc(100% - 7.5cqh)", Svg.cy "50%", Svg.r "7.5cqh", Svg.fill "#ff0000"] []
             , Svg.circle [Svg.cx "calc(100% - 7.5cqh)", Svg.cy "50%", Svg.r "6.5cqh", Svg.stroke "#ffffff", Svg.strokeWidth "0.7cqh", Svg.fill "none"] []
             , Svg.foreignObject [Svg.x "calc(100% - 15cqh)", Svg.y "0", Svg.width "15cqh", Svg.height "100%"] 
                                 [div ([style "color" "white", style "text-align" "center", style "font-size" "3.8cqh"]++centeringstuff) 
                                       [text (minutestr ++ ":" ++ secondstr)]]]

letters : Status -> Html Msg
letters status = --div [] []
  table [style "scale" "200%", style "position" "absolute", style "left" "50%", style "top" "87.5%", style "transform" "translate(-25%, -15%)" -- centering the whole thing
        , style "text-align" "center"] -- centering text
        [ tr [] (List.intersperse (th [style "font-size" "0.5cqh", style "width" "0.5cqh"] []) -- ruimte tussen letters
                                  (List.map (\i -> th [if i>status.lastQuestion || Set.member i status.searched then style "background-color" "white" else style "background-image" "url('images/uithethoofd.jpg')", style "background-size" "100% 100%"
                                                      , style "font-size" "3cqh", style "opacity" "100%"
                                                      , style "height" "4cqh", style "width" "3cqh"]
                                                      [text (Maybe.withDefault "" (getBeginLetter status i))])
                                            [1,2,3,4,5,6,7,8,9,10,11,12]))
        , tr [] (List.intersperse (td [] []) (List.map (\i -> td [style "font-size" "1.2cqh", style "color" (if i>status.lastQuestion then "black" else "red")] [text (String.fromInt i)]) [1,2,3,4,5,6,7,8,9,10,11,12]))]

getBeginLetter : Status -> Int -> Maybe String
getBeginLetter status i = Maybe.map (String.toUpper << String.slice 0 1) (Dict.get i status.answers)

punten : Int -> Html Msg
punten x =
  Svg.svg (svgfullsize ++ [style "opacity" "100%"])
          [ Svg.rect [Svg.x "7.5cqh", Svg.y "0", Svg.width "calc(100% - 7.5cqh)", Svg.height "100%", Svg.fill "#ff0000"] []
          , Svg.circle [Svg.cx "7.5cqh", Svg.cy "50%", Svg.r "7.5cqh", Svg.fill "#ff0000"] []
          , Svg.circle [Svg.cx "7.5cqh", Svg.cy "50%", Svg.r "6.5cqh", Svg.stroke "#ffffff", Svg.strokeWidth "0.7cqh", Svg.fill "none"] []
          , Svg.foreignObject [Svg.x "0", Svg.y "0", Svg.width "15cqh", Svg.height "100%"] [div ([style "color" "white", style "text-align" "center", style "font-size" "3.8cqh"]++centeringstuff) [text (String.fromInt x)]]]

wiki : Status -> List (Html Msg)
wiki status = rows 
  [ (10, [], [button ([onClick StartStopWiki, style "height" "50%"] ++ centeringstuff) [text "Dat zoeken we op!"]]) --TODO: belletje om te stoppen met zoeken
  , (85, [], cols
    [ (5, [])
    , (90, if status.searching 
              then [Svg.svg svgfullsize
                            [ Svg.rect (svgfullsize ++ [Svg.fill "#ffffff"]) []
                            , Svg.foreignObject svgfullsize
                                [embed [type_ "text/html", src "https://nl.wikipedia.org", style "width" "100%", style "height" "100%"] []] 
                            ]] else [])
    , (5, [])
    ])
  ]




vraagbox : Status -> List (Html Msg)
vraagbox status = [Svg.svg svgfullsize
  [ Svg.rect [ Svg.x "5%", Svg.y "5%", Svg.width "90%", Svg.height "90%", Svg.fill "rgba(237, 230, 214, 0.9)" ] []
  , Svg.foreignObject [Svg.x "5%", Svg.y "5%", Svg.width "90%", Svg.height "90%"] (rows 
    [ (5, [], [])
    , (20 , [], 
      -- cols
      -- [ (90, [])
      -- , (10, [text (String.fromInt status.questionNumber)])
      -- ])
      [Svg.svg (centeringstuff ++ [Svg.height "15cqh", Svg.width "15cqh"]) 
          [ Svg.circle [Svg.cx "50%", Svg.cy "50%", Svg.r "50%", Svg.fill "#ff0000"] []
          , Svg.circle [Svg.cx "50%", Svg.cy "50%", Svg.r "45%", Svg.stroke "#ffffff", Svg.strokeWidth "0.7cqh", Svg.fill "none"] []
          , Svg.foreignObject svgfullsize [div ([style "color" "white", style "text-align" "center", style "font-size" "3.8cqh"]++centeringstuff) [text (String.fromInt status.questionNumber)]]]])
    , (45, [], cols
      [ (5, [])
      , (90, [p [] [text (Maybe.withDefault ("error: geen vraag " ++ String.fromInt status.questionNumber) (Dict.get status.questionNumber status.questions))]])
      ])
    , (15, [], [input (centeringstuff ++ [placeholder "antwoord", value (Maybe.withDefault "" (Dict.get status.questionNumber status.answers)), onInput Answer]) []])
    , (5, [], [])
    , (10, [], [div centeringstuff 
                    [ button [onClick PreviousQ, disabled (status.questionNumber < 2 || status.searching), id "btn__back", style "height" "10%", style "width" "2.5%"] []
                    , text "hoi"
                    , button ([onClick NextQ, disabled (status.questionNumber > 11 || status.searching), id "btn__forward", style "height" "10%", style "width" "5%"]) []]]) 
    ])]]


-- arrow : Int -> List (Attribute Msg)
-- arrow angle = 
--         [ style "border" "solid black"
--         , style "border-width" "0 3px 3px 0"
--         , style "display" "inline-block"
--         , style "padding" "3px"
--         , style         "transform" ("rotate(" ++ String.fromInt angle ++ "deg)")
--         , style "-webkit-transform" ("rotate(" ++ String.fromInt angle ++ "deg)")
--         ]
