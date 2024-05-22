  import ProjectCard from "@/components/projects/index"
  import voteNow from "@/static/Home-black.png"
  import Motion from "@/static/70574400-9e6a-11e9-8708-22d4bf4c3322.png"
  import HeroSection from "@/components/heroCard"
  import HeroHeader from "@/components/Header"
  import { Switch, Snippet } from "@nextui-org/react"
  import { FaNodeJs, FaReact } from "react-icons/fa"
  import { SiArduino } from "react-icons/si"
  import { LucideHome, Folder, User2, SunDim, Moon, Clapperboard, Joystick, Binary, Backpack, Mail } from "lucide-react"
  import { AboutCard } from "@/components/about/aboutCard"
  import { SiUdemy } from "react-icons/si";
  import NanoCard from "@/components/about/nano-card"
  import Contact from "@/components/contact"
  import { IconButton } from "@/components/iconButton"


  export default function Home() {

  return (
    <div id="home" 
      className="max-w-screen min-h-screen flex flex-col items-center overflow-y-hidden overflow-hidden justify-center bg-black relative"
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
        <section className="w-full grid grid-cols-5 gap-4 p-4 mt-24 bg-blue-500">

          <HeroSection.root>
            <HeroSection.text className="text-5xl">Henrique Barbosa</HeroSection.text>
            <HeroSection.text className="text-9xl ">Fullstack Developer</HeroSection.text>

            <HeroSection.buttons />
          </HeroSection.root>

          <div id="project" className="col-span-5 bg-black px-4 py-6 text-5xl text-white font-mono font-bold">
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

            <div id="about" className="col-span-5 text-7xl font-bold py-5 mt-10 mb-5 px-10">
              Olá 👋 Meu nome é Henrique Barbosa Sampaio. Veja um pouco mais sobre mim
            </div>

            <AboutCard />
            <NanoCard.root className="row-span-1">
              <NanoCard.title>Tecnologias</NanoCard.title>
              <NanoCard.body className="grid-cols-2 gap-2">
                <div className="bg-black/30 rounded-md flex items-center justify-center">
                  <FaReact size={64} color="cyan" />
                </div>

                <div className="bg-black/30 rounded-md flex items-center justify-center">
                  <FaNodeJs size={64} color="lime" />
                </div>

                <div className="bg-black/30 rounded-md flex items-center justify-center">
                  <SiArduino size={64} color="teal" />
                </div>

                <div className="bg-black/30 rounded-md flex items-center justify-center">
                  <FaReact size={64} color="darkblue" />
                </div>
              </NanoCard.body>
            </NanoCard.root>

            <NanoCard.root className="col-span-2">
              <NanoCard.title>Interesses</NanoCard.title>
              <NanoCard.body className="grid-cols-3 grid-rows-1 gap-4 p-3">
                
                <div className="bg-black/40 flex flex-col items-center justify-center px-5 py-4">
                  <div className="text-xl p-2">Filmes</div>
                  <Clapperboard className="flex-1" size={64} color="darkgray"/>
                  <p className="text-xs w-full text-zinc-500 p-2 text-justify">principalmente de filmes de ação ou filmes de animação como sonic entre outros.</p>
                </div>

                <div className="bg-black/40 flex flex-col items-center justify-center px-5 py-4">
                  <div className="text-xl p-2">Games</div>
                    <Joystick className="flex-1" size={64} color="darkgray"/>
                  <p className="text-xs w-full text-zinc-500 p-2 text-justify">Adoro jogos como Fallout 4, Dark souls 3, Devil may cry 5 entre outros.</p>
                </div>

                <div className="bg-black/40 flex flex-col items-center justify-center px-5 py-4">
                  <div className="text-xl p-2">Programação</div>
                  <Binary className="flex-1" size={64} color="darkgray"/>
                  <p className="text-xs w-full text-zinc-500 p-2">Gosto de programar aplicações back-end e front end para aprender novas tecnologias.</p>
                </div>
              </NanoCard.body>
            </NanoCard.root>

            <NanoCard.root className="col-span-2">
              <NanoCard.title>Educação</NanoCard.title>
              <NanoCard.body className="grid-cols-2 grid-rows-1 place-items-center gap-2">
                <div className="w-full h-full flex flex-col items-center p-4 bg-black/35 rounded-md">
                  <div className="text-xl text-zinc-200">Udemy</div>
                  <SiUdemy size={64} className="flex-1" />
                  <p className="text-sm text-zinc-500">Concluido os cursos de reactjs, nodejs, nestjs framework com exelencia</p>
                </div>
                <div className="w-full h-full flex flex-col items-center p-4 bg-black/35 rounded-md">
                  <div className="text-xl text-zinc-200">Escola Tecnica Estadual Uirapuru</div>
                  <Backpack size={64} className="flex-1" />
                  <p className="text-sm text-zinc-500">Graduado no curso de Desenvolvimento de sistemas na modalidade Ensino Técnico Integrado ao Ensino Médio(ETIM)</p>
                </div>
              </NanoCard.body>
            </NanoCard.root>


            <div id="about" className="col-span-5 text-7xl font-bold py-5 mt-10 mb-5 px-10">
              Quer um website profissional?
            </div>

          {/** On hold !!!!  */}
            <Contact.root className="pb-32">
              <div className="p-4 w-full h-full flex flex-col items-center justify-center gap-8">
                <h1 className="text-2xl text-zinc-600">Me mande um email ✉️</h1>
                <Mail size={128} />
                <Snippet symbol="" size="lg">retr0lbb@gmail.com</Snippet>
              </div>

              <div className="bg-red-400 p-4 w-full h-full flex flex-col items-center justify-center">
                <Mail />
              </div>
              <div className="bg-red-400 p-4 w-full h-full flex flex-col items-center justify-center">
                <Mail />
              </div>
            </Contact.root>

        </section>

        <footer className="w-screen h-36 bg-green-500 flex items-center justify-around">
          <a>© 2024 Henrique Barbosa</a>

          <div className="flex items-center justify-evenly">
            <IconButton>

            </IconButton>
          </div>
        </footer>

        
      </div>
    );
  }
