import React from "react"
import { MessageProps } from "./Message"

interface rootProps {
    children: React.ReactNode,
    youImageSrc: any,
    OtherImageSrc: any
}

export const root: React.FC<rootProps> = ({children, OtherImageSrc, youImageSrc}) => {
    const childrenWithProps = React.Children.map(children, (child: MessageProps) => {
        if(React.isValidElement(child)){
            return React.cloneElement(child, {OtherImageSrc, youImageSrc})
        }
    })
    return(
        <div className="w-full flex flex-col px-4 pb-6 gap-2 border dark:border-contrast-light/30 rounded-2xl">
            {children}
        </div>
    )
}