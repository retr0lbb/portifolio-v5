"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";
import { PiMoonFill } from "react-icons/pi";
import { CgDarkMode } from "react-icons/cg";
import { motion } from "framer-motion"
import { Button } from "@nextui-org/react";
import { MdWbSunny } from "react-icons/md";

export const ThemeSwap: React.FC = () => {
    const {setTheme, theme, resolvedTheme} = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(()=> {setMounted(true)}, [])

    if(!mounted){
        return(
            <button>
                <CgDarkMode></CgDarkMode>
            </button>
        )
    }

    return(
        <Button 
            variant="bordered" 
            size="md" 
            className="flex items-center justify-center text-xl" 
            isIconOnly
            onClick={()=> {
                setTheme(resolvedTheme === "light"? "dark" : "light")
            }}
            >
            <motion.div 
                initial={{
                    rotate: 0,
                    opacity: 0
                }}
                animate={{
                    rotate: theme === "light" ? 0 : -360,
                    opacity: 1
                }}
                transition={{ duration: 0.3 }} // Duração da transição
                className="text-2xl">
                {theme === "light" && <MdWbSunny />}
                {theme === "dark" && <PiMoonFill />}
            </motion.div>
        </Button>
    )
}