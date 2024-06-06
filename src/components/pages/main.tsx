import { IconButton } from "@/components/iconButton"
import {FlipWords} from "@/components/ui/flip-words"
import { AtSign, Linkedin } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { ChevronsDown } from "lucide-react"
import { motion } from "framer-motion"

export const MainSection: React.FC = () => {
    const words = ["Web", "Mobile", "Game"]
    return(
        <div className="w-full relative h-screen p-10 flex items-center justify-center flex-col">
            <motion.div 
                className="absolute bottom-8"
                animate={{
                    y: [0, 15, 0, 15, 0]
                }}    
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 2
                }}
            >
                <ChevronsDown size={32} color="gray"/>
            </motion.div>
            <div className="w-full">
                <p className="text-9xl font-bold font-mono text-background-dark dark:text-background-ligth">Henrique Barbosa <br /></p>
                <div className="text-6xl font-bold text-contrast-dark dark:text-contrast-light">
                    <FlipWords words={words} className="text-contrast-dark dark:text-background-ligth" /> Developer.
                </div>
            </div>

            <div className="w-full mt-8 border-t border-black/50 dark:border-white/20 pt-5" >
                <div className="flex items-center gap-3">
                    <IconButton href="https://www.linkedin.com/in/retr0lbb/">
                        <Linkedin size={28} />
                    </IconButton>

                    <IconButton>
                        <FaWhatsapp size={28} />
                    </IconButton>

                    <IconButton>
                        <AtSign size={28}/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}