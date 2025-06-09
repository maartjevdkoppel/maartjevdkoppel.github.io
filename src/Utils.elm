module Utils exposing (..)
import Html exposing (..)
import Html.Attributes exposing (..)

rows : List (Int, List (Attribute a), List (Html a)) -> List (Html a)
rows xs = List.intersperse (div [style "clear" "both", style "display" "table"] []) 
                           (List.map (\(i,s,r) -> div ([class "row", style "height" (String.fromInt i ++ "%"), style "width" "100%", style "display" "flex"]++s) r) xs)
cols : List (Int, List (Html a)) -> List (Html a)
cols xs = List.map (\(i,r) -> div [class "column", style "float" "left", style "flex" (String.fromInt i ++ "%"), style "height" "100%"] r) xs
--  style "width" (String.fromInt i ++ "%"),