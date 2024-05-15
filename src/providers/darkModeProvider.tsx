import React, { Children } from "react";

interface DarkmodeProviderProps{
    children: React.ReactNode
}

const DarkModeContext = React.createContext(undefined)

export const darkModeProvider: React.FC<DarkmodeProviderProps> = ({children}) => {
    return(
        <DarkModeContext.Provider value={undefined}>
            {children}
        </DarkModeContext.Provider>
    )
}