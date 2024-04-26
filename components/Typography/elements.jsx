/* eslint-disable react/display-name */
import { forwardRef } from "react";
import styled from "styled-components";

export const StyledSectionBigHeading = styled(forwardRef((props, ref) => <h1 {...props} ref={ref} />))`
  font-family: Poppins;
  font-size: 48px;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 1024px) {
    font-size: 25px;
    font-weight: 700;
  }
`;

export const StyledSectionHeading = styled(forwardRef((props, ref) => <h2 {...props} ref={ref} />))`
  font-family: Poppins;
  font-size: 40px;
  font-weight: 600;
  line-height: normal;
`;

export const StyledSectionSubheading = styled(forwardRef((props, ref) => <h3 {...props} ref={ref} />))`
  font-family: Poppins;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;

export const StyledSectionInnerHeading = styled(forwardRef((props, ref) => <h4 {...props} ref={ref} />))`
  font-family: Poppins;
  font-size: 1rem;
  line-height: normal;
  font-weight: 300;
`;

export const StyledSectionTinyHeading = styled(forwardRef((props, ref) => <h5 {...props} ref={ref} />))`
  font-family: Poppins;
  font-size: 0.75rem;
  line-height: 1.125rem;
  font-weight: 300;
`;

export const StyledSectionParagraph = styled((props) => <p {...props} />)`
  font-family: Poppins;
  font-size: 13px;
  line-height: normal;
  font-weight: 500;
`;
