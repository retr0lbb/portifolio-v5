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
          x: 500
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
        <section className="w-full grid grid-cols-1 place-content-center lg:grid-cols-5 gap-5">
            <AboutCard />
            <NanoCard.root className="row-span-1 w-full">
              <NanoCard.title>Tecnologias</NanoCard.title>
              <NanoCard.body className="grid-cols-2 gap-2">
                <div className="dark:bg-background-dark/30 border border-contrast-light/30 dark:border-none bg-contrast-dark/5 rounded-md flex items-center justify-center">
                  <FaReact size={64} color="cyan" />
                </div>

                <div className="dark:bg-background-dark/30 border border-contrast-light/30 dark:border-none bg-contrast-dark/5 rounded-md flex items-center justify-center">
                  <FaNodeJs size={64} color="lime" />
                </div>

                <div className="dark:bg-background-dark/30 border border-contrast-light/30 dark:border-none bg-contrast-dark/5 rounded-md flex items-center justify-center">
                  <SiArduino size={64} color="teal" />
                </div>

                <div className="dark:bg-background-dark/30 border border-contrast-light/30 dark:border-none bg-contrast-dark/5 rounded-md flex items-center justify-center">
                  <FaReact size={64} color="darkblue" />
                </div>  
              </NanoCard.body>
            </NanoCard.root>

            <NanoCard.root className="col-span-2">
              <NanoCard.title>Interesses</NanoCard.title>
              <NanoCard.body className="grid-cols-3 grid-rows-1 gap-4 p-3">
                <div className="dark:bg-background-dark/30 bg-contrast-dark/5 text-background-dark dark:text-background-ligth flex flex-col items-center justify-center px-5 py-4">
                  <div className="text-xl p-2 text-contrast-dark dark:text-background-ligth">Filmes</div>
                  <Clapperboard className="flex-1" size={64}/>
                  <p className="text-xs w-full text-zinc-500 p-2 text-justify">principalmente de filmes de ação ou filmes de animação como sonic entre outros.</p>
                </div>

                <div className="dark:bg-background-dark/30 bg-contrast-dark/5 text-background-dark dark:text-background-ligth flex flex-col items-center justify-center px-5 py-4">
                  <div className="text-xl p-2 dark:text-background-ligth">Games</div>
                    <Joystick className="flex-1" size={64}/>
                  <p className="text-xs w-full text-zinc-500 p-2 text-justify">Adoro jogos como Fallout 4, Dark souls 3, Devil may cry 5 entre outros.</p>
                </div>

                <div className="dark:bg-background-dark/30 bg-contrast-dark/5 text-background-dark dark:text-background-ligth flex flex-col items-center justify-center px-5 py-4">
                  <div className="text-xl p-2 dark:text-background-ligth">Programação</div>
                  <Binary className="flex-1" size={64}/>
                  <p className="text-xs w-full text-zinc-500 p-2">Gosto de programar aplicações back-end e front end para aprender novas tecnologias.</p>
                </div>
              </NanoCard.body>
            </NanoCard.root>

            <NanoCard.root className="col-span-2">
              <NanoCard.title>Educação</NanoCard.title>
              <NanoCard.body className="grid-cols-2 grid-rows-1 place-items-center gap-2">
                <div className="w-full h-full flex flex-col items-center p-4 bg-contrast-dark/5 dark:bg-background-dark/30 rounded-md">
                  <div className="text-xl dark:text-contrast-light">Udemy</div>
                  <SiUdemy size={64} className="flex-1 text-background-dark dark:text-background-ligth" />
                  <p className="text-sm text-zinc-500">Concluido os cursos de reactjs, nodejs, nestjs framework com exelencia</p>
                </div>
                <div className="w-full h-full flex flex-col items-center p-4 bg-contrast-dark/5 dark:bg-background-dark/30 rounded-md">
                  <div className="text-xl dark:text-contrast-light">Escola Tecnica Estadual Uirapuru</div>
                  <Backpack size={64} className="flex-1 text-background-dark dark:text-background-ligth" />
                  <p className="text-sm text-zinc-500">Graduado no curso de Desenvolvimento de sistemas na modalidade Ensino Técnico Integrado ao Ensino Médio(ETIM)</p>
                </div>
              </NanoCard.body>
            </NanoCard.root>
        </section>
      </Page.root>
    )
}