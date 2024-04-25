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
`;

export const CardsWrapper = styled(({ width, color, ...props }) => <div {...props} />)`
    display: flex;
    align-items: center;
    padding: 15px 0;
    margin: 0;
    transition: all .3s ease;
    border-radius: 8px;
    border: 2px solid transparent;
    background: ${({color}) => color};
    width: ${({width}) => width}%;

    &:hover ${CardsHeading} {
        text-decoration: underline;
        color: #357ddb;
    }

    &:hover {
        border: 2px solid #357ddb;
    }
`;

export const CardsImageContainer = styled(({ ...props }) => <div {...props} />)`
    width: 25%;
`;

export const CardsContentWrapper = styled(({ ...props }) => <div {...props} />)`
    width: 70%;
`;