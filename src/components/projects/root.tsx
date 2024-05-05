import React, {ComponentProps} from "react"
import { twMerge } from "tailwind-merge"
import {Github, Linkedin, Globe} from "lucide-react"
import { IconButton } from "../iconButton"


interface rootProps extends ComponentProps<"div">{
    children: React.ReactNode
    
}

export const root: React.FC<rootProps> = ({...props}) => {
    return(
        <div className={
            twMerge("w-full h-full bg-gradient-to-br group relative p-4 hover: from-white/20 to-white/30 rounded-2xl transition-all overflow-hidden",
            props.className)
        }>
            {props.children}

            <div
                className="absolute bg-black/70 inset-0 group-hover:translate-x-0 transition-all 
                duration-75 -translate-x-full p-4 grid"
            >
                <div className="">
                    <h1 className="text-4xl text-white/90 font-bold">N.E.R.D</h1>
                    <p className="text-white/70">A digital game store, made using React, Nodejs and MongodbAtlas</p>
                </div>
                <div className="flex flex-row-reverse items-end gap-4 p-2">
                    <IconButton >
                        <Github />
                    </IconButton>

                    <IconButton >
                        <Linkedin />
                    </IconButton>

                    <IconButton >
                        <Globe />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}