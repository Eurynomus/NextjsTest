import styled from "styled-components";
import { SectionHeading, SectionParagraph } from "~/components";


export const CardsHeading = styled(({ ...props }) => <SectionHeading {...props} />)`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;

export const CardsDescription = styled(({ ...props }) => <SectionParagraph {...props} />)`
    margin: 0;
`;

export const CardsWrapper = styled(({ width, color, ...props }) => <div {...props} />)`
    display: flex;
    align-items: center;
    padding: 15px 25px;
    margin: 0;
    transition: all .3s ease;
    border-radius: 8px;
    border: 2px solid transparent;
    background: ${({ color }) => color};
    width: ${({ width }) => width}px;

    &:hover ${CardsHeading} {
        text-decoration: underline;
        color: #357ddb;
    }

    &:hover {
        border: 2px solid #357ddb;
    }

    @media (max-width: 1024px) {
        padding: 15px 25px 15px 15px;
    }
`;

export const CardsImageContainer = styled(({ ...props }) => <div {...props} />)`
    margin: 0 35px 0 10px;

    @media (max-width: 1024px) {
        margin: 0 25px 0 15px;
    }
`;

export const CardsContentWrapper = styled(({ ...props }) => <div {...props} />)`
    @media (max-width: 1024px) {
        width: 100%;
    }
`;

export const Cards = styled(({ ...props }) => <div {...props} />)`
    margin: 20px 0;

    @media (max-width: 1024px) {
        margin: 20px 30px;
    }
`;