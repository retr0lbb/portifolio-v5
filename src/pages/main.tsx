import HeroSection from "@/components/heroCard"



export const MainSection: React.FC = () => {
    return(
        <HeroSection.root className="w-full py-32">
            <HeroSection.text className="text-5xl">Henrique Barbosa</HeroSection.text>
            <HeroSection.text className="text-9xl ">Fullstack Developer</HeroSection.text>
            <HeroSection.buttons />
          </HeroSection.root>
    )
}