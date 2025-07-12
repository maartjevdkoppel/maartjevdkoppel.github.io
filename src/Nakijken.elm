module Nakijken exposing (..)
import Basics.Extra
import Dict
import Html exposing (br,div,Html,text)
import Html.Attributes exposing (style)
import List.Extra
import Set
import Svg
import Svg.Attributes as Svg

import Letters exposing (..)
import Types exposing (..)
import Utils exposing (..)

type alias Nakijkstatus = 
  { info : Dict.Dict Int {vraag : String, correct : String, gegeven : String, show : Letter}
  , focus : Maybe Int
  , tijdover : Int
  , punten : Int}

mkNakijk : VragenAntwoorden -> Dict.Dict Int String -> Set.Set Int -> Dict.Dict Int {vraag : String, correct : String, gegeven : String, show : Letter}
mkNakijk data gegeven opgezocht = 
  let biglist = List.Extra.zip (Dict.toList data.vragen) (List.Extra.zip (Dict.toList data.antwoorden) (Dict.toList (Dict.union gegeven (Dict.fromList (List.map (Basics.Extra.flip Tuple.pair "") twelve)))))
      f ((ix, vraag), ((_, correct),(_, poging))) = (ix, {vraag = vraag, correct = correct, gegeven = poging, show = if testcorrect correct poging
        then if Set.member ix opgezocht then Opgezocht poging
                                        else UitHetHoofd poging
        else if poging == ""
             then Streepje
             else Zwart})
  in Dict.fromList (List.map f biglist)

viewNakijk : Nakijkstatus -> Html Msg
viewNakijk status = div [style "background-image" "url('images/astrid.jpg')", style "background-size" "100%", style "height" "100%"] (rows
  [ (20, [], [])
  , (40, [], cols 
    [ (10, [])
    , (50, [viewfocus status])
    , (40, [])
    ])
  , (20, [], [])
  , (15, [style "background-color" "rgba(237, 230, 214, 0.9)", style "font-weight" "bolder"], cols
                    [ (10, [klok (status.tijdover)])
                    , (80, [letterbalk status])
                    , (10, [punten status.punten])
                    ])
  , (5, [], [])
  ])

viewfocus : Nakijkstatus -> Html Msg
viewfocus status = Svg.svg 
  svgfullsize 
  [ Svg.rect (Svg.fill "rgba(237, 230, 214, 0.9)" :: svgfullsize) []
  , Svg.foreignObject svgfullsize [div [style "padding" "5cqh 5cqh"] (
    case status.focus |> Maybe.andThen (Basics.Extra.flip Dict.get status.info) of
        Nothing -> []
        Just info -> 
          [ text info.vraag, br [] [], br [] []
          , text ("Gegeven antwoord: " ++ info.gegeven), br [] [], br [] []
          , text ("Juiste antwoord: " ++ info.correct)
          ]
    )]
  ]

letterbalk : Nakijkstatus -> Html Msg
letterbalk status = letters (Just 12) (List.map .show (Dict.values status.info)) (Just LetterKopen)
