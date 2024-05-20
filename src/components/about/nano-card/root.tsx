import React from "react"
import { twMerge } from "tailwind-merge"

interface rootProps extends React.ComponentProps<"div">{
    children: React.ReactNode
}
export const root: React.FC<rootProps> = ({children, className, ...rest}) => {
    return(
        <div className={twMerge("bg-zinc-800 rounded-xl flex flex-col p-5 gap-3", className)} {...rest} >
            {children}
        </div>
    )
}