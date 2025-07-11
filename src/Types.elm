module Types exposing (..)

import Http exposing (..)
import Time exposing (..)
import Dict

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
  | Logged ( Result Http.Error (Maybe Int))
  | UserAdded ( Result Http.Error ())
  | SoundLoaded (Result Audio.LoadError (Audio.Source, String))
  | PlayAudio
  | HighscoreReceived (Result Http.Error (Dict.Dict Int (List (String, Int))))
  | GetHighscores

type Spelduur = Zestien | Vijftien | Veertien
fromSpelduur : Spelduur -> Int
fromSpelduur x = case x of
  Zestien -> 16
  Vijftien -> 15
  Veertien -> 14

soundloaded str = SoundLoaded << Result.map (\x->(x,str))
type alias Adios =  { tune : Maybe Audio.Source
                    , tik : Maybe Audio.Source
                    , raden : Maybe Audio.Source
                    , faal : Maybe Audio.Source
                    , psmuziek : Maybe Audio.Source
                    , psbel : Maybe Audio.Source
                    , wikibel : Maybe Audio.Source
                    }

type alias Vraagsheet = Dict.Dict String VragenAntwoorden
type alias VragenAntwoorden = 
  { woord : String
  , vragen : Dict.Dict Int String
  , antwoorden : Dict.Dict Int String
  , volgorde : Dict.Dict Int Int
  , paardsprongrng : (Int, Int)
  }
