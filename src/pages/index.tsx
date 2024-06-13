import HeroHeader from "@/components/Header"
import { ProjectPage } from "../components/pages/project"
import { MainSection } from "../components/pages/main"
import { AboutPage } from "../components/pages/about"
import { Footer } from "@/components/footer/footer"
import { Contact } from "../components/pages/contact"
import { ThemeSwap } from "@/components/themeSwap"
import LanguageButton from "@/components/languageButton"
import { GetServerSideProps } from "next"
import { Octokit } from "octokit"

const loadData = async() => {
  const token = process.env.GITHUB_API_KEY

  const octokit = new Octokit({
      auth: token
  })

  let repo: any[] = []

  const result = await octokit.request("GET /users/{username}/repos", {
      username: "retr0lbb",
      sort: "updated",
      per_page: 3,
  })

  if(result.data.length > 0){
      repo = result.data
  }

  return repo
}
export const getStaticProps: GetServerSideProps<any> = async () => {
  const repo = await loadData();

  console.log(repo)

  return {
      props: {repo}
  }
}

export default function Home({repo}: {repo: any[]}) {
  console.log(repo)
  return (
    <main id="home" 
      className="scroll-smooth max-w-screen min-h-screen pb-32 flex flex-col items-center 
      overflow-y-hidden overflow-hidden dark:bg-background-dark relative antialiased"
    >
      <HeroHeader.root className="justify-between">

        <HeroHeader.mobileCloseModal>
          <div>A</div>
          <div>B</div>
        </HeroHeader.mobileCloseModal>
        
        {/* <nav className="text-white/60">
          <ul className="flex items-center justify-evenly gap-4 text-xl">
            <HeroHeader.link to="#home" Icon={LucideHome}>Home</HeroHeader.link>
            <HeroHeader.link to="#projects" Icon={Folder}>Projects</HeroHeader.link>
            <HeroHeader.link to="#about" Icon={User2}>Sobre mim</HeroHeader.link>
            <HeroHeader.link to="#contact" Icon={Phone}>Contato</HeroHeader.link>
          </ul>
        </nav> */}

          <div className="flex items-center justify-center gap-5">
            <LanguageButton />
            <ThemeSwap />
          </div>
        </HeroHeader.root>



          <MainSection />
          <ProjectPage id="projects"/> 
          <AboutPage id="about"/>
          <Contact id="contact" repo={repo} />


        <Footer />
      </main>
    );
  }
