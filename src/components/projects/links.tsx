import React from "react"

interface linksProps {
    children: React.ReactNode
}

export const links: React.FC<linksProps> = ({children}) => {
    return(
        <div className="flex flex-row-reverse items-end gap-4 p-2">
            {children}
        </div>
    )
}