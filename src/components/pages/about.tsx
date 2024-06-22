import Page from "@/components/sectionCreator"
import MessageRows from "@/components/message"
import SomeOne from "@/static/port.png"
import Musk from "@/static/musk.webp"
import Me from "@/static/henrique_gatinhopng.png"

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

        <section className="w-full grid grid-cols-1 lg:grid-cols-3 p-2 gap-5">
          
          <MessageRows.root>
            <MessageRows.title>Meus Hobbies</MessageRows.title>
            <MessageRows.Message sender="Elon Musk" content="De fato, você tem muita habilidade na programação. Mas quem é Henrique Barbosa Sampaio fora do trabalho? O que você faz no seu tempo livre?" />
            <MessageRows.Message sender="you"       content="Fala Elon!, No meu tempo livre eu curto relaxar, jogar alguns jogos no console e assistir algumas series" />
            <MessageRows.Message sender="Elon Musk" content="Interessante, eu estou com um bom tempo livre agora. Que serie que você assite?" />
            <MessageRows.Message sender="you"       content="Ultimamente eu estou assistindo muito Jojo Bizarre Adventures" />
            <MessageRows.Message sender="you" hasSendedBefore content="E estou jogando Valorant ultimamente, Bora jogar junto?" />
            <MessageRows.Message sender="you" hasSendedBefore content="Mas o meu maior hobbie mesmo é a programação, To sempre pensando em novas ideias de site e aplicativos" />
            <MessageRows.Message sender="Elon Musk" content="Bom saber que você realmente é apaixonado pela programação"/>
            <MessageRows.Message sender="Elon Musk" hasSendedBefore content="E Bora jogar Juntos sim!"/>
           </MessageRows.root>

          <MessageRows.root>
            <MessageRows.title>Minhas Tecnologias</MessageRows.title>
            <MessageRows.Message sender="Ryan Dahl" content="Olá, Henrique! Quais tecnologias você mais utiliza no seu trabalho como desenvolvedor?" />
            <MessageRows.Message sender="you" content="Oi, Ryan! Eu uso bastante TypeScript, Node.js, React e MongoDB." />
            <MessageRows.Message sender="Ryan Dahl" content="Ótima escolha com Node.js! O que você mais gosta em trabalhar com essas tecnologias?" />
            <MessageRows.Message sender="you" content="Adoro a eficiência do Node.js para backend, e React facilita muito o desenvolvimento frontend dinâmico. MongoDB é perfeito para projetos que precisam de flexibilidade no banco de dados." />
            <MessageRows.Message sender="Ryan Dahl" content="Concordo totalmente! E você tem algum projeto favorito que usou essas tecnologias?" />
            <MessageRows.Message sender="you" content="Sim, desenvolvi uma aplicação de gerenciamento de tarefas usando essa stack. Foi um desafio interessante e aprendi muito." />
            <MessageRows.Message sender="Ryan Dahl" content="Parece incrível! Obrigado por compartilhar, Henrique." />
            <MessageRows.Message sender="you" content="Eu que agradeço, Ryan!" />
          </MessageRows.root>

          <MessageRows.root>
            <MessageRows.title>Minha Educação</MessageRows.title>
            <MessageRows.Message sender="Barack Obama" content="Olá, Henrique! Gostaria de saber mais sobre a sua educação. Onde você estudou?" />
            <MessageRows.Message sender="you" content="Oi, Presidente Obama! Eu cursei o ensino médio integrado ao ensino técnico de Desenvolvimento de Sistemas na ETEC Uirapuru." />
            <MessageRows.Message sender="Barack Obama" content="Isso é impressionante! E você fez algum curso adicional?" />
            <MessageRows.Message sender="you" content="Sim, concluí cursos de React, Node.js e NestJS na Udemy. Também participei do NLW da Rocketseat." />
            <MessageRows.Message sender="Barack Obama" content="Excelente! Como esses cursos adicionais ajudaram na sua formação?" />
            <MessageRows.Message sender="you" content="Eles aprofundaram meu conhecimento prático e me mantiveram atualizado com as tecnologias mais recentes no desenvolvimento web." />
            <MessageRows.Message sender="Barack Obama" content="Muito bom, Henrique. É ótimo ver você investindo na sua educação."/>
            <MessageRows.Message sender="you" content="Obrigado, Presidente Obama! Fico feliz em compartilhar isso com você." />
          </MessageRows.root>

        </section>
      </Page.root>
    )
}