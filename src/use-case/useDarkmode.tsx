import { useState } from "react"
import {setCookie, parseCookies} from "nookies"

export interface darkModeProviderTypes{
    isDarkModed: boolean,
    toogleDarkmode: () => void
}

export function useDarkmode(){
    const [isDarkModed, setIsDarkmoded] = useState(false)

    function toogleDarkmode(){
        setIsDarkmoded((prev) => {
            return !prev
        })
    }


    return {isDarkModed, toogleDarkmode}
}