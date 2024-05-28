import ProjectCard from "@/components/projects"
import voteNow from "@/static/Home-white.png"
import motionProject from "@/static/70574400-9e6a-11e9-8708-22d4bf4c3322.png"
import NERD from "@/static/6e81f610234.png"
import BoomSneakers from "@/static/Ned.jpeg"
import React from "react"
import { motion } from "framer-motion"
import { IconButton } from "@/components/iconButton"
import { Github, Globe } from "lucide-react"

interface ProjectPageProps{
    id: string
}

export const ProjectPage: React.FC<ProjectPageProps> = ({id}) => {
    return(
        <motion.section 
            initial={{
                opacity: 0,
                x: -200
            }}
            whileInView={{
                opacity: 1,
                x: 0
            }}
            viewport={{
                margin: "-300px",
                once: true
            }}
            className="w-full flex flex-col items-center justify-center p-10 gap-8" id={id}>
            <motion.p
                className="text-7xl font-bold font-mono w-full"
            >
                Veja a minha expêriencia:
            </motion.p>

            <section
                className="w-full grid grid-cols-5 gap-3 overflow-y-hidden"
            >
                <ProjectCard.root 
                    className="col-span-2" 
                    title="N.E.R.D" 
                    description="Uma loja online de jogos digitais focada na distribuição de jogos nacionais"
                    buttons={
                    <ProjectCard.links>
                        <IconButton href="https://github.com/retr0lbb/N.E.R.D">
                            <Github />
                        </IconButton>
                        <IconButton >
                            <Globe />
                        </IconButton>
                    </ProjectCard.links>
                    }
                >
                    <ProjectCard.image src={NERD.src} />
                </ProjectCard.root>

                <ProjectCard.root 
                    className="col-span-3 row-span-2" 
                    title="Vote Now" 
                    description="Uma aplicação de votação em enquetes simples e facil com integração com web sockets e redis database"
                    buttons={
                    <ProjectCard.links>
                        <IconButton >
                            <Github />
                        </IconButton>
                        <IconButton >
                            <Globe />
                        </IconButton>
                    </ProjectCard.links>
                    }
                >
                    <ProjectCard.image src={voteNow.src} />
                </ProjectCard.root>

                <ProjectCard.root 
                    className="col-span-2" 
                    title="Framer Motion" 
                    description="lorem ipos odsiad  aodsio ewijk jhiuoisdak idjsaokldakd"
                    buttons={
                    <ProjectCard.links>
                        <IconButton >
                            <Github />
                        </IconButton>
                        <IconButton >
                            <Globe />
                        </IconButton>
                    </ProjectCard.links>
                    }
                >
                    <ProjectCard.image src={motionProject.src} />
                </ProjectCard.root>

                <ProjectCard.root 
                    className="col-span-3" 
                    title="Boom Sneakers" 
                    description="Uma loja online de replicas de calçados do tipo sneakers por um preço justo e acessivel"
                    buttons={
                    <ProjectCard.links>
                        <IconButton >
                            <Github />
                        </IconButton>
                        <IconButton >
                            <Globe />
                        </IconButton>
                    </ProjectCard.links>
                    }
                >
                    <ProjectCard.image src={BoomSneakers.src} />
                </ProjectCard.root>
            </section>
        </motion.section>
    )
}