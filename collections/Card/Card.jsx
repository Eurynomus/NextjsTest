import Image from "next/dist/client/image";

import {
    CardsHeading,
    CardsDescription,
    CardsContentWrapper,
    CardsImageContainer,
    CardsWrapper,
    Cards
} from "./card.elements";

export const Card = ({ width, title, description, image, color }) => {
    return (
        <Cards>
            <CardsWrapper width={width} color={color}>

                <CardsImageContainer>
                    <Image src={image.src} alt="" width={image.width} height={image.height} />
                </CardsImageContainer>

                <CardsContentWrapper>
                    <CardsHeading>{title}</CardsHeading>
                    <CardsDescription>{description}</CardsDescription>
                </CardsContentWrapper>

            </CardsWrapper>
        </Cards>
    )

}