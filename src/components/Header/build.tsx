import { root as Root } from "./root"
import { link as Link } from "./links"
import { Folder, LucideHome, Phone, User2 } from "lucide-react"
import LanguageButton from "../languageButton"
import { ThemeSwap } from "../themeSwap"
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"




export const Build: React.FC = () => {
  const [isTapped, setIsTapped] = useState(false)
  const t = useTranslations("Header")

    return(
    <Root className="justify-between">
        <nav className="text-white/60">
          <motion.div 
            className="md:hidden text-4xl text-contrast-dark dark:text-contrast-light" 
            onClick={()=> setIsTapped(prev => !prev)}
            initial={{rotate: 0}}
            whileTap={{rotate: 15}}
            >
            {isTapped? (<IoClose />): (<IoMenu />)}
          </motion.div>
          <ul 
          className={`absolute flex flex-col gap-5 py-10 border bg-contrast-light md:bg-transparent dark:bg-contrast-dark border-contrast-light/40 rounded-lg px-10 items-baseline left-0 top-16 transition-all ${isTapped? "translate-x-0" :"-translate-x-72"} md:dark:bg-transparent md:translate-x-0 md:border-none md:flex md:flex-row md:static md:items-center justify-evenly md:gap-4 md:px-0 md:py-0 text-xl`}>
            <Link to="#home" onClick={() => setIsTapped(false)} Icon={LucideHome}>Home</Link>
            <Link to="#projects" onClick={() => setIsTapped(false)} Icon={Folder}>{t("Projetos")}</Link>
            <Link to="#about" onClick={() => setIsTapped(false)} Icon={User2}>{t("SobreMim")}</Link>
            <Link to="#contact" onClick={() => setIsTapped(false)} Icon={Phone}>{t("Contato")}</Link>
          </ul>
        </nav>

          <div className="flex items-center justify-center gap-5">
            <LanguageButton />
            <ThemeSwap />
          </div>
    </Root>
    )
}