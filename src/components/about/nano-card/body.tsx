import { twMerge } from "tailwind-merge"
import { ReactNode } from "react"


interface bodyProps {
    children?: ReactNode,
    className?: string
}
export const body: React.FC<bodyProps> = ({children, className}) => {
    return(
        <div className={twMerge("flex-1 grid grid-cols-4 grid-rows-2 p-2", className)}>
            {children}
        </div>
    )
}