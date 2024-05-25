import { AboutCard } from "@/components/about/aboutCard"
import NanoCard from "@/components/about/nano-card"
import { Backpack, Binary, Clapperboard, Joystick } from "lucide-react"
import { FaNodeJs, FaReact } from "react-icons/fa"
import { SiArduino, SiUdemy } from "react-icons/si"

interface AboutProps{
  id: string
}

export const AboutPage: React.FC<AboutProps> = ({id}) => {
    return(
        <section className="w-full p-10 grid grid-cols-5 gap-5" id={id}>
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
        </section>
    )
}