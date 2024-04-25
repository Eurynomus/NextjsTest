import styled from "styled-components";
import { SectionHeading, SectionParagraph } from "~/components";


export const CardsHeading = styled(({...props}) => <SectionHeading {...props} />)`
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`;

export const CardsDescription = styled(({ ...props }) => <SectionParagraph {...props} />)`
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
`;

export const CardsWrapper = styled(({ width, color, ...props }) => <div {...props} />)`
    display: flex;
    align-items: center;
    padding: 15px 25px;
    margin: 0 20px;
    transition: all .3s ease;
    border-radius: 8px;
    border: 2px solid transparent;
    background: ${({color}) => color};
    width: ${({width}) => width}px;

    &:hover ${CardsHeading} {
        text-decoration: underline;
        color: #357ddb;
    }

    &:hover {
        border: 2px solid #357ddb;
    }
`;

export const CardsImageContainer = styled(({ ...props }) => <div {...props} />)`
    margin: 0 35px;
`;

export const CardsContentWrapper = styled(({ ...props }) => <div {...props} />)`
`;

export const Cards = styled(({ ...props }) => <div {...props} />)`
    margin: 20px 0;
`;