import React from "react"
import { twMerge } from "tailwind-merge"

interface rootProps extends React.ComponentProps<"div">{
    children: React.ReactNode
}
export const root: React.FC<rootProps> = ({children, className, ...rest}) => {
    return(
        <div className={twMerge("dark:bg-contrast-dark bg-contrast-light rounded-xl flex flex-col p-5 gap-3 shadow-xl hover:scale-[1.02] transition-all", className)} {...rest} >
            {children}
        </div>
    )
}