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
import Nakijken exposing (Nakijkstatus)
import Html.Events exposing (onClick)


type Afrekenen = Win {basis : Int, uithethoofd : Int, fout : Int, door : Nakijkstatus} 
               | Verlies {door : Nakijkstatus, woord : String, faalstart : Maybe (Audio.Source, Time.Posix)}

viewAfrekenen : Afrekenen -> Html Msg
viewAfrekenen status = case status of
  Win info -> div [style "background-image" "url('images/astrid.jpg')", style "background-size" "100%", style "height" "100%", onClick Submit]
    [ Svg.svg 
      [ Svg.height "100%", Svg.width "100%", Svg.viewBox "0 0 100% 100%"]
      [ Svg.rect [Svg.fill "rgba(237, 230, 214, 0.9)", Svg.x "5%", Svg.y "15%", Svg.height "70%", Svg.width "35%"] []
      , Svg.foreignObject 
        [ Svg.x "8%", Svg.y "25%", Svg.height "60%", Svg.width "30%"] 
        [ div [style "font-size" "4cqh", style "font-weight" "bolder"] 
          [ text ("Je hebt " ++ String.fromInt info.basis ++ " punten.")
          , br [] [], br [] [], text ("Plus " ++ String.fromInt (10*info.uithethoofd) ++ " bonus voor de vragen uit het hoofd.")
          , br [] [], br [] [], text ("Daar komt nog " ++ String.fromInt (100-25*(Basics.min 4 info.fout)) ++ " bonus bij voor " ++ String.fromInt info.fout ++ " fouten.")
          , br [] [], br [] [], text ("Dan komen we uit op " ++ String.fromInt (info.basis + 10 * info.uithethoofd + 100 - 25*(Basics.min 4 info.fout)) ++ " in totaal.")
          ]
        ]]
    ]


   
  Verlies info -> div 
    [style "background-image" "url('images/astrid.jpg')", style "background-size" "100%", style "height" "100%", onClick Submit] 
    (rows
      [ (70, [], [])
      , (15, [style "background-color" "rgba(237, 230, 214, 0.9)", style "font-weight" "bolder", style "font-size" "4cqh"], cols
        [ (0, [])
        , (100, rows
          [ (33, [], [])
          , (34, [], cols
            [(100, [div [style "text-align" "center", style "width" "100%"] [text ("Helaas! Het woord was '" ++ info.woord ++"'. Gelukkig mag ik je wel de pennenset meegeven.")]])])
          , (33, [], [])
          ])
        , (0, [])
        ])
      , (15, [],[])
      ]
    )
