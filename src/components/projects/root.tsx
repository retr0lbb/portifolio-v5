import React, {ComponentProps} from "react"
import { twMerge } from "tailwind-merge"

interface rootProps extends ComponentProps<"div">{
    description?: string
    title?: string
    buttons: React.ReactNode
}

export const root: React.FC<rootProps> = ({buttons, ...props}) => {
    return(
        <div 
            className={
            twMerge("w-full h-full min-h-72 bg-gradient-to-br group relative p-4 from-white/20 to-white/30",
             "rounded-2xl transition-all overflow-hidden border border-black/10 dark:border-white/10",
            props.className)
        }>
            {props.children}

            <div
                className="absolute backdrop-filter bg-gradient-to-r from-black/80 
                to-black/30 inset-0 group-hover:translate-x-0 transition-all 
                duration-75 -translate-x-full p-4 grid"
            >
                <div>
                    <h1 className="text-4xl text-white/90 font-bold">{props.title}</h1>
                    <p className="text-white/70">{props.description}</p>
                </div>
                
                {buttons}
            </div>
        </div >
    )
}