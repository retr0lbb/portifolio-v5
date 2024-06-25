import React from "react"
import { twMerge } from "tailwind-merge"

interface iconButtonProps extends React.ComponentProps<"button">{
    href?: string
    isDarkmodeMandatory?: boolean
    Icon?: any
}




export const IconButton: React.FC<iconButtonProps> = ({isDarkmodeMandatory, href, className, Icon, disabled, ...props}) => {
    return(
        <a href={href} target="_blank" rel="noopener noreferrer">
        <button className={twMerge(
                    "size-10 md:size-12 lg:size-14 text-xl md:text-2xl lg:text-3xl rounded-full border grid place-items-center",
                    isDarkmodeMandatory
                        ? "bg-background-ligth/20 text-background-ligth border-background-ligth/10 hover:bg-background-ligth/30"
                        : "bg-background-dark/10 text-contrast-dark border-background-dark/10 hover:bg-background-dark/5 dark:bg-background-ligth/20 dark:text-background-ligth dark:hover:bg-background-ligth/30 dark:border-background-ligth/10",
                        `${disabled? "opacity-50 hover:bg-inherit cursor-not-allowed": ""}`,
                    className
                )}
            >
                {Icon && <Icon />}
                {props.children}
            </button>
        </a>
    )
}