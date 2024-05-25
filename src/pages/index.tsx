import HeroHeader from "@/components/Header"
import { Switch, Snippet } from "@nextui-org/react"
import { FaNodeJs, FaReact, FaGithub, FaWhatsapp } from "react-icons/fa"
import { LucideHome, Folder, User2, SunDim, Moon, Clapperboard, Joystick, Binary, Backpack, Mail, Github, Linkedin, Instagram, Twitter, X } from "lucide-react"
import { IconButton } from "@/components/iconButton"
import { BsTwitterX } from "react-icons/bs"
import { ProjectPage } from "./project"
import { MainSection } from "./main"
import { AboutPage } from "./about"


export default function Home() {

  return (
    <div id="home" 
      className="max-w-screen min-h-screen py-28 flex flex-col items-center overflow-y-hidden overflow-hidden bg-black relative"
    >
      <HeroHeader.root className="justify-between">
        <nav className="text-white/60">
          <ul className="flex items-center justify-evenly gap-4 text-xl">
            <HeroHeader.link to="#home" Icon={LucideHome}>Home</HeroHeader.link>
            <HeroHeader.link to="#project" Icon={Folder}>Projects</HeroHeader.link>
            <HeroHeader.link to="#about" Icon={User2}>Sobre mim</HeroHeader.link>
          </ul>
        </nav>

          <Switch 
          size="lg"
          color="default"
            startContent={<Moon />}
            endContent={<SunDim />}
          />
        </HeroHeader.root>


        <MainSection />

        <ProjectPage />

        <AboutPage />

        <footer className="w-screen py-4 bg-white/5 flex items-center justify-around absolute bottom-0">
          <a className="underline text-xl" href="http://localhost:3000">© 2024 Henrique Barbosa</a>
          <div className="flex flex-col gap-2">
            <p>Redes sociais:</p>
            <div className="flex items-center gap-3">
              <IconButton className="bg-transparent hover:bg-transparent border-none hover:scale-105 size-10">
               <Github />
              </IconButton>

              <IconButton className="bg-transparent hover:bg-transparent border-none hover:scale-105 size-10">
                <Linkedin />
              </IconButton>

              <IconButton className="bg-transparent hover:bg-transparent border-none hover:scale-105 size-10">
                <Mail />
              </IconButton>

              <IconButton className="bg-transparent hover:bg-transparent border-none hover:scale-105 size-10">
                <Instagram />
              </IconButton>

              <IconButton className="bg-transparent hover:bg-transparent border-none hover:scale-105 size-10">
                <BsTwitterX />
              </IconButton>

              <IconButton className="bg-transparent hover:bg-transparent border-none hover:scale-105 size-10">
                <FaWhatsapp size={24} />
              </IconButton>
            </div>
          </div>
        </footer>
      </div>
    );
  }


  /**
   * Referencias para caso eu me perca
   * 
   * Free-for-all: https://olaolu.dev
   * mouseIntegration: https://www.codewonders.dev
   * image-reference: https://www.adhamdannaway.com
   * scroll-animation-1: https://www.onyedika.xyz
   * cards: https://www.seanhalpin.xyz
   * mouse-&&-scroll-animation: https://tamalsen.dev
   */