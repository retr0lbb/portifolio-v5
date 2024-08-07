import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface titleProps {
    className?: string,
    children?: ReactNode
}

export const title: React.FC<titleProps> = ({children, className}) => {
    return(
        <h1 className={twMerge("text-3xl font-bold text-contrast-dark dark:text-background-ligth", className)}>{children}</h1>
    )
}