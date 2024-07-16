import React from "react"
import { twMerge } from "tailwind-merge"

interface titleProps extends React.ComponentProps<"p"> {
    className?: string
}


export const title: React.FC<titleProps> = ({className, children, ...rest}) => {
    return(
        <p
        className={
            twMerge("text-xl sm:text-2xl md:text-5xl lg:text-7xl font-bold w-full dark:text-zinc-200 text-zinc-800", className)
            }
        >
            {children}
        </p>
    )
}