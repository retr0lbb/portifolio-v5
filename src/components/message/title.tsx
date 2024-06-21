import React from "react"


interface titleProps {
    children: React.ReactNode
}
export const title: React.FC<titleProps> = ({children}) => {
    return(
        <div className="text-center w-full mt-6 mb-4 text-xl md:text-2xl lg:text-3xl font-bold">
            <p>{children}</p>
        </div>
    )
}