module Letters exposing (..)
import Types exposing (..)
import Utils exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import List.Extra
import Svg
import Svg.Attributes as Svg

type Letter = UitHetHoofd String 
            | Opgezocht String
            | Paars
            | Wit
            | Vraagteken
            | Streepje

letters : Maybe Int -> List Letter -> Maybe (Int -> Msg) -> Html Msg
letters lastQuestion ls onclick = 
  table 
    [style "scale" "200%", style "position" "relative", style "left" "50%", style "top" "50%", style "transform" "translate(-25%, -15%)" -- centering the whole thing
    , style "text-align" "center"-- centering text
    ] 
    ((tr [] (List.intersperse 
              (th [style "font-size" "0.5cqh", style "width" "0.5cqh"] []) -- ruimte tussen letters
              (List.map 
                (\(i,l) -> 
                  let styles = [style "background-size" "100% 100%", style "font-size" "3cqh", style "opacity" "100%", style "height" "4cqh", style "width" "3cqh"]
                      event  = case onclick of
                                  Nothing -> []
                                  Just f -> [onClick (f i)] 
                  in case l of
                        Opgezocht letter   -> th (style "background-color" "white" :: styles) [div event [text ((String.toUpper << String.slice 0 1) letter)]]
                        UitHetHoofd letter -> th 
                                                (style "background-image" "url('images/uithethoofd.jpg')" :: styles) 
                                                [div event [text ((String.toUpper << String.slice 0 1) letter)]]
                        Paars              -> th (style "background-image" "url('images/uithethoofd.jpg')" :: styles) []
                        Wit                -> th (style "background-color" "white" :: styles) []
                        Vraagteken         -> th (style "background-color" "white" :: styles) [text "?"]
                        Streepje           -> th (style "background-color" "black" :: style "color" "white" :: styles) [text "-"]
                )
                (List.Extra.zip [1,2,3,4,5,6,7,8,9,10,11,12] ls)))
        ) :: (numbersbelow lastQuestion)
    )

numbersbelow : Maybe Int -> List (Html msg)
numbersbelow lastQuestion = 
  case lastQuestion of
    Nothing -> []
    Just lq -> [tr [] (List.intersperse (td [] [])
                                        (List.map (\i -> td [style "font-size" "1.2cqh", style "color" (if i>lq then "black" else "rgb(227, 7, 20)")] 
                                                            [text (String.fromInt i)]) 
                                                  [1,2,3,4,5,6,7,8,9,10,11,12]))]

klok : Int -> Html Msg
klok millisdiff = 
  let second = modBy 60 (millisdiff // 1000)
      secondstr = if second > 9 then String.fromInt second else "0"++String.fromInt second
      minute = (millisdiff // 1000) // 60
      minutestr = if minute > 9 then String.fromInt minute else "0"++String.fromInt minute
  in Svg.svg svgfullsize
             [ Svg.rect [Svg.x "0", Svg.y "0", Svg.width "calc(100% - 7.5cqh)", Svg.height "100%", Svg.fill "rgb(227, 7, 20)"] []
             , Svg.circle [Svg.cx "calc(100% - 7.5cqh)", Svg.cy "50%", Svg.r "7.5cqh", Svg.fill "rgb(227, 7, 20)"] []
             , Svg.circle [Svg.cx "calc(100% - 7.5cqh)", Svg.cy "50%", Svg.r "6.5cqh", Svg.stroke "#ffffff", Svg.strokeWidth "0.7cqh", Svg.fill "none"] []
             , Svg.foreignObject [Svg.x "calc(100% - 15cqh)", Svg.y "0", Svg.width "15cqh", Svg.height "100%"] 
                                 [div ([style "color" "white", style "text-align" "center", style "font-size" "3.8cqh"]++centeringstuff) 
                                       [text (minutestr ++ ":" ++ secondstr)]]]

punten : Int -> Html Msg
punten x =
  Svg.svg (svgfullsize ++ [style "opacity" "100%"])
          [ Svg.rect [Svg.x "7.5cqh", Svg.y "0", Svg.width "calc(100% - 7.5cqh)", Svg.height "100%", Svg.fill "rgb(227, 7, 20)"] []
          , Svg.circle [Svg.cx "7.5cqh", Svg.cy "50%", Svg.r "7.5cqh", Svg.fill "rgb(227, 7, 20)"] []
          , Svg.circle [Svg.cx "7.5cqh", Svg.cy "50%", Svg.r "6.5cqh", Svg.stroke "#ffffff", Svg.strokeWidth "0.7cqh", Svg.fill "none"] []
          , Svg.foreignObject [Svg.x "0", Svg.y "0", Svg.width "15cqh", Svg.height "100%"] [div ([style "color" "white", style "text-align" "center", style "font-size" "3.8cqh"]++centeringstuff) [text (String.fromInt x)]]]

