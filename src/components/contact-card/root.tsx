import React from "react"
import { twMerge } from "tailwind-merge"
import { motion, MotionProps } from "framer-motion"


interface rootProps extends MotionProps{
    className: string
}

export const root: React.FC<rootProps> = ({className, children, ...rest}) => {
    return( 
        <motion.div
            className={
                twMerge
                ("flex flex-col justify-center bg-contrast-light-dark/5 rounded-xl relative border dark:border-zinc-800 dark:bg-zinc-900", className)}
            {...rest}
        >
            {children}
        </motion.div>
    )
}