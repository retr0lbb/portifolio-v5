import { MotionProps, motion } from "framer-motion"
import React from "react"
import { twMerge } from "tailwind-merge"

interface rootProps extends MotionProps {
    className: string,
    id: string
}

export const root: React.FC<rootProps> = ({className, id, children, ...rest}) => {
    return(
        <motion.main className={twMerge("w-full p-6 md:p-8 lg:p-10 flex items-center justify-center flex-col", className)} id={id} {...rest}>
            {children}
        </motion.main>
    )
}