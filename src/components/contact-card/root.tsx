import React from "react"
import { twMerge } from "tailwind-merge"
import { motion, MotionProps } from "framer-motion"


interface rootProps extends MotionProps{
    className: string
}

export const root: React.FC<rootProps> = ({className, children, ...rest}) => {
    return( 
        <motion.div
            className={twMerge("flex flex-col justify-center bg-white/10 border border-white/10 rounded-xl relative", className)}
            {...rest}
        >
            {children}
        </motion.div>
    )
}