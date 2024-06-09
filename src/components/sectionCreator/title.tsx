import React from "react"
import { twMerge } from "tailwind-merge"
import { motion, MotionProps } from "framer-motion"

interface titleProps extends MotionProps {
    className?: string
}


export const title: React.FC<titleProps> = ({className, children, ...rest}) => {
    return(
        <motion.p className={twMerge("text-xl sm:text-2xl md:text-5xl lg:text-7xl font-bold font-mono w-full dark:text-background-ligth text-zinc-800", className)}>
            {children}
        </motion.p>
    )
}