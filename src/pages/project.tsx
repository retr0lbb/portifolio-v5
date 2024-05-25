import ProjectCard from "@/components/projects"
import voteNow from "@/static/Home-black.png"
import motion from "@/static/70574400-9e6a-11e9-8708-22d4bf4c3322.png"

export const ProjectPage: React.FC = () => {
    return(
        <section className="w-full flex flex-col items-center justify-center p-10 gap-8">
            <p className="text-7xl font-bold font-mono w-full">Veja a minha experiencia:</p>
            <section className="w-full grid grid-cols-5 gap-3 overflow-y-hidden">
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
                    <ProjectCard.image src={motion.src} />
                </ProjectCard.root>
            </section>
        </section>
    )
}