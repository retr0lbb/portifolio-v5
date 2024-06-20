import React from "react"

interface rootProps {
    children: React.ReactNode
}

export const root: React.FC<rootProps> = ({children}) => {
    return(
        <div className="w-full flex flex-col px-4 pb-6 gap-2 border dark:border-contrast-light/30 rounded-2xl">
            {children}
        </div>
    )
}