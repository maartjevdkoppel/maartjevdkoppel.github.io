module Hoofdspel exposing (..)
import Utils exposing (..)
import Types exposing (..)
import Letters exposing (..)

import Dict
import Html exposing (..)
import Html.Attributes exposing (placeholder, value, style, src, type_, disabled, id)
import Html.Events exposing (onClick, onInput)
import Set
import Svg
import Svg.Attributes as Svg
import Time

-- model
type alias HoofdStatus = 
  { currentTime : Time.Posix
  , timeTheGameEnds : Time.Posix
  , questions : Dict.Dict Int String
  , gegevenantwoorden : Dict.Dict Int String
  , juistantwoorden : Dict.Dict Int (String, Int) -- (antwoord, index als gekocht)
  , questionNumber : Int
  , lastQuestion : Int
  , searching : Bool
  , punten : Int
  , searched : Set.Set Int
  }

-- update

startgame : Time.Posix -> HoofdStatus
startgame now = { currentTime= Time.millisToPosix ((Time.posixToMillis now) + 1000) 
                , timeTheGameEnds=Time.millisToPosix (Time.posixToMillis now + 12*60*1000+1000)
                , questions = Dict.fromList ((1, "Humpty Dumpty had a great fall. Who could put him back together again?") :: List.map (\i -> (i,"vraag "++String.fromInt i)) [2,3,4,5,6,7,8,9,10,11,12])
                , gegevenantwoorden = Dict.empty
                , juistantwoorden = Dict.fromList [(1, ("Niemand", 3))]
                , questionNumber = 1
                , lastQuestion = 1
                , searching = False
                , punten = 500
                , searched = Set.empty}

hoofdupdate : Msg -> HoofdStatus -> (HoofdStatus, Cmd Msg)
hoofdupdate msg status =
  case msg of
        StartGame -> -- gek, hoort nooit te gebeuren
          ( { status | timeTheGameEnds = Time.millisToPosix ((Time.posixToMillis status.currentTime) + 12000*60) }
          , Cmd.none
          )
        Tick newtime -> 
          ( { status | currentTime = newtime
            , punten = if status.searching && evensec newtime then status.punten - 1 else status.punten -- TODO misschien netter om bij te houden hoe lang de huidige zoek is, zodat je geen nadeel of voordeel hebt als je net op een even aantal begint
            }
          , Cmd.none
          )
        StartStopWiki -> ({ status | searching = not status.searching, searched = Set.insert status.questionNumber status.searched}, Cmd.none)
        Answer answer -> ({ status | gegevenantwoorden = Dict.insert status.questionNumber answer status.gegevenantwoorden}, Cmd.none)
        PreviousQ -> ({status | questionNumber = status.questionNumber - 1}, Cmd.none)
        NextQ     -> ({status | questionNumber = status.questionNumber + 1
                                     , lastQuestion = max status.lastQuestion (status.questionNumber + 1)}, Cmd.none)
        NaarWoordraden -> (status, Cmd.none)
        LetterKopen i -> (status, Cmd.none)
        Submit12 -> (status, Cmd.none)


-- view

viewGame : HoofdStatus -> Html Msg
viewGame status =
  div [style "background-image" "url('images/astrid.jpg')", style "background-size" "100%", style "height" "100%"] 
      (rows 
        [ (80, [], cols
                    [ (25, vraagbox status)
                    , (70, wiki status)
                    ])
        , (15, [style "background-color" "rgba(237, 230, 214, 0.9)", style "font-weight" "bolder"], cols
                    [ (10, [klok (Time.posixToMillis status.timeTheGameEnds - Time.posixToMillis status.currentTime)])
                    , (80, [letterbalk status])
                    , (10, [punten status.punten])
                    ])
        ])

letterbalk : HoofdStatus -> Html Msg
letterbalk status = letters (Just status.lastQuestion) (List.map (getBeginLetter status) [1,2,3,4,5,6,7,8,9,10,11,12]) Nothing
-- letters : HoofdStatus -> Html Msg
-- letters status = --div [] []
--   table [style "scale" "200%", style "position" "absolute", style "left" "50%", style "top" "87.5%", style "transform" "translate(-25%, -15%)" -- centering the whole thing
--         , style "text-align" "center"] -- centering text
--         [ tr [] (List.intersperse (th [style "font-size" "0.5cqh", style "width" "0.5cqh"] []) -- ruimte tussen letters
--                                   (List.map (\i -> th [if i>status.lastQuestion || Set.member i status.searched then style "background-color" "white" else style "background-image" "url('images/uithethoofd.jpg')", style "background-size" "100% 100%"
--                                                       , style "font-size" "3cqh", style "opacity" "100%"
--                                                       , style "height" "4cqh", style "width" "3cqh"]
--                                                       [text (Maybe.withDefault "" (getBeginLetter status i))])
--                                             [1,2,3,4,5,6,7,8,9,10,11,12]))
--         , tr [] (List.intersperse (td [] []) (List.map (\i -> td [style "font-size" "1.2cqh", style "color" (if i>status.lastQuestion then "black" else "rgb(227, 7, 20)")] [text (String.fromInt i)]) [1,2,3,4,5,6,7,8,9,10,11,12]))]

getBeginLetter : HoofdStatus -> Int -> Letter
getBeginLetter status i = case Dict.get i status.gegevenantwoorden of
  Nothing -> if i > status.lastQuestion || Set.member i status.searched then Wit else Paars
  Just letter -> if Set.member i status.searched then Opgezocht letter else UitHetHoofd letter

naarWoordRaden : HoofdStatus -> Int -> (Letter, Int, Bool)
naarWoordRaden status i = case Dict.get i status.gegevenantwoorden of
  Nothing -> (Streepje, Maybe.withDefault 0 (Maybe.map Tuple.second (Dict.get i status.juistantwoorden)), False)
  Just gegevenantwoord -> case Dict.get i status.juistantwoorden of
    Nothing -> (Vraagteken,0,False) -- juiste antwoord onbekend
    Just (antwoord, index) -> (if Set.member i status.searched then Opgezocht gegevenantwoord else UitHetHoofd gegevenantwoord, index, gegevenantwoord == antwoord)

wiki : HoofdStatus -> List (Html Msg)
wiki status = rows 
  [ (10, [], rows
      [ (30, [style "height" "100%"], [button ([onClick StartStopWiki,  style "height" "70%", style "background-color" "rgb(227, 7, 20)", style "color" "white", style "border" "none", style "border-radius" "1cqh", style "font-size" "3cqh", style "font-family" "Lucida Sans", style "box-shadow" "1px 9px #888888"] ++ centeringstuff) [text "\u{00A0}Dat zoeken we op!\u{00A0}"]])--TODO: belletje om te stoppen met zoeken
      , (30, [style "height" "100%"], [button ([onClick NaarWoordraden, style "height" "70%", style "background-color" "rgb(227, 7, 20)", style "color" "white", style "border" "none", style "border-radius" "1cqh", style "font-size" "3cqh", style "font-family" "Lucida Sans", style "box-shadow" "1px 9px #888888"] ++ centeringstuff) [text "\u{00A0}Beginnen met het woord\u{00A0}"]])
      ])
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




vraagbox : HoofdStatus -> List (Html Msg)
vraagbox status = rows
  [ (5, [], [])
  , (90, [], cols
    [ (5, [])
    , (90, [Svg.svg svgfullsize
              [ Svg.rect (Svg.fill "#ffffff" :: svgfullsize) []
              , Svg.image [ Svg.x "0%", Svg.y "30%", Svg.width "100%", Svg.height "100%", Svg.xlinkHref "images/vraagbox.jpg", Svg.opacity "50%"] []
              , Svg.foreignObject svgfullsize (rows 
                [ (5, [], [])
                , (20 , [], [div centeringstuff 
                              [ button [onClick PreviousQ, id "btn__back",    style "height" "0%", style "width" "0%", style "position" "relative", style "top" (if status.questionNumber < 2  || status.searching then "-500%" else "-50%"), style "right" "10%"] []
                              , Svg.svg [Svg.height "15cqh", Svg.width "15cqh"] 
                                        [ Svg.circle [Svg.cx "50%", Svg.cy "50%", Svg.r "50%", Svg.fill "rgb(227, 7, 20)"] []
                                        , Svg.circle [Svg.cx "50%", Svg.cy "50%", Svg.r "45%", Svg.stroke "#ffffff", Svg.strokeWidth "0.7cqh", Svg.fill "none"] []
                                        , Svg.foreignObject svgfullsize [div ([style "color" "white", style "text-align" "center", style "font-size" "3.8cqh"]++centeringstuff) [text (String.fromInt status.questionNumber)]]]
                              , button [onClick NextQ,     id "btn__forward", style "height" "0%", style "width" "0%", style "position" "relative", style "top" (if status.questionNumber > 11 || status.searching then "-500%" else "-50%"), style "left"  "10%"] []]])
                , (45, [], cols
                  [ (5, [])
                  , (90, [p [style "width" "95%"] [text (Maybe.withDefault ("error: geen vraag " ++ String.fromInt status.questionNumber) (Dict.get status.questionNumber status.questions))]])
                  ])
                , (15, [], [input (centeringstuff ++ [style "height" "100%", style "width" "60%", style "font-size" "3cqh", style "padding" "0cqh 2cqh", placeholder "antwoord", value (Maybe.withDefault "" (Dict.get status.questionNumber status.gegevenantwoorden)), onInput Answer]) []])
                , (5, [], [])
                , (10, [], [div centeringstuff []]) 
                ])]])
    ])
  ]