import React from "react"
import { twMerge } from "tailwind-merge"


interface rootProps extends React.ComponentProps<"header"> {}
export const root: React.FC<rootProps> = ({className, children, ...rest}) => {
    return(
        <header 
        className={
            twMerge("fixed w-screen z-50 top-0 min-h-16 flex items-center justify-center px-12 border-b glass",
            className)
        } {...rest}>
            {children}
        </header>
    )
}