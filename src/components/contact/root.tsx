import React from "react"
import { twMerge } from "tailwind-merge"
interface rootProps {
    className?: string,
    children: React.ReactNode
}


export const root: React.FC<rootProps> = ({children, className}) => {
    return(
        <div className={twMerge("col-span-5 grid grid-cols-3 h-full p-5 gap-3 place-items-center", className)}>
            {children}
        </div>
    )
}