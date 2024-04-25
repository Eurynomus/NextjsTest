import Image from "next/image";
import { Card } from "../../collections";

import {
    TextContainer,
    Container,
    Title,
    Description,
    ImageContainer,
    CardsContainer,
    ImageCardsWrapper
} from "./main.elements";

export const Main = ({ image, title, description, agencys, ...props }) => {
    return (
        <Container {...props}>

            <TextContainer>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </TextContainer>

            <ImageCardsWrapper>

                <ImageContainer>
                    <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
                </ImageContainer>

                <CardsContainer {...props}>
                    {agencys.map((i) =>
                        <Card
                            image={i.image}
                            title={i.title}
                            description={i.description}
                            width={i.width}
                            color={i.color}
                        />
                    )}
                </CardsContainer>

            </ImageCardsWrapper>

        </Container>
    );
};
