import React from "react"
import { twMerge } from "tailwind-merge"
import { motion, MotionProps } from "framer-motion"


interface rootProps extends MotionProps{
    className: string
}

export const root: React.FC<rootProps> = ({className, children, ...rest}) => {
    return( 
        <motion.div
            className={twMerge("flex flex-col justify-center border bg-contrast-light-dark/5 border-background-dark/10 dark:bg-white/10 dark:border-white/10 rounded-xl relative", className)}
            {...rest}
        >
            {children}
        </motion.div>
    )
}