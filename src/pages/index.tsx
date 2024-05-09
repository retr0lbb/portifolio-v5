import ProjectCard from "@/components/projects/index"
import voteNow from "@/static/Home-black.png"
import Motion from "@/static/70574400-9e6a-11e9-8708-22d4bf4c3322.png"
import HeroSection from "@/components/heroCard"
import HeroHeader from "@/components/Header/_index"

export default function Home() {
  return (
    <div className="max-w-screen min-h-screen flex flex-col items-center overflow-y-hidden justify-center bg-black relative">
      <HeroHeader.root>

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

        <ProjectCard.root className="col-span-3 row-span-2" 
          title="Vote Now" 
          description="Uma aplicação de votação em enquetes simples e facil com integração com web sockets e redis database"
        >

          <ProjectCard.image src={voteNow.src} />
        </ProjectCard.root>

        <ProjectCard.root className="col-span-2" title="Framer Motion" description="lorem ipos odsiad  aodsio ewijk jhiuoisdak idjsaokldakd ">
          <ProjectCard.image src={Motion.src} />
        </ProjectCard.root>


      </section>
    </div>
  );
}
