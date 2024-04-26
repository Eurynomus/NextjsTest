import styled from "styled-components";

export const StyledSectionContainer = styled(({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: ${({ topMargin }) => topMargin}px;
  margin-bottom: ${({ bottomMargin }) => bottomMargin}px;
`;
