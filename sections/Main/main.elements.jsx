import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const Container = styled(({ height, ...props }) => <SectionContainer {...props} />)`
`;

export const Title = styled((props) => <SectionBigHeading {...props} />)`
  width: 100%;
  margin: 50px 0 0 0;

  @media (max-width: 1024px) {
    margin: 0;
  }
`;

export const Description = styled((props) => <SectionSubheading {...props} />)`
  margin: 0;
`;

export const TextContainer = styled(({ ...props }) => <div {...props} />)`
  text-align: center;
`;

export const ImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 320px;
  width: 100%;
  height: 100%;
  margin-right: 60px;

  @media (max-width: 1024px) {
    margin: 0 0 30px 0;
    max-width: 250px;
  }
`;

export const CardsContainer = styled(({ ...props }) => <div {...props} />)`
`;

export const ImageCardsWrapper = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 100%;
  
  background-image: url('/img/background.png');
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-top: 40px;
  }
`;
