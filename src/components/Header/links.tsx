import React from "react"

interface linkProps extends React.ComponentProps<"li"> {
    Icon: any
    to: string
}

export const link: React.FC<linkProps> = ({Icon, to, className, children, ...rest}) => {
    return(
        <li className="hover:text-black dark:hover:text-white transition-all cursor-pointer text-zinc-500 dark:text-zinc-200" {...rest}>
            <a href={to} className="flex items-center gap-1"><Icon /> {children}</a>
        </li>
    )
}