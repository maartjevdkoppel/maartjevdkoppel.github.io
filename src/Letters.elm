module Letters exposing (..)
import Types exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)

type Letter = NietGeradenFoutGekocht | UitHetHoofd String | Opgezocht String

letters : Maybe Int -> List Letter -> Html Msg
letters lastQuestion ls = 
  table [style "scale" "200%", style "position" "relative", style "left" "50%", style "top" "50%", style "transform" "translate(-25%, -15%)" -- centering the whole thing
        , style "text-align" "center"-- centering text
        , style "font-weight" "bolder"] 
        ( tr [] (List.intersperse (th [style "font-size" "0.5cqh", style "width" "0.5cqh"] []) -- ruimte tussen letters
                  (List.map 
                    (\l -> let styles = [style "background-size" "100% 100%", style "font-size" "3cqh", style "opacity" "100%", style "height" "4cqh", style "width" "3cqh"] in
                      case l of
                        NietGeradenFoutGekocht -> th (style "background-color" "white" :: styles) []
                        Opgezocht letter -> th (style "background-color" "white" :: styles) [text letter]
                        UitHetHoofd letter -> th (style "background-image" "url('images/uithethoofd.jpg')" :: styles) [text letter])
                    ls))
        :: case lastQuestion of
            Nothing -> []
            Just lq -> [tr [] (List.intersperse (td [] []) (List.map (\i -> td [style "font-size" "1.2cqh", style "color" (if i>lq then "black" else "rgb(227, 7, 20)")] [text (String.fromInt i)]) 
                                                                      [1,2,3,4,5,6,7,8,9,10,11,12]))])
