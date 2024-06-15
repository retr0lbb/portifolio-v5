import { IconButton } from "../iconButton"
import { BsTwitterX } from "react-icons/bs"
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin, } from "react-icons/fa"
import { SiGmail } from "react-icons/si";

export const Footer: React.FC = () => {
    return(
        <footer className="w-screen py-4 px-8 bg-background-dark/5 dark:bg-background-ligth/5 flex items-center gap-4 md:gap-0 justify-around absolute bottom-0">
          <a className="underline text-sm md:text-xl" href="http://localhost:3000">© 2024 Henrique Barbosa</a>
          <div className="flex flex-col gap-2">
            <p className="text-xs">Redes sociais:</p>
            <div className="flex items-center">
              <IconButton Icon={FaGithub} href="https://github.com/retr0lbb" className="!bg-transparent hover:bg-transparent border-none hover:scale-105 size-10" />
              <IconButton Icon={FaLinkedin} href="https://www.linkedin.com/in/retr0lbb/" className="!bg-transparent hover:bg-transparent border-none hover:scale-105 size-10" />
              <IconButton Icon={SiGmail} className="!bg-transparent hover:bg-transparent border-none hover:scale-105 size-10" />
              <IconButton Icon={FaInstagram} className="!bg-transparent hover:bg-transparent border-none hover:scale-105 size-10" />
              <IconButton Icon={BsTwitterX} className="!bg-transparent hover:bg-transparent border-none hover:scale-105 size-10" />
              <IconButton Icon={FaWhatsapp} className="!bg-transparent hover:bg-transparent border-none hover:scale-105 size-10" />
            </div>
          </div>
        </footer>
    )
}