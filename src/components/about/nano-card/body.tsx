import { twMerge } from "tailwind-merge"
import { ReactNode } from "react"


interface bodyProps {
    children?: ReactNode,
    className?: string
}
export const body: React.FC<bodyProps> = ({children, className}) => {
    return(
        <div className={twMerge("flex-1 grid grid-cols-3 grid-rows-3 bg-red-600 p-2", className)} children={children} />
    )
}