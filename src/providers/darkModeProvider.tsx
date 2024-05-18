import React, { Children, useContext } from "react";
import {darkModeProviderTypes, useDarkmode} from "@/use-case/useDarkmode"

interface DarkmodeProviderProps{
    children: React.ReactNode
}

const DarkModeContext = React.createContext<darkModeProviderTypes | undefined>(undefined)

export const DarkModeProvider: React.FC<DarkmodeProviderProps> = ({children}) => {
    const {isDarkModed, toogleDarkmode} = useDarkmode()
    return(
        <DarkModeContext.Provider value={{isDarkModed, toogleDarkmode}}>
            {children}
        </DarkModeContext.Provider>
    )
}
