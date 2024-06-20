import Page from "@/components/sectionCreator"
import MessageRows from "@/components/message"

interface AboutProps{
  id: string
}

export const AboutPage: React.FC<AboutProps> = ({id}) => {
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

        <section className="w-full grid grid-cols-3 p-2">
          {/** Componente de comentarios */}

          <MessageRows.root>
            <MessageRows.Message content="Sempre quis saber o que você faz no tempo livre posso saber?" sender="Mario Antonio" />
            <MessageRows.Message content="Claro eu sempre goste de assistir animes, filmes e series e quando eu tenho mais tempo livre eu gosto de jogar video game" sender="you" />
          </MessageRows.root>

        </section>
      </Page.root>
    )
}