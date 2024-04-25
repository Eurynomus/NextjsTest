import Image from "next/dist/client/image";

import {
    CardsHeading,
    CardsDescription,
    CardsContentWrapper,
    CardsImageContainer,
    CardsWrapper,
} from "./card.elements";

export const Card = ({ containerWidth, title, description, image, color }) => {
    return (
        <CardsWrapper width={containerWidth} color={color}>

            <CardsImageContainer>
                <Image src={image.src} alt="" width={image.width} height={image.height} />
            </CardsImageContainer>

            <CardsContentWrapper>
                <CardsHeading>{title}</CardsHeading>
                <CardsDescription>{description}</CardsDescription>
            </CardsContentWrapper>

        </CardsWrapper>
    )

}