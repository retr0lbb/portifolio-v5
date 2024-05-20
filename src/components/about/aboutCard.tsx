import { Card, Image } from "@nextui-org/react";
import placeHolder from "@/static/placeholder.jpeg"


export const AboutCard: React.FC = () => {
    return(
        <Card
            radius="lg"
            className="border-none"
        >
            <Image 
              alt="beautiful man looking down"
              src={placeHolder.src}
            />
        </Card>
    )
}