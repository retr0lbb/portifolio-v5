import { useState } from "react"

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