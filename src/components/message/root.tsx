import React from "react"
import { MessageProps } from "./Message"

interface rootProps {
    children: React.ReactElement<MessageProps>[],
    youImageSrc: any,
    OtherImageSrc: any
}



export const root: React.FC<rootProps> = ({children, OtherImageSrc, youImageSrc}) => {
    return(
        <div className="w-full flex flex-col px-4 pb-6 gap-2 border dark:border-contrast-light/30 rounded-2xl">
            {React.Children.map(children, (child) => {
                if(React.isValidElement(child)){
                    return React.cloneElement(child, {ImageSrc: child.props.sender === "you"? youImageSrc: OtherImageSrc})
                }
            return child
        })}
        </div>
    )
}