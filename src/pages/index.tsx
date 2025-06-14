import HeroHeader from "@/components/Header"
import { ProjectPage } from "../components/pages/project"
import { MainSection } from "../components/pages/main"
import { AboutPage } from "../components/pages/about"
import { Footer } from "@/components/footer/footer"
import { Contact } from "../components/pages/contact"
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

export const getStaticProps: GetServerSideProps<any> = async (context) => {
  const repo = await loadData();

  const messages = (await import(`../../messages/${context.locale}.json`)).default
  return {
      props: {
        repo,
        messages
      }
  }
}


export default function Home({repo}: {repo: any[]}) {
  return (
    <main id="home" 
      className="scroll-smooth max-w-screen min-h-screen pb-32 flex flex-col items-center 
      overflow-y-hidden overflow-hidden dark:bg-zinc-950 relative antialiased"
    >
      <HeroHeader.Build />

          <MainSection />
          <ProjectPage id="projects"/> 
          <AboutPage />
          <Contact id="contact" repo={repo} />
          
        <Footer />
      </main>
    );
  }
