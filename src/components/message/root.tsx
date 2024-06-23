import React from "react"
import { MessageProps } from "./Message"

interface rootProps {
    children: React.ReactElement<MessageProps>[],
}



export const root: React.FC<rootProps> = ({children}) => {
    return(
        <div className="w-full flex flex-col px-4 pb-6 gap-2 rounded-2xl">
            {children}
        </div>
    )
}