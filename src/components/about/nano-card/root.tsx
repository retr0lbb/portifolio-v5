import React from "react"
import { twMerge } from "tailwind-merge"

interface rootProps extends React.ComponentProps<"div">{
    children: React.ReactNode
}
export const root: React.FC<rootProps> = ({children, className, ...rest}) => {
    return(
        <div className={twMerge("dark:bg-zinc-800 bg-zinc-100 rounded-xl flex flex-col p-5 gap-3 shadow-xl hover:scale-105 transition-all", className)} {...rest} >
            {children}
        </div>
    )
}