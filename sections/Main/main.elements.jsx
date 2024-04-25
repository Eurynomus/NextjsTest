import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const Container = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled((props) => <SectionBigHeading {...props} />)`
  color: black;
  width: 100%;
  margin: 50px 0 0 0;
`;

export const Description = styled((props) => <SectionSubheading {...props} />)`
  margin: 0;
`;

export const TextContainer = styled(({ ...props }) => <div {...props} />)`
  text-align: center;
  color: black;
  font-family: sans-serif;
`;

export const ImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 500px;
  max-height: 600px;
  width: 100%;
  height: 100%;
  margin-left: 0;
`;

export const CardsContainer = styled(({ ...props }) => <div {...props} />)`
  width: 50%;
`;

export const ImageCardsWrapper = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  width: 100%;
`;
