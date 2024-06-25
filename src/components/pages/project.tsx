import ProjectCard from "@/components/projects"
import voteNow from "@/static/Home-white.png"
import portFoil from "@/static/port.png"
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
                x: -20
            }}
            whileInView={{
                opacity: 1,
                x: 0
            }}
            viewport={{
                once: true,
                margin: "-200px"
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
                        <IconButton Icon={Github} isDarkmodeMandatory href="https://github.com/retr0lbb/N.E.R.D" />
                        <IconButton Icon={Globe} isDarkmodeMandatory disabled />
                    </ProjectCard.links>
                    }
                >
                    <ProjectCard.image loading="lazy" placeholder="blur" alt="Computer in angled position showing an happy nerd emoji on center of a purple background" src={NERD} />
                </ProjectCard.root>

                <ProjectCard.root 
                    className="lg:col-span-3 lg:row-span-2" 
                    title="Vote Now" 
                    description="Uma aplicação de votação em enquetes simples e facil com integração com web sockets e redis database"
                    buttons={
                    <ProjectCard.links>
                        <IconButton Icon={Github} isDarkmodeMandatory href="https://github.com/retr0lbb/Vote-now" />
                        <IconButton Icon={Globe} isDarkmodeMandatory href="https://vote-now-flame.vercel.app"/>
                    </ProjectCard.links>
                    }
                >
                    <ProjectCard.image loading="lazy" placeholder="blur" alt="white rectangle on 16 x 9 ratio write Vote now on the middle of the rectangle" src={voteNow} />
                </ProjectCard.root>

                <ProjectCard.root 
                    className="lg:col-span-2" 
                    title="Portifolio v5" 
                    description="Projeto de portifolio que ultilza o next js para criar uma pagina eficiente que otimiza o SEO da pagina"
                    buttons={
                    <ProjectCard.links>
                        <IconButton isDarkmodeMandatory Icon={Github} href="https://github.com/retr0lbb/portifolio-v5"/>
                        <IconButton isDarkmodeMandatory Icon={Globe} href="https://portifolio-v5.vercel.app"/>
                    </ProjectCard.links>
                    }
                >
                    <ProjectCard.image loading="lazy" placeholder="blur" alt="just a placeholder image to an un existing project" src={portFoil} />
                </ProjectCard.root>

                <ProjectCard.root 
                    className="lg:col-span-3" 
                    title="Boom Sneakers" 
                    description="Uma loja online de replicas de calçados do tipo sneakers por um preço justo e acessivel"
                    buttons={
                    <ProjectCard.links>
                        <IconButton isDarkmodeMandatory Icon={Github} disabled />
                        <IconButton isDarkmodeMandatory href="https://boomsneakers.com" Icon={Globe} />
                    </ProjectCard.links>
                    }
                >
                    <ProjectCard.image loading="lazy" placeholder="blur" alt="colorfull orange backgound with a shoees on the center and a logo named boomsneakers" src={BoomSneakers} />
                </ProjectCard.root>
            </section>
        </Page.root>
    )
}