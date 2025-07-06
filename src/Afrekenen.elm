module Afrekenen exposing (..)

import Letters exposing (..)
import Utils exposing (rows)
import Html exposing (..)
import Types exposing (..)

type alias Afrekenen = {basis : Int, uithethoofd : Int, fout : Int}

viewAfrekenen : Afrekenen -> Html Msg
viewAfrekenen status = div [] (rows
  [ (20, [], [])
  , (10, [], [text ("Je hebt " ++ String.fromInt status.basis ++ " punten,")])
  , (10, [], [text ("plus " ++ String.fromInt (10*status.uithethoofd) ++ " voor de vragen uit het hoofd.")])
  , (10, [], [text ("Daar komt nog " ++ String.fromInt (100-25*status.fout) ++ " bonus bij voor " ++ String.fromInt status.fout ++ " fouten.")])
  , (10, [], [text ("Dan komen we uit op " ++ String.fromInt (status.basis + 10 * status.uithethoofd + 100 - 25*status.fout) ++ " in totaal.")])
  ])

