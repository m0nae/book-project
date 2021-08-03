import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    --small-text-size: 0.7rem;
--small-text-spacing: 2px;
--small-text-color: grey;
--small-text-weight: 600;
--small-text-transform: uppercase;
--dark-red: #cc4646;
  }
`;

export const Avatar = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
`;
