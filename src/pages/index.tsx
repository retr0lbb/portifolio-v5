import ProjectCard from "@/components/projects/index"
import voteNow from "@/static/Home-black.png"
import Motion from "@/static/70574400-9e6a-11e9-8708-22d4bf4c3322.png"
import HeroSection from "@/components/heroCard"
import HeroHeader from "@/components/Header/_index"
import {Switch, Image} from "@nextui-org/react"
import {Card, CardHeader, CardBody, CardFooter,} from "@nextui-org/card";
import placeHolder from "@/static/placeholder.jpeg"
import {useState} from "react"

import { LucideHome, Folder, User2, SunDim, Moon, Car } from "lucide-react"

export default function Home() {

  const [darkMode, setDarkmode] = useState(true)
  console.log(darkMode)


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


          <Card
            radius="lg"
            className="border-none col-span-2"
          >
            <Image 
              alt="beautiful man looking down"
              src={placeHolder.src}
            />
          </Card>

          <div className="col-span-3 bg-red-500 p-5">
            <h1>Olá 👋</h1>
            <h2>🙍Meu nome é Henrique Barbosa Sampaio.</h2>
            <p>tenho 18 anos moro em São paulo, Brasil.</p>
            <p>programo des dos 15 anos de idade. Tenho proficiencia em programação web.</p>
            <span>Principalmente com tecnologias javascript.</span>
            <span>Além disso, também tenho proficiencia em aplicações Mobile tanto Android quanto Ios</span>
            <span>E gosto bastante da area de sistemas embarcados.</span>

            <span>No meu tempo livre eu gosto de assistir filmes e animações japonesas</span>
            <span>também gosto de jogar jogos eletronicos, de preferencia jogos souls-like</span>
            <span>e por fim também gosto de tentar construir coisas com o arduino</span>

            <div>
              <p>Quer jogar papo fora?</p>
              <button>Me mande uma mensagem no instagram</button>
              <p>Quer impulsionar o seu negocio?</p>
              <button>Fale diretamente comigo pelo jeito que preferir</button>
            </div>
          </div>



      </section>
    </div>
  );
}
