import Header from "@/components/Header/_index"
import {CardBody, CardContainer, CardItem} from "@/components/ui/3d-card"
import Image from "next/image"

export default function Home() {
  return (
    <main className="w-screen min-h-screen bg-black">
      <Header.root>

      </Header.root>

      <section className="w-full grid grid-cols-2 p-20 place-items-center mt-20">
        {/**Text div main */}
        
        <div className="font-mono">
          <h1 className="text-8xl text-white/10 selection:bg-gray-600/40">
            Henrique Barbosa Full stack web developer
          </h1>
          <div className="flex items-center justify-start gap-4 mt-4">
            <div>
              <label className="text-gray-300/35" htmlFor="contact-btn">Want a website? </label>
              <button id="contact-btn" className="px-2 py-1.5 bg-gray-50 rounded-md">Contact Me</button>
            </div>
            <div>
              <label className="text-gray-300/35" htmlFor="contact-btn">Want to see more? </label>
              <button id="contact-btn" className="px-2 py-1.5 bg-gray-50 rounded-md">My projects</button>
            </div>
          </div>
        </div>

        {/** photo div main */}
        <div>
          <CardContainer>
            <CardBody>
              <CardItem translateZ="100">
                <Image 
                  src="https://github.com/retr0lbb.png"
                  alt="Avatar from retr0lbb github"
                  width="1000"
                  height="1000"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </section>
    </main>
  );
}
