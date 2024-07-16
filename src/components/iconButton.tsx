import React from "react"
import { tv, VariantProps } from "tailwind-variants"

interface iconButtonProps extends React.ComponentProps<"button">, VariantProps<typeof iconButton>{
    href?: string
    Icon?: any
}

const iconButton = tv({
    base: "size-10 md:size-12 lg:size-14 text-xl md:text-2xl lg:text-3xl rounded-full border grid place-items-center ",
 
    variants: {
        isLightModeAllowed: {
            yes: "bg-zinc-300/20 text-zinc-950 border-zinc-500/50 hover:bg-zinc-300/50 dark:bg-zinc-500/50 dark:text-zinc-50 dark:hover:bg-zinc-300/20 dark:border-zinc-900/50",
            no: "bg-zinc-500/50 text-zinc-50 hover:bg-zinc-500/20 border-zinc-900/50"
        }
    },

    defaultVariants: {
        isLightModeAllowed: "yes"
    }
})




export const IconButton: React.FC<iconButtonProps> = ({isLightModeAllowed , href, className, Icon, disabled, ...props}) => {
    return(
        <a href={href} target="_blank" rel="noopener noreferrer">
        <button className={iconButton({isLightModeAllowed, className})}
            >
                {Icon && <Icon />}
                {props.children}
            </button>
        </a>
    )
}


// in case of emergency use this styles

/**
 * 
 * ? "bg-background-ligth/20 text-background-ligth border-background-ligth/10 hover:bg-background-ligth/30"
    : "bg-background-dark/10 text-contrast-dark border-background-dark/10 hover:bg-background-dark/5 dark:bg-background-ligth/20 dark:text-background-ligth dark:hover:bg-background-ligth/30 dark:border-background-ligth/10",
    `${disabled? "opacity-50 hover:bg-inherit cursor-not-allowed": ""}`,
 */