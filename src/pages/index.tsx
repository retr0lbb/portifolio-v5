import {CardBody, CardContainer, CardItem} from "@/components/ui/3d-card"
import Image from "next/image"
import {Meteors} from "@/components/ui/meteors"
import { GridSmallBackgroundDemo } from "@/components/ui/gridBg";

export default function Home() {
  return (
    <main className="w-screen min-h-screen relative bg-black">
      <section className="w-full h-screen grid grid-cols-2 p-20 place-items-center">
        {/**Text div main */}
        
        <div className="font-mono">
          <h1 className="text-8xl text-zinc-300 selection:bg-gray-600/40">
            Henrique Barbosa Full stack web developer
          </h1>
          <div className="flex items-center justify-start gap-4 mt-4">
            {/**
             * 
             * try diferent buttons settings
             * 
             *<div>
                <label className="text-gray-300/35" htmlFor="contact-btn">Want a website? </label>
                <button id="contact-btn" className="px-2 py-1.5 bg-gray-50 rounded-md">Contact Me</button>
              </div>
              <div>
                <label className="text-gray-300/35" htmlFor="contact-btn">Want to see more? </label>
                <button id="contact-btn" className="px-2 py-1.5 bg-gray-50 rounded-md">My projects</button>
              </div>
             */}
          </div>
        </div>

        {/** photo div main 
         * 
         * 
         * <div>
          <CardContainer className="w-" containerClassName="">
            <CardBody className="grid place-items-center bg-white/10 rounded">
              <CardItem translateZ="50">
                <div className="bg-gradient-to-br from-green-500 to-blue-300 size-64 rounded-lg" />
              </CardItem>
              <CardItem translateZ={40} className="w-full">
                <div className="w-full flex items-center justify-evenly p-2">
                  <button className="bg-white/20 size-12 rounded-full text-zinc-300 hover:bg-white/70 hover:text-zinc-700">G</button>
                  <button className="bg-white/20 size-12 rounded-full text-zinc-300 hover:bg-white/70 hover:text-zinc-700">E</button>
                  <button className="bg-white/20 size-12 rounded-full text-zinc-300 hover:bg-white/70 hover:text-zinc-700">L</button>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
        */}
        <GridSmallBackgroundDemo />
      </section>
    </main>
  );
}
