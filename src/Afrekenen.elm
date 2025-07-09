module Afrekenen exposing (..)

import Letters exposing (..)
import Utils exposing (rows)
import Html exposing (..)
import Types exposing (..)
import Dict
import Time
import Audio

type Afrekenen = Win {basis : Int, uithethoofd : Int, fout : Int} 
               | Verlies {gegeven : Dict.Dict Int String, juist : Dict.Dict Int String, woord : String, faalstart : Maybe (Audio.Source, Time.Posix)}

viewAfrekenen : Afrekenen -> Html Msg
viewAfrekenen status = case status of
  Win info -> div [] (rows
    [ (20, [], [])
    , (10, [], [text ("Je hebt " ++ String.fromInt info.basis ++ " punten,")])
    , (10, [], [text ("plus " ++ String.fromInt (10*info.uithethoofd) ++ " voor de vragen uit het hoofd.")])
    , (10, [], [text ("Daar komt nog " ++ String.fromInt (100-25*info.fout) ++ " bonus bij voor " ++ String.fromInt info.fout ++ " fouten.")])
    , (10, [], [text ("Dan komen we uit op " ++ String.fromInt (info.basis + 10 * info.uithethoofd + 100 - 25*info.fout) ++ " in totaal.")])
    ])
  Verlies info -> div [] [text "Helaas!"]
