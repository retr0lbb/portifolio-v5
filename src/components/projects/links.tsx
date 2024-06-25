import React from "react"

interface linksProps {
    children: React.ReactNode
}

export const links: React.FC<linksProps> = ({children}) => {
    return(
        <div className="flex absolute bottom-4 right-4 flex-row-reverse items-end gap-4 p-2 bg-black/20 rounded-full">
            {children}
        </div>
    )
}