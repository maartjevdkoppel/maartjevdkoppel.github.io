module Types exposing (..)

import Http exposing (..)
import Time exposing (..)
import Dict

import Json.Decode

type Msg
  = StartGame
  | Tick Time.Posix
  | StartStopWiki
  | Answer String
  | PreviousQ
  | NextQ
  | NaarWoordraden
  | LetterKopen Int
  | Submit
  | DataReceived (Result Http.Error (Maybe Vraagsheet)) 
  | UserAdded ( Result Http.Error ())


type alias Vraagsheet = Dict.Dict String VragenAntwoorden
type alias VragenAntwoorden = {woord : String, vragen : Dict.Dict Int String, antwoorden : Dict.Dict Int String, volgorde : Dict.Dict Int Int}
