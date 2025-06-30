module Woordraden exposing (..)

import Utils exposing (..)
import Types exposing (..)
import Letters exposing (..)

import Time
import Dict
import Set
import Html exposing (..)
import Html.Attributes exposing (placeholder, value, style, src, type_, disabled, id)

-- model
type alias WoordraadStatus =
  { currentTime : Time.Posix
  , timeTheGameEnds : Time.Posix
  , punten : Int
  , koopbaar : List Letter
  , gekocht  : List Letter
  }

-- update
woordupdate : Msg -> WoordraadStatus -> WoordraadStatus
woordupdate msg status = status

-- view
viewWoord : WoordraadStatus -> Html Msg
viewWoord status = 
  div [style "background-image" "url('images/astrid.jpg')", style "background-size" "100%", style "height" "100%"] 
    (rows 
      [ (30, [], [])
      , (10, [], [letters (Just 13) status.koopbaar])
      , (7, [], [])
      , (5, [], [letters Nothing status.gekocht])
      , (20, [], [])])
