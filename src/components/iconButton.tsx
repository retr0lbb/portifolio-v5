import React from "react"
import { twMerge } from "tailwind-merge"

interface iconButtonProps extends React.ComponentProps<"button">{
    href?: string;
}

export const IconButton: React.FC<iconButtonProps> = ({ href, className, ...props}) => {
    return(
        <a href={href} target="_blank">
        <button className={
            twMerge("size-14 bg-white/20 rounded-full text-white border hover:bg-white/30 border-white/10 grid place-items-center",
            className)}
            {...props}
        />
        </a>
    )
}