"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { motion } from "framer-motion"

export const ThemeSwap: React.FC = () => {
    const {setTheme, theme, resolvedTheme} = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(()=> {setMounted(true)}, [])

    return(
        <motion.button 
        initial={{
            rotate: 0
        }}
        whileTap={{
            rotate: 360
        }}
            className="flex items-center justify-center rounded-lg p-0.5 border text-background-dark dark:text-background-ligth border-contrast-light/30 dark:border-contrast-dark/30" onClick={() => {
            setTheme(resolvedTheme === "light"? "dark" : "light")
        }}>
            {resolvedTheme === "light"? (
                <MdDarkMode size={28} />
            ): (
                <MdLightMode size={28} />
            )}
            
        </motion.button>
    )
}