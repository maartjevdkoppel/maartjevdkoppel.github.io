module Types exposing (..)

import Time exposing (..)

type Msg
  = StartGame
  | Tick Time.Posix
  | StartStopWiki
  | Answer String
  | PreviousQ
  | NextQ
  | NaarWoordraden

