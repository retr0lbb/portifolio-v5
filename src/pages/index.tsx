import ProjectCard from "@/components/projects/index"

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      <section className="w-full grid grid-cols-5 gap-4 bg-red-700 p-4">

          <section className="text-9xl text-white p-5 row-span-3 font-bold font-mono bg-green-50 col-span-3 overflow-hidden">
            <p>Henrique Barbosa</p>
            <p>Full stack developer</p>
          </section>

          <div className="col-span-2 row-span-3 bg-blue-500">

          </div>

          <div className="col-span-5 bg-black px-4 py-6 text-5xl text-white font-mono font-bold">
            Projetos:
          </div>

        <ProjectCard.root className="col-span-2">
          <ProjectCard.image src="https://github.com/retr0lbb.png" />
        </ProjectCard.root>


      </section>
    </div>
  );
}
