module Utils exposing (..)
import Html exposing (..)
import Html.Attributes exposing (..)

rows : List (Int, List (Html a)) -> List (Html a)
rows xs = List.intersperse (div [style "clear" "both"] []) 
                           (List.map (\(i,r) -> div [class "row", style "height" (String.fromInt i ++ "%")] r) xs)
cols : List (Int, List (Html a)) -> List (Html a)
cols xs = List.map (\(i,r) -> div [class "column", style "width" (String.fromInt i ++ "%"), style "float" "left"] r) xs
