module Afrekenen exposing (..)

import Letters exposing (..)
import Utils exposing (..)
import Html exposing (..)
import Types exposing (..)
import Dict
import Time
import Audio
import Html.Attributes exposing (style)
import Svg
import Svg.Attributes as Svg


type Afrekenen = Win {basis : Int, uithethoofd : Int, fout : Int} 
               | Verlies {gegeven : Dict.Dict Int String, juist : Dict.Dict Int String, woord : String, faalstart : Maybe (Audio.Source, Time.Posix)}

viewAfrekenen : Afrekenen -> Html Msg
viewAfrekenen status = case status of
  Win info -> div [style "background-image" "url('images/astrid.jpg')", style "background-size" "100%", style "height" "100%"] (rows
    [ (20, [], [Svg.svg [Svg.height "100%"][]])
    , (10, [], [text ("Je hebt " ++ String.fromInt info.basis ++ " punten,")])
    , (10, [], [text ("plus " ++ String.fromInt (10*info.uithethoofd) ++ " voor de vragen uit het hoofd.")])
    , (10, [], [text ("Daar komt nog " ++ String.fromInt (100-25*(Basics.min 4 info.fout)) ++ " bonus bij voor " ++ String.fromInt info.fout ++ " fouten.")])
    , (10, [], [text ("Dan komen we uit op " ++ String.fromInt (info.basis + 10 * info.uithethoofd + 100 - 25*(Basics.min 4 info.fout)) ++ " in totaal.")])
    ])
  Verlies info -> div 
    [style "background-image" "url('images/astrid.jpg')", style "background-size" "100%", style "height" "100%"] 
    (rows
      [ (70, [], [])
      , (15, [style "background-color" "rbga(237, 230, 214, 0.9)", style "font-weight" "bolder", style "font-size" "6cqh"], cols
        [ (45, [])
        , (10, rows
          [ (25, [], [])
          , (50, [], [text "Helaas!"])
          , (25, [], [])
          ])
        , (45, [])
        ])
      , (15, [],[])
      ]
    )
