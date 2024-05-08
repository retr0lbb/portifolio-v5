import React from "react"
import { twMerge } from "tailwind-merge"

interface HeroRootProps extends React.ComponentProps<"section">{

}

export const HeroRoot: React.FC<HeroRootProps> = ({className, ...rest}) => {
    return(
        <section className={twMerge("p-5 row-span-3 font-bold font-mono col-span-3 overflow-hidden", className)} {...rest}/>
    )
}