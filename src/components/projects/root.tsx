import React, {ComponentProps} from "react"
import { twMerge } from "tailwind-merge"
import {Github} from "lucide-react"
import { IconButton } from "../iconButton"


interface rootProps extends ComponentProps<"div">{
    children: React.ReactNode
    
}

export const root: React.FC<rootProps> = ({...props}) => {
    return(
        <div className={
            twMerge("w-full h-full bg-gradient-to-br group relative hover: from-white/20 to-white/30 rounded-2xl p-5 transition-all overflow-hidden",
            props.className)
        }>
            {props.children}

            <div
                className="absolute bg-black/70 inset-0 group-hover:translate-y-0 transition-all 
                duration-300 translate-y-full grid place-items-center p-20"
            >
                <div>
                    <IconButton >
                        <Github />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}