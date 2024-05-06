import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import Image from "next/image"
import { Meteors } from "@/components/ui/meteors"
import ProjectCard from "@/components/projects/index"

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      <section className="text-9xl text-white p-5 bg-red-600 font-bold font-mono w-full h-full">
        <p>Henrique Barbosa</p>
        <p>Full stack developer</p>
      </section>

      <section className="w-full p-5 grid grid-cols-5 gap-4 place-items-center">
        <ProjectCard.root className="col-span-2">
          <ProjectCard.image src="https://github.com/retr0lbb.png" />
        </ProjectCard.root>

        <ProjectCard.root className="col-span-3 row-span-2">
          <div className="size-40 bg-red-50"></div>
        </ProjectCard.root>

        <ProjectCard.root>
          <div className="size-40 bg-red-50"></div>
        </ProjectCard.root>

        <ProjectCard.root>
          <div className="size-40 bg-red-50"></div>
        </ProjectCard.root>

      </section>
    </div>
  );
}
