import ProjectCard from "@/components/projects"
import voteNow from "@/static/Home-white.png"
import motionProject from "@/static/70574400-9e6a-11e9-8708-22d4bf4c3322.png"
import NERD from "@/static/6e81f610234.png"
import BoomSneakers from "@/static/Ned.jpeg"
import React from "react"
import { IconButton } from "@/components/iconButton"
import { Github, Globe } from "lucide-react"
import Page from "@/components/sectionCreator"

interface ProjectPageProps{
    id: string
}

export const ProjectPage: React.FC<ProjectPageProps> = ({id}) => {
    return(
        <Page.root
            initial={{
                opacity: 0,
                x: -500
            }}
            whileInView={{
                opacity: 1,
                x: 0
            }}
            viewport={{
                margin: "-300px",
                once: true
            }}
            className="gap-8" id={id}>

            <Page.title>Veja a minha expêriencia:</Page.title>

            <section
                className="w-full grid grid-cols-1 lg:grid-cols-5 place-items-center gap-8 lg:gap-3 overflow-y-hidden"
            >
                <ProjectCard.root 
                    className="lg:col-span-2" 
                    title="N.E.R.D" 
                    description="Uma loja online de jogos digitais focada na distribuição de jogos nacionais"
                    buttons={
                    <ProjectCard.links>
                        <IconButton isDarkmodeMandatory href="https://github.com/retr0lbb/N.E.R.D">
                            <Github />
                        </IconButton>
                        <IconButton isDarkmodeMandatory>
                            <Globe />
                        </IconButton>
                    </ProjectCard.links>
                    }
                >
                    <ProjectCard.image loading="lazy" placeholder="blur" fill alt="image" src={NERD} />
                </ProjectCard.root>

                <ProjectCard.root 
                    className="lg:col-span-3 lg:row-span-2" 
                    title="Vote Now" 
                    description="Uma aplicação de votação em enquetes simples e facil com integração com web sockets e redis database"
                    buttons={
                    <ProjectCard.links>
                        <IconButton isDarkmodeMandatory href="https://github.com/retr0lbb/Vote-now">
                            <Github />
                        </IconButton>
                        <IconButton isDarkmodeMandatory href="https://vote-now-flame.vercel.app">
                            <Globe />
                        </IconButton>
                    </ProjectCard.links>
                    }
                >
                    <ProjectCard.image loading="lazy" placeholder="blur" fill alt="white rectangle on 16 x 9 ratio write Vote now on the middle of the rectangle" src={voteNow} />
                </ProjectCard.root>

                <ProjectCard.root 
                    className="lg:col-span-2" 
                    title="Framer Motion" 
                    description="lorem ipos odsiad  aodsio ewijk jhiuoisdak idjsaokldakd"
                    buttons={
                    <ProjectCard.links>
                        <IconButton isDarkmodeMandatory >
                            <Github />
                        </IconButton>
                        <IconButton isDarkmodeMandatory >
                            <Globe />
                        </IconButton>
                    </ProjectCard.links>
                    }
                >
                    <ProjectCard.image loading="lazy" placeholder="blur" fill alt="placeHolder" src={motionProject} />
                </ProjectCard.root>

                <ProjectCard.root 
                    className="lg:col-span-3" 
                    title="Boom Sneakers" 
                    description="Uma loja online de replicas de calçados do tipo sneakers por um preço justo e acessivel"
                    buttons={
                    <ProjectCard.links>
                        <IconButton isDarkmodeMandatory>
                            <Github />
                        </IconButton>
                        <IconButton isDarkmodeMandatory href="https://boomsneakers.com">
                            <Globe />
                        </IconButton>
                    </ProjectCard.links>
                    }
                >
                    <ProjectCard.image loading="lazy" placeholder="blur" fill alt="image" src={BoomSneakers} />
                </ProjectCard.root>
            </section>
        </Page.root>
    )
}