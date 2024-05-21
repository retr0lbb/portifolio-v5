import React from "react"

interface linkProps extends React.ComponentProps<"li"> {
    Icon: any
    to: string
}

export const link: React.FC<linkProps> = ({Icon, to, className, children, ...rest}) => {
    return(
        <li className="hover:text-white transition-colors cursor-pointer" {...rest}>
            <a href={to} className="flex items-center gap-1"><Icon /> {children}</a>
        </li>
    )
}