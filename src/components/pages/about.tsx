import { AboutCard } from "@/components/about/aboutCard"
import NanoCard from "@/components/about/nano-card"
import { Backpack, Binary, Clapperboard, Joystick } from "lucide-react"
import { FaNodeJs, FaReact } from "react-icons/fa"
import { SiArduino, SiUdemy } from "react-icons/si"
import Page from "@/components/sectionCreator"

interface AboutProps{
  id: string
}

export const AboutPage: React.FC<AboutProps> = ({id}) => {
    return(
      <Page.root 
        id="about" 
        className="flex flex-col gap-8 p-10"
        initial={{
          opacity: 0,
          x: 20
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        viewport={{
          once: true,
          margin: "-200px"
        }}
      >

        <Page.title>Me conheça um pouco melhor:</Page.title>
        
      </Page.root>
    )
}