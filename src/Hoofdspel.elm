module Hoofdspel exposing (..)
import Utils exposing (..)
import Types exposing (..)
import Letters exposing (..)

import Dict
import Html exposing (..)
import Html.Attributes exposing (placeholder, value, style, src, type_, id)
import Html.Events exposing (onClick, onInput)
import Set
import Svg
import Svg.Attributes as Svg
import Time
import List.Extra
import Task
import Audio
import Maybe.Extra

-- model
type alias HoofdStatus = 
  { currentTime : Time.Posix
  , timeTheGameEnds : Time.Posix
  , gegevenantwoorden : Dict.Dict Int String
  , questionNumber : Int
  , lastQuestion : Int
  , searching : Bool
  , punten : Int
  , searched : Set.Set Int
  , data : VragenAntwoorden
  , oauth : String
  , muziek : Adios
  , recentstetik : Maybe Time.Posix
  , recentstebel : Maybe Time.Posix
  , paardensprongbegintijd : Maybe Time.Posix
  , logindex : Maybe Int
  }

-- update

startgame : Time.Posix -> VragenAntwoorden -> String -> Adios -> HoofdStatus
startgame now info oauth adios = 
  { currentTime= Time.millisToPosix ((Time.posixToMillis now) + 1000) 
  , timeTheGameEnds=Time.millisToPosix (Time.posixToMillis now + 15*60*1000+1000)
  , gegevenantwoorden = Dict.empty
  , questionNumber = 1
  , lastQuestion = 1
  , searching = False
  , punten = 500
  , searched = Set.empty
  , data = info
  , oauth = oauth
  , muziek = adios
  , paardensprongbegintijd = Nothing
  , recentstetik = Nothing
  , recentstebel = Nothing
  , logindex = Nothing
  }

hoofdupdate : Msg -> HoofdStatus -> (HoofdStatus, Cmd Msg)
hoofdupdate msg status = case msg of
  Tick newtime -> let nieuwetik = case status.recentstetik of
                                    Nothing -> True
                                    Just rt -> Time.posixToMillis status.currentTime - Time.posixToMillis rt >= 2000 in
    ( { status | currentTime = newtime
      , punten = if status.searching && nieuwetik then status.punten - 1 else status.punten
      , recentstetik = if status.searching && nieuwetik then Just status.currentTime else status.recentstetik
      }
    , if Time.posixToMillis status.timeTheGameEnds - Time.posixToMillis status.currentTime <= 2*60*1000 
      then Task.perform (\_ -> NaarWoordraden) (Task.succeed ()) 
      else Cmd.none
    )
  StartStopWiki -> ({ status | searching = not status.searching
                              , searched = Set.insert status.questionNumber status.searched
                              , recentstebel = if status.searching then Just status.currentTime else Nothing}, Cmd.none)
  Answer answer -> ({ status | gegevenantwoorden = Dict.insert status.questionNumber answer status.gegevenantwoorden}, Cmd.none)
  PreviousQ -> ({status | questionNumber = status.questionNumber - 1}, Cmd.none)
  NextQ     -> if status.questionNumber == 7 -- naar paardensprong
                then ({status | questionNumber = 8
                              , paardensprongbegintijd = Just status.currentTime
                              , lastQuestion = max status.lastQuestion (status.questionNumber + 1)}, Cmd.none)
                else ({status | questionNumber = status.questionNumber + 1
                              , lastQuestion = max status.lastQuestion (status.questionNumber + 1)}, Cmd.none)
  Logged i -> case i of
    Ok ix -> ({status | logindex = ix}, Cmd.none)
    _ -> (status, Cmd.none)
  _ -> (status, Cmd.none)


-- view

viewGame : HoofdStatus -> Html Msg
viewGame status =
  div [style "background-image" "url('images/astrid.jpg')", style "background-size" "100%", style "height" "100%"] 
      (rows 
        [ (80, [], cols
                    [ (25, vraagbox status)
                    , (70, wiki status)
                    ])
        , (15, [style "background-color" "rgba(237, 230, 214, 0.9)", style "font-weight" "bolder"], cols
                    [ (10, [klok (Time.posixToMillis status.timeTheGameEnds - Time.posixToMillis status.currentTime)])
                    , (80, [letterbalk status])
                    , (10, [punten status.punten])
                    ])
        ])

letterbalk : HoofdStatus -> Html Msg
letterbalk status = letters (Just status.lastQuestion) (List.map (getBeginLetter status) [1,2,3,4,5,6,7,8,9,10,11,12]) Nothing

getBeginLetter : HoofdStatus -> Int -> Letter
getBeginLetter status i = case Dict.get i status.gegevenantwoorden of
  Nothing -> if i > status.lastQuestion || Set.member i status.searched then Wit else Paars
  Just letter -> if Set.member i status.searched then Opgezocht letter else UitHetHoofd letter

naarWoordRaden : HoofdStatus -> Int -> (Letter, Int, Bool)
naarWoordRaden status i = case Dict.get i status.gegevenantwoorden of
  Nothing -> (Streepje, Maybe.withDefault 0 (Dict.get i status.data.volgorde), False)
  Just gegevenantwoord -> case Dict.get i (Dict.fromList (List.map (\((k,a),(_,ix)) -> (k,(a,ix))) (List.Extra.zip (Dict.toList status.data.antwoorden) (Dict.toList status.data.volgorde)))) of
    Nothing -> (Vraagteken,0,False) -- error
    Just (antwoord, index) -> (if Set.member i status.searched then Opgezocht gegevenantwoord else UitHetHoofd gegevenantwoord, index, testcorrect gegevenantwoord antwoord)

wiki : HoofdStatus -> List (Html Msg)
wiki status = rows 
  [ (10, [], rows
      [ (30, [style "height" "100%"], [button ([onClick StartStopWiki,  style "height" "70%", style "background-color" "rgb(227, 7, 20)", style "color" "white", style "border" "none", style "border-radius" "1cqh", style "font-size" "3cqh", style "font-family" "Lucida Sans", style "box-shadow" "1px 9px #888888"] ++ centeringstuff
                                              ++ if status.questionNumber == 8 && Maybe.Extra.unwrap False (\psbt -> Time.posixToMillis status.currentTime - Time.posixToMillis psbt <=30000) status.paardensprongbegintijd
                                                 then [style "opacity" "0%"]
                                                 else []
                                              ) 
            (if status.searching then [text "\u{00A0}\u{1F514}\u{00A0}Bellen!\u{00A0}\u{1F514}\u{00A0}"]
                                 else if status.questionNumber == 8
                                      then [text "\u{00A0}Paardensprong bekijken\u{00A0}"]
                                        -- case Dict.get 8 status.data.antwoorden of
                                        -- Nothing -> []
                                        -- Just str -> [text str]  --
                                      else [text "\u{00A0}Dat zoeken we op!\u{00A0}"])])
      , (30, [style "height" "100%"], [button ([onClick NaarWoordraden, style "height" "70%", style "background-color" "rgb(227, 7, 20)", style "color" "white", style "border" "none", style "border-radius" "1cqh", style "font-size" "3cqh", style "font-family" "Lucida Sans", style "box-shadow" "1px 9px #888888"] ++ centeringstuff) [text "\u{00A0}Beginnen met het woord\u{00A0}"]])
      ])
  , (85, [], cols
    [ (5, [])
    , (90, if status.questionNumber == 8 
            then
              case (status.searching, status.paardensprongbegintijd) of
                (False, Nothing) -> []
                (True, _) -> paardensprong status
                (False, Just psbt) -> if Time.posixToMillis status.currentTime - Time.posixToMillis psbt <=30000 then paardensprong status else []
            else if status.searching 
              then [Svg.svg svgfullsize
                            [ Svg.rect (svgfullsize ++ [Svg.fill "#ffffff"]) []
                            , Svg.foreignObject svgfullsize
                                [embed [type_ "text/html", src "https://nl.wikipedia.org", style "width" "100%", style "height" "100%"] []] 
                            ]] 
              else [])
    , (5, [])
    ])
  ]

paardensprong : HoofdStatus -> List (Html Msg)
paardensprong status = 
  let klokmee = Tuple.first status.data.paardsprongrng -- 1 of -1
      startplek = Tuple.second status.data.paardsprongrng -- int tussen 1 en 8 (inclusief)
      sprongwoord = String.toUpper (
        case Dict.get 8 status.data.antwoorden of
          Nothing -> "Error"
          Just str -> str
        )
      f i = let ix = 8 + startplek + i * klokmee - 1 in String.slice ix (ix+1) (sprongwoord ++ sprongwoord ++ sprongwoord)
  in
  [ Svg.svg ([Svg.width "62cqh", Svg.height "62cqh", Svg.viewBox "0 0 62cqh 62cqh"] ++ centeringstuff)
    ([ Svg.image [Svg.x "0", Svg.y "0", Svg.width "100%", Svg.height "100%", Svg.xlinkHref "images/paardensprong.jpeg"] []
    , Svg.foreignObject [Svg.x "10.5%", Svg.y "9%",  Svg.width "23.5%", Svg.height "23.5%"] [div (style "font-size" "10cqh" :: style "font-weight" "bolder" :: style "text-align" "center" :: centeringstuff) [text (f 1)]]                 
    , Svg.foreignObject [Svg.x "38%",   Svg.y "9%",  Svg.width "23.5%", Svg.height "23.5%"] [div (style "font-size" "10cqh" :: style "font-weight" "bolder" :: style "text-align" "center" :: centeringstuff) [text (f 4)]]                 
    , Svg.foreignObject [Svg.x "66%",   Svg.y "9%",  Svg.width "23.5%", Svg.height "23.5%"] [div (style "font-size" "10cqh" :: style "font-weight" "bolder" :: style "text-align" "center" :: centeringstuff) [text (f 7)]]                 
    , Svg.foreignObject [Svg.x "10.5%", Svg.y "37%", Svg.width "23.5%", Svg.height "23.5%"] [div (style "font-size" "10cqh" :: style "font-weight" "bolder" :: style "text-align" "center" :: centeringstuff) [text (f 6)]]                 
    , Svg.foreignObject [Svg.x "66%",   Svg.y "37%", Svg.width "23.5%", Svg.height "23.5%"] [div (style "font-size" "10cqh" :: style "font-weight" "bolder" :: style "text-align" "center" :: centeringstuff) [text (f 2)]]                 
    , Svg.foreignObject [Svg.x "10.5%", Svg.y "65%", Svg.width "23.5%", Svg.height "23.5%"] [div (style "font-size" "10cqh" :: style "font-weight" "bolder" :: style "text-align" "center" :: centeringstuff) [text (f 3)]]                 
    , Svg.foreignObject [Svg.x "38%",   Svg.y "65%", Svg.width "23.5%", Svg.height "23.5%"] [div (style "font-size" "10cqh" :: style "font-weight" "bolder" :: style "text-align" "center" :: centeringstuff) [text (f 8)]]                 
    , Svg.foreignObject [Svg.x "66%",   Svg.y "65%", Svg.width "23.5%", Svg.height "23.5%"] [div (style "font-size" "10cqh" :: style "font-weight" "bolder" :: style "text-align" "center" :: centeringstuff) [text (f 5)]]                 
    ] ++ -- Svg.rect [Svg.fill "#555555", Svg.opacity "40%", Svg.x "38%",   Svg.y "37%", Svg.width "23.5%", Svg.height "23.5%"] (
        case status.paardensprongbegintijd of
          Nothing -> []
          Just psbt -> if Time.posixToMillis status.currentTime - Time.posixToMillis psbt >= 30000 then [] else (klokje "50%" (Time.posixToMillis psbt + 30000 - Time.posixToMillis status.currentTime))
    )
  ]


vraagbox : HoofdStatus -> List (Html Msg)
vraagbox status = rows
  [ (5, [], [])
  , (90, [], cols
    [ (5, [])
    , (90, [Svg.svg svgfullsize
              [ Svg.rect (Svg.fill "#ffffff" :: svgfullsize) []
              , Svg.image [ Svg.x "0%", Svg.y "30%", Svg.width "100%", Svg.height "100%", Svg.xlinkHref "images/vraagbox.jpg", Svg.opacity "50%"] []
              , Svg.foreignObject svgfullsize (rows 
                [ (5, [], [])
                , (20 , [], [div centeringstuff 
                              [ button [onClick PreviousQ, id "btn__back",    style "height" "0%", style "width" "0%", style "position" "relative", style "top" (if status.questionNumber < 2  || status.searching then "-500%" else "-50%"), style "right" "10%"] []
                              , Svg.svg [Svg.height "15cqh", Svg.width "15cqh"] 
                                        [ Svg.circle [Svg.cx "50%", Svg.cy "50%", Svg.r "50%", Svg.fill "rgb(227, 7, 20)"] []
                                        , Svg.circle [Svg.cx "50%", Svg.cy "50%", Svg.r "45%", Svg.stroke "#ffffff", Svg.strokeWidth "0.7cqh", Svg.fill "none"] []
                                        , Svg.foreignObject svgfullsize [div ([style "color" "white", style "text-align" "center", style "font-size" "3.8cqh"]++centeringstuff) [text (String.fromInt status.questionNumber)]]]
                              , button [onClick NextQ,     id "btn__forward", style "height" "0%", style "width" "0%", style "position" "relative", style "top" (if status.questionNumber > 11 || status.searching then "-500%" else "-50%"), style "left"  "10%"] []]])
                , (45, [], cols
                  [ (5, [])
                  , (90, [p [style "width" "95%"] [text (if status.questionNumber == 8 
                                                          then "Vraag 8 is de paardensprong, daar willen jullie misschien samen naar kijken..." 
                                                          else Maybe.withDefault ("error: geen vraag " ++ String.fromInt status.questionNumber) (Dict.get status.questionNumber status.data.vragen))]])
                  ])
                , (15, [], [input (centeringstuff ++ [style "height" "100%", style "width" "60%", style "font-size" "3cqh", style "padding" "0cqh 2cqh", placeholder "antwoord", value (Maybe.withDefault "" (Dict.get status.questionNumber status.gegevenantwoorden)), onInput Answer]) []])
                , (5, [], [])
                , (10, [], [div centeringstuff []]) 
                ])]])
    ])
  ]
