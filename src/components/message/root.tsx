import React from "react"

interface rootProps {
    children: React.ReactNode
}

export const root: React.FC<rootProps> = ({children}) => {
    return(
        <div className="w-full flex flex-col p-2 gap-2">
            {children}
        </div>
    )
}