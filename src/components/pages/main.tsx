import { IconButton } from "@/components/iconButton"
import { FlipWords } from "@/components/ui/flip-words"
import { FaWhatsapp, FaLinkedinIn, FaEnvelope } from "react-icons/fa"
import { ChevronsDown } from "lucide-react"
import { motion } from "framer-motion"
import Page from "@/components/sectionCreator"

export const MainSection: React.FC = () => {
    const words = ["Web", "Mobile", "Game"]
    return(
        <Page.root id="home" initial={{opacity: 0}} animate={{opacity: 1}} className="relative h-screen">
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
                <p className="text-4xl md:text-6xl lg:text-9xl font-bold text-background-dark dark:text-background-ligth">Henrique Barbosa <br /></p>
                <div className="text-2xl md:text-5xl lg:text-7xl font-bold text-contrast-dark dark:text-contrast-light">
                    <FlipWords words={words} className="text-contrast-dark dark:text-background-ligth text-start p-0" /> Developer.
                </div>
            </div>

            <div className="w-full mt-8 border-t border-black/50 dark:border-white/20 pt-5" >
                <div className="flex items-center gap-3 ">
                    <IconButton href="https://www.linkedin.com/in/retr0lbb/">
                        <FaLinkedinIn/>
                    </IconButton>

                    <IconButton href="https://api.whatsapp.com/send?phone=5511999429345&text=Olá">
                        <FaWhatsapp />
                    </IconButton>

                    <IconButton href={`mailto:${"retr0lbb@gmail.com"}?subject=${encodeURIComponent("Website")}`}>
                        <FaEnvelope/>
                    </IconButton>
                </div>
            </div>
        </Page.root>
    )
}