module Database exposing (..)
import Http
import Json.Encode as Json
import Json.Decode as Nosj
import Dict

import Types exposing (..)
import List.Extra
import Maybe.Extra
import Utils exposing (..)
import Time
import Iso8601

url : String -> String
url sheet = "https://sheets.googleapis.com/v4/spreadsheets/1_CbSNxoK-esYMFhj2kq7c7QIF6sJxCs1caYO8NgZso0/values/" ++ sheet -- ++ "key=" ++ servicekey

-- secret!
key : String
key = "AIzaSyAFc9lOsvAcgusK7fsgdq6o6ZlVZGGScZQ"

servicekey : String
servicekey = "49b4a8ff748394332b7c8c7907703252259072a3"

readSpreadsheet : String -> Cmd Msg
readSpreadsheet oauth =
  Http.request
    { method = "GET"
    , headers = [Http.header "Authorization" ("Bearer " ++ oauth)] 
    , url = url "mensen"
    , body = Http.emptyBody
    , expect = Http.expectJson DataReceived parse
    , timeout = Nothing
    , tracker = Nothing
    }


adduser : String -> String -> Cmd Msg
adduser name oauth =
  Http.request
    { method = "POST"
    , headers = [Http.header "Authorization" ("Bearer " ++ oauth)] 
    , url = url ("usernames!A1:append?valueInputOption=RAW")
    , body = Http.jsonBody (adduserjson name)
    , expect = Http.expectWhatever UserAdded
    , timeout = Nothing
    , tracker = Nothing
    }

adduserjson : String -> Json.Value
adduserjson name = Json.object
  [ ("range", Json.string "usernames!A1")
  , ("majorDimension", Json.string "ROWS")
  , ("values", Json.list (\x -> Json.list Json.string [x]) [name])
  ]

logstartgame : VragenAntwoorden -> String -> Time.Posix -> String -> Cmd Msg
logstartgame va naam now oauth =
  Http.request
    { method = "POST"
    , headers = [Http.header "Authorization" ("Bearer " ++ oauth)] 
    , url = url ("log!A1:P1:append?valueInputOption=RAW")
    , body = Http.jsonBody (logstartgamejson va naam now)
    , expect = Http.expectWhatever UserAdded
    , timeout = Nothing
    , tracker = Nothing
    }

logstartgamejson :  VragenAntwoorden -> String -> Time.Posix -> Json.Value
logstartgamejson va naam now = Json.object
  [ ("range", Json.string "log!A1:P1")
  , ("majorDimension", Json.string "ROWS")
  , ("values", Json.list (\x -> Json.list Json.string x) ([[naam, Iso8601.fromTime now, "", va.woord] ++ Dict.values va.vragen]))
  ]


parse : Nosj.Decoder (Maybe Vraagsheet)
parse = Nosj.field "values" (
  Nosj.map tovraagsheet
  (Nosj.list (Nosj.list (Nosj.string)))
  )

tovraagsheet : List (List String) -> Maybe Vraagsheet
tovraagsheet = 
  List.tail --gooi de rij met kolomnamen weg
  >> Maybe.map (
    List.map (\row ->
      case List.Extra.splitAt 27 row of
        (naam :: woord :: _, vragenantwoordenvolgorde) ->
          let (vragen, antwoordenvolgorde) = List.Extra.splitAt 12 vragenantwoordenvolgorde
              (antwoorden, volgorde)  = List.Extra.splitAt 12 antwoordenvolgorde
          in Just (naam, { woord = woord, vragen = f vragen, antwoorden = f antwoorden
                         , volgorde = maakvolgorde (List.map (String.toFloat << String.replace "," ".") volgorde)
                         , paardsprongrng = case List.map (String.toFloat << String.replace "," ".") volgorde of
                                              Just n1 :: Just n2 :: _ -> (if n1<0.5 then -1 else 1, ceiling (8*n2))
                                              _ -> (1,8)
                         })
        _ -> Nothing
    )
    >> Maybe.Extra.values
    >> Dict.fromList
  )

f : List a -> Dict.Dict Int a
f = Dict.fromList << List.Extra.zip twelve

maakvolgorde : List (Maybe Float) -> Dict.Dict Int Int
maakvolgorde = Dict.fromList << List.Extra.zip twelve << List.map Tuple.first << List.sortWith (on cmpmb Tuple.second) << List.Extra.zip twelve 
