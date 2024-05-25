import { Github, Instagram, Linkedin, Mail } from "lucide-react"
import { IconButton } from "../iconButton"
import { BsTwitterX } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa"

export const Footer: React.FC = () => {
    return(
        <footer className="w-screen py-4 bg-white/5 flex items-center justify-around absolute bottom-0">
          <a className="underline text-xl" href="http://localhost:3000">© 2024 Henrique Barbosa</a>
          <div className="flex flex-col gap-2">
            <p>Redes sociais:</p>
            <div className="flex items-center gap-3">
              <IconButton href="https://github.com/retr0lbb" className="bg-transparent hover:bg-transparent border-none hover:scale-105 size-10">
               <Github />
              </IconButton>

              <IconButton href="https://www.linkedin.com/in/retr0lbb/" className="bg-transparent hover:bg-transparent border-none hover:scale-105 size-10">
                <Linkedin />
              </IconButton>

              <IconButton className="bg-transparent hover:bg-transparent border-none hover:scale-105 size-10">
                <Mail />
              </IconButton>

              <IconButton  className="bg-transparent hover:bg-transparent border-none hover:scale-105 size-10">
                <Instagram />
              </IconButton>

              <IconButton  className="bg-transparent hover:bg-transparent border-none hover:scale-105 size-10">
                <BsTwitterX />
              </IconButton>

              <IconButton className="bg-transparent hover:bg-transparent border-none hover:scale-105 size-10">
                <FaWhatsapp size={24} />
              </IconButton>
            </div>
          </div>
        </footer>
    )
}