import React from "react"
import { twMerge } from "tailwind-merge"
import { BackgroundGradient } from "../ui/backgound-gradient"

interface HeroRootProps extends React.ComponentProps<"section">{

}

export const HeroRoot: React.FC<HeroRootProps> = ({className, ...rest}) => {
    return(
        <BackgroundGradient 
            animate 
            containerClassName="col-span-5" 
            className={twMerge("font-bold font-mono p-10 bg-black rounded-3xl", className)} 
            
            //rest of functions
            {...rest}
        />
    )
}