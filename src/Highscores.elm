module Highscores exposing (..)
import Dict
import Types exposing (..)
import Utils exposing (..)
import Html exposing (..)
import Html.Attributes exposing (style)
import Svg
import Svg.Attributes as Svg

type alias HighscoreStatus = { jouw : Maybe (String, Spelduur, Int), huidig : Spelduur, alle : Dict.Dict Int (List (String, Int)) }

updatehs : HighscoreStatus -> Msg -> HighscoreStatus
updatehs status msg = { status | huidig = case msg of
    PreviousQ -> case status.huidig of
      Veertien -> Veertien
      Vijftien -> Veertien
      Zestien -> Vijftien
    NextQ -> case status.huidig of
      Veertien -> Vijftien
      Vijftien -> Zestien
      Zestien -> Zestien
    _ -> status.huidig
  }

viewHighscore : HighscoreStatus -> Html Msg
viewHighscore info = div [style "background-image" "url('images/leeg.jpeg')", style "background-size" "100%", style "height" "100%"
  , style "color" "white", style "font-weight" "bolder", style "font-size" "5cqh", style "text-align" "center", style "width" "100%"
  , style "text-shadow" "2px 2px 4px #000000" 
  ] ( 
  Utils.rows 
    [ (20, [], [ Svg.svg [Svg.height "100%", Svg.width "0"] []
              --  , "Jouw score : "
               ])
    , (40, [], Utils.cols
      [ (37, [])
      , (20, [table [] (tableheaders :: tablebody (Maybe.withDefault [] (Dict.get (fromSpelduur info.huidig) info.alle)))])
      , (43, [])
      ])
    , (10, [], [])
    , (30, [], cols
      [ (37, [])
      , (20, [div [style "text-align" "center"] [text ("Jouw score: " ++ "340")]])
      , (43, [])
      ])
    ])

tableheaders : Html Msg
tableheaders = tr [] [ th [style "text-align" "left"]   [text "\u{00A0}\u{00A0}\u{00A0}"]
                     , th [style "text-align" "left"]   [text "Naam\u{00A0}\u{00A0}\u{00A0}"]
                     , th [style "text-align" "center"] [text "\u{00A0}Score\u{00A0}"]
                     ]

tablebody : List (String, Int) -> List (Html Msg)
tablebody = List.indexedMap (\ix (nm, scr) -> tr [] [ td [style "text-align" "left"]   [text (String.fromInt (ix+1))]
                                                    , td [style "text-align" "left"]   [text nm]
                                                    , td [style "text-align" "center"] [text (String.fromInt scr)] 
                                                    ])
