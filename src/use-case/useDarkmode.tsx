import { useState } from "react"

export default function useDarkmode<T= unknown>(){

    const getDarkmodeFromLocalStorage = localStorage.getItem("@henrydev/darkmode") === "true"

    const [isDarkModed, setIsDarkmoded] = useState(getDarkmodeFromLocalStorage ?? true)

    function toogleDarkmode(){
        if(isDarkModed == true){
            localStorage.setItem("@henrydev/darkmode", "true")
        }
    }


    return {isDarkModed, }
}