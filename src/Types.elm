module Types exposing (..)

import Http exposing (..)
import Time exposing (..)
import Dict

import Json.Decode
import Audio

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
  | SoundLoaded (Result Audio.LoadError (Audio.Source, String))
  | PlayAudio

soundloaded str = SoundLoaded << Result.map (\x->(x,str))
type alias Adios = {tune : Maybe Audio.Source, tik : Maybe Audio.Source, raden : Maybe Audio.Source}

type alias Vraagsheet = Dict.Dict String VragenAntwoorden
type alias VragenAntwoorden = 
  { woord : String
  , vragen : Dict.Dict Int String
  , antwoorden : Dict.Dict Int String
  , volgorde : Dict.Dict Int Int
  , paardsprongrng : (Int, Int)
  }
