import ProjectCard from "@/components/projects/index"
import voteNow from "@/static/Home-black.png"
import Motion from "@/static/70574400-9e6a-11e9-8708-22d4bf4c3322.png"
import HeroSection from "@/components/heroCard"
import HeroHeader from "@/components/Header/_index"
import {Switch, Button} from "@nextui-org/react"
import {useState} from "react"
import {FaNodeJs, FaReact, FaInstagram} from "react-icons/fa"
import {SiArduino} from "react-icons/si"
import { LucideHome, Folder, User2, SunDim, Moon } from "lucide-react"
import { AboutCard } from "@/components/about/aboutCard"
import { AboutTecnologiesLabel } from "@/components/about/aboutTecnologiesLabel"

export default function Home() {

  const [darkMode, setDarkmode] = useState(true)


  return (
    <div id="home" className="max-w-screen min-h-screen flex flex-col items-center overflow-y-hidden justify-center bg-white relative">
      <HeroHeader.root className="justify-between">
        <nav className="text-white/60">
          <ul className="flex items-center justify-evenly gap-4 text-xl">
            <li className="flex items-center justify-center gap-1 hover:text-white transition-colors cursor-pointer"><LucideHome /><a href="#home">Home</a></li>
            <li className="flex items-center justify-center gap-1 hover:text-white transition-colors cursor-pointer"><Folder /><a href="#home">Projetos</a></li>
            <li className="flex items-center justify-center gap-1 hover:text-white transition-colors cursor-pointer"><User2 /><a href="#home">Sobre mim</a></li>
          </ul>
        </nav>

        <div>
          <Switch 
          size="lg"
          color="default"
            isSelected={darkMode} 
            onValueChange={setDarkmode} 
            startContent={<Moon />}
            endContent={<SunDim />}
          />
        </div>
      </HeroHeader.root>
      <section className="w-full grid grid-cols-5 gap-4 p-4 mt-24">

          <HeroSection.root>
            <HeroSection.text className="text-5xl">Henrique Barbosa</HeroSection.text>
            <HeroSection.text className="text-9xl ">Fullstack Developer</HeroSection.text>

            <HeroSection.buttons />
          </HeroSection.root>

          <div className="col-span-5 bg-black px-4 py-6 text-5xl text-white font-mono font-bold">
            Projetos:
          </div>

        <ProjectCard.root className="col-span-2" title="N.E.R.D" description="Uma loja online de jogos digitais focada na distribuição de jogos nacionais">
          <ProjectCard.image src="https://github.com/retr0lbb.png" />
        </ProjectCard.root>

        <ProjectCard.root 
          className="col-span-3 row-span-2" 
          title="Vote Now" 
          description="Uma aplicação de votação em enquetes simples e facil com integração com web sockets e redis database"
        >
          <ProjectCard.image src={voteNow.src} />
        </ProjectCard.root>

        <ProjectCard.root 
          className="col-span-2" 
          title="Framer Motion" 
          description="lorem ipos odsiad  aodsio ewijk jhiuoisdak idjsaokldakd"
        >
          <ProjectCard.image src={Motion.src} />
        </ProjectCard.root>

          <div className="col-span-5 bg-black px-4 py-6 text-5xl text-white font-mono font-bold">
            Sobre Mim
          </div>

          <AboutCard />

          

          <section className="col-span-3 bg-red-500 p-5 flex flex-col justify-around">
            <header className="w-full">
              <h1 className="text-9xl font-bold">Olá 👋</h1>
              <h2 className="text-2xl mt-2">Meu nome é Henrique Barbosa Sampaio.</h2>
              <h2 className="text-2xl">Eu sou um <span className="text-3xl font-bold font-mono">desenvolvedor fullstack</span></h2>
            </header>

            <article className="w-full">
              <h3 className="text-3xl font-bold">Informações Pessoais:</h3>
              <p>Tenho 18 anos e moro em São Paulo, Brasil.</p>
              <p>Programo desde os 15 anos de idade, com proficiência em programação web, principalmente em tecnologias JavaScript.</p>
              <p className="flex">como:  
                <AboutTecnologiesLabel  className="" textClassName="no-underline" Icon={FaReact} iconColor="cyan">
                  ReactJs
                </AboutTecnologiesLabel>,
                <AboutTecnologiesLabel className="" textClassName="no-underline" Icon={FaNodeJs} iconColor="lime">
                  NodeJs
                </AboutTecnologiesLabel>
              </p>
              <p>Também tenho experiência em aplicações Mobile, tanto para Android quanto iOS, e interesse na área de sistemas embarcados.</p>
            </article>

            <article className="w-full">
              <h3 className="text-3xl font-bold">Interesses:</h3>
              <p>No meu tempo livre, gosto de assistir filmes🎥 e animações japonesas🤖.</p>
              <p>Também curto jogar jogos eletrônicos🎮, especialmente jogos do estilo souls-like⚔️.</p>
              <p className="flex">E, por fim, gosto de trabalhar com o 
              <AboutTecnologiesLabel className="" textClassName="no-underline" Icon={SiArduino} iconColor="blue">
                 Arduino
              </AboutTecnologiesLabel> para criar projetos.</p>
            </article>

            <footer className="w-full flex flex-col gap-2">
              <h3 className="text-3xl font-bold">Entre em Contato:</h3>
              <div className="flex flex-col">
                <p>Quer jogar papo fora?</p>
                <Button 
                  variant="flat"
                  startContent={<FaInstagram />} 
                  className="max-w-max outline-none"
                >Me mande uma mensagem no Instagram</Button>
              </div>

              <div>
                <p>Quer um website para o seu negócio?</p>
                <Button className="max-w-max">Fale diretamente comigo pelo meio que preferir</Button>
              </div>
            </footer>
          </section>
      </section>
    </div>
  );
}
