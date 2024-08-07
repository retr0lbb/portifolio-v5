import ProjectCard from "@/components/projects"
import voteNow from "@/static/Home-white.png"
import portFoil from "@/static/port.png"
import NERD from "@/static/6e81f610234.png"
import BoomSneakers from "@/static/Ned.jpeg"
import React from "react"
import { IconButton } from "@/components/iconButton"
import { Github, Globe } from "lucide-react"
import Page from "@/components/sectionCreator"
import { useTranslations } from "next-intl"

interface ProjectPageProps{
    id: string
}

export const ProjectPage: React.FC<ProjectPageProps> = ({id}) => {
    const t = useTranslations("Project")
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

            <Page.title>{t("Title")}</Page.title>
            <section
                className="w-full grid grid-cols-1 lg:grid-cols-5 place-items-center gap-8 lg:gap-3 overflow-y-hidden"
            >
                <ProjectCard.root 
                    className="lg:col-span-2" 
                    title="N.E.R.D" 
                    description={t("Nerd.desc")}
                    buttons={
                    <ProjectCard.links>
                        <IconButton isLightModeAllowed="no" Icon={Github} href="https://github.com/retr0lbb/N.E.R.D" />
                        <IconButton isLightModeAllowed="no" Icon={Globe} disabled />
                    </ProjectCard.links>
                    }
                >
                    <ProjectCard.image loading="lazy" placeholder="blur" alt="Computer in angled position showing an happy nerd emoji on center of a purple background" src={NERD} />
                </ProjectCard.root>

                <ProjectCard.root 
                    className="lg:col-span-3 lg:row-span-2" 
                    title="Vote Now" 
                    description={t("Vote.desc")}
                    buttons={
                    <ProjectCard.links>
                        <IconButton isLightModeAllowed="no" Icon={Github} href="https://github.com/retr0lbb/Vote-now" />
                        <IconButton isLightModeAllowed="no" Icon={Globe} href="https://vote-now-flame.vercel.app"/>
                    </ProjectCard.links>
                    }
                >
                    <ProjectCard.image loading="lazy" placeholder="blur" alt="white rectangle on 16 x 9 ratio write Vote now on the middle of the rectangle" src={voteNow} />
                </ProjectCard.root>

                <ProjectCard.root 
                    className="lg:col-span-2" 
                    title="Portifolio v5" 
                    description={t("Port.desc")}
                    buttons={
                    <ProjectCard.links>
                        <IconButton isLightModeAllowed="no" Icon={Github} href="https://github.com/retr0lbb/portifolio-v5"/>
                        <IconButton isLightModeAllowed="no" Icon={Globe} href="https://portifolio-v5.vercel.app"/>
                    </ProjectCard.links>
                    }
                >
                    <ProjectCard.image loading="lazy" placeholder="blur" alt="just a placeholder image to an un existing project" src={portFoil} />
                </ProjectCard.root>

                <ProjectCard.root 
                    className="lg:col-span-3" 
                    title="Boom Sneakers" 
                    description={t("Boom.desc")}
                    buttons={
                    <ProjectCard.links>
                        <IconButton isLightModeAllowed="no" Icon={Github} disabled />
                        <IconButton isLightModeAllowed="no" href="https://boomsneakers.com" Icon={Globe} />
                    </ProjectCard.links>
                    }
                >
                    <ProjectCard.image loading="lazy" placeholder="blur" alt="colorfull orange backgound with a shoees on the center and a logo named boomsneakers" src={BoomSneakers} />
                </ProjectCard.root>
            </section>
        </Page.root>
    )
}