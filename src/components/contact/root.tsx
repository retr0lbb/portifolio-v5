import React from "react"
import { twMerge } from "tailwind-merge"
interface rootProps {
    className?: string,
    children: React.ReactNode
}


export const root: React.FC<rootProps> = ({children, className}) => {
    return(
        <div id="contact" className={twMerge("w-full flex items-center justify-center flex-col", className)}>
            {children}
        </div>
    )
}