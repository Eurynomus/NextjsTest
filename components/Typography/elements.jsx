/* eslint-disable react/display-name */
import { forwardRef } from "react";
import styled from "styled-components";

export const StyledSectionBigHeading = styled(forwardRef((props, ref) => <h1 {...props} ref={ref} />))`
  font-family: Poppins;
  font-weight: 600;
  font-size: 48px;
  line-height: normal;

  @media (max-width: 1024px) {
    font-size: 25px;
  }
`;

export const StyledSectionHeading = styled(forwardRef((props, ref) => <h2 {...props} ref={ref} />))`
  font-family: Poppins;
  font-size: 40px;
  line-height: normal;
  font-weight: 600;
`;

export const StyledSectionSubheading = styled(forwardRef((props, ref) => <h3 {...props} ref={ref} />))`
  font-family: Poppins;
  font-size: 20px;
  line-height: normal;
  font-weight: 400;

  @media (max-width: 1024px) {
    font-size: 15px;
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
  font-size: 14px;
  line-height: normal;
  font-weight: 500;
`;
