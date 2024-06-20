import Page from "@/components/sectionCreator"
import MessageRows from "@/components/message"
import Image from "next/image"
import Memez from "@/static/Memez.png"

export const AboutPage: React.FC = () => {
    return(
      <Page.root 
        id="about" 
        className="flex flex-col gap-8 p-10"
        initial={{
          opacity: 0,
          x: 20
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        viewport={{
          once: true,
          margin: "-200px"
        }}
      >

        <Page.title>Me conheça um pouco melhor:</Page.title>

        <section className="w-full grid grid-cols-3 p-2 gap-5">

          <MessageRows.root>
            <MessageRows.Message content="Sempre quis saber o que você faz no tempo livre posso saber?" sender="Mario Antonio" />
            <MessageRows.Message content="Claro eu sempre goste de assistir animes, filmes e series e quando eu tenho mais tempo livre eu gosto de jogar video game" sender="you" />
            <MessageRows.Message hasSendedBefore sender="you" content={<Image alt="none" src={Memez} />} />
          </MessageRows.root>

          <MessageRows.root>
            <MessageRows.Message sender="Rogerio lins" content="Quais são as tecnologias que você mais ultiliza no seu dia a dia como desenvolvedor" />
            <MessageRows.Message sender="you" content="Como desenvolvedor full stack eu ultilizo muitas tecnologias diferentes todos os dias, des de algumas como docker, prisma orm entre outros" />
            <MessageRows.Message sender="you" hasSendedBefore content="Mas as principais tecnologias que eu ultilizo é a linguagem de programação TypeScript, geralmente acompanhado do React como biblioteca front-end e Nodejs" />
            <MessageRows.Message sender="you" hasSendedBefore content="Quer um site vc também? 😁" />
            <MessageRows.Message sender="Rogerio lins" content="Bora!!!!" />
          </MessageRows.root>

          <MessageRows.root>
            <MessageRows.Message sender="Cleyde Giglan" content="Eu quero ser uma programadora onde que você aprendeu tanto sobre programação? 🤔" />
            <MessageRows.Message sender="you" content="Eu aprendi programação ao longo da vida" />
            <MessageRows.Message sender="you" hasSendedBefore content="Mas principalmente com o Ensino Tecnico de Desenvolvimento de Sistemas da Etec Uirapuru" />
            <MessageRows.Message sender="you" hasSendedBefore content="E com incontaveis cursos da Udemy como Curso de NestJs, ReactJs, NodeJs" />
            <MessageRows.Message sender="you" hasSendedBefore content="Clique aqui para ver todos os meus certificados" />
            <MessageRows.Message sender="you" hasSendedBefore content={<button>Certificados</button>} />
          </MessageRows.root>

        </section>
      </Page.root>
    )
}