module Woordraden exposing (..)

import Utils exposing (..)
import Types exposing (..)
import Letters exposing (..)

import Time
import Dict
import Set
import Html exposing (..)
import Html.Attributes exposing (placeholder, value, style, src, type_, disabled, id)
import List.Extra
import Html.Events exposing (onInput)
import Html.Events exposing (onClick)

-- model
type alias WoordraadStatus =
  { currentTime : Time.Posix
  , timeTheGameEnds : Time.Posix
  , punten : Int
  , koopbaar : List (Letter, Int, Bool) -- (letter, index in gekocht, juist)
  , gekocht  : List Letter
  , woord : String
  }

-- update
woordupdate : Msg -> WoordraadStatus -> WoordraadStatus
woordupdate msg status = case msg of
  Tick newtime -> { status | currentTime = newtime}
  LetterKopen j -> let i = j - 1 in 
    case index status.koopbaar i of
      Nothing -> status
      Just (letter, target, correct) -> case letter of
        Wit -> status
        Paars -> status
        Vraagteken -> status
        Streepje -> status
        _ -> if i == -1 
                then status 
                else ({status | punten = status.punten - 10
                              , koopbaar = List.Extra.updateAt i (\_ -> (case letter of
                                                                            Opgezocht _ -> Wit
                                                                            UitHetHoofd _ -> Paars
                                                                            _ -> Vraagteken, 0, False)) status.koopbaar
                              , gekocht = List.Extra.updateAt target (\old -> case old of
                                                              Wit -> if correct then case letter of
                                                                                Opgezocht str -> Opgezocht str
                                                                                UitHetHoofd str -> Opgezocht str
                                                                                _ -> Vraagteken else Vraagteken
                                                              _ -> old) status.gekocht})
  Submit12 -> status -- TODO
  Answer answer -> {status | woord = answer }
  StartGame -> status
  StartStopWiki -> status
  PreviousQ -> status
  NextQ     -> status
  NaarWoordraden -> status


-- view
viewWoord : WoordraadStatus -> Html Msg
viewWoord status = 
  div [style "background-image" "url('images/astrid.jpg')", style "background-size" "100%", style "height" "100%"] 
    (rows
      [ (55, [], [])
      , (15, [style "background-color" "rbga(237, 230, 214, 0.9)", style "font-weight" "bolder"], 
          (cols [ (10, [klok (Time.posixToMillis status.timeTheGameEnds - Time.posixToMillis status.currentTime)])
                , (80, (rows 
                  [ (0, [], []) -- TODO: de koopbaar steekt iets verder omhoog uit dan de gekocht omlaag
                  , (10, [], [letters (Just 13) (List.map first status.koopbaar) (Just LetterKopen)])
                  , (72, [], [])
                  , (5, [], [letters Nothing status.gekocht Nothing])
                  , (0, [], [])
                  ]))
                , (10, [punten status.punten])
                ])
        )
      , (10, [], [])
      , (10, [], cols
          [ (30, [])
          , (30, [input (style "height" "100%" :: style "width" "100%" :: style "font-size" "3cqh" :: style "padding" "0cqh 2cqh" :: 
                         placeholder "antwoord" :: value status.woord :: onInput Answer :: centeringstuff) []])
          , (5, [])
          , (5, [button ([onClick Submit12, style "height" "70%", style "background-color" "rgb(227, 7, 20)", style "color" "white", style "border" "none", style "border-radius" "1cqh", style "font-size" "3cqh", style "font-family" "Lucida Sans", style "box-shadow" "1px 9px #888888"] ++ centeringstuff) [text "\u{00A0}Klaar\u{00A0}"]])
          , (30, [])
          ])
      , (10, [], [])
      ]
    )


