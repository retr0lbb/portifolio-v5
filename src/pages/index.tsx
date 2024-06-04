import HeroHeader from "@/components/Header"
import { Switch } from "@nextui-org/react"
import { LucideHome, Folder, User2, SunDim, Moon, Phone } from "lucide-react"
import { ProjectPage } from "./project"
import { MainSection } from "./main"
import { AboutPage } from "./about"
import { Footer } from "@/components/footer/footer"
import { Contact } from "./contact"



export default function Home() {
  return (
    <main id="home" 
      className="scroll-smooth max-w-screen min-h-screen pb-32 flex flex-col items-center overflow-y-hidden overflow-hidden dark:bg-black relative antialiased"
    >
      <HeroHeader.root className="justify-between">
        <nav className="text-white/60">
          <ul className="flex items-center justify-evenly gap-4 text-xl">
            <HeroHeader.link to="#home" Icon={LucideHome}>Home</HeroHeader.link>
            <HeroHeader.link to="#projects" Icon={Folder}>Projects</HeroHeader.link>
            <HeroHeader.link to="#about" Icon={User2}>Sobre mim</HeroHeader.link>
            <HeroHeader.link to="#contact" Icon={Phone}>Contato</HeroHeader.link>
          </ul>
        </nav>

          <Switch 
          size="lg"
          color="default"
            startContent={<Moon />}
            endContent={<SunDim />}
          />
        </HeroHeader.root>

        {/* SECTIONS */}
          <MainSection />
          <ProjectPage id="projects"/> 
          <AboutPage id="about"/>
          <Contact id="contact" />
        {/* SECTIONS */}

        <Footer />
      </main>
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