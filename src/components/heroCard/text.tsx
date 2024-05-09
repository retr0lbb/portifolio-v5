import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

interface HeroTextProps extends ComponentProps<"p"> {}


export const HeroText: React.FC<HeroTextProps> = ({className, ...rest}) => {
    return(
        <p className={twMerge("text-white select-none", className)} {...rest}/>
    )
}