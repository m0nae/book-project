import styled from "styled-components";
import { Input as ChakraInput } from "@chakra-ui/react";

export const Main = styled.div`
  margin: 1rem auto;
  display: flex;
  width: 90%;
  max-width: 1024px;
  flex-direction: column;
  justify-content: center;

  > div {
    margin-top: 1rem;

    > * {
      margin-right: 1rem;
      margin-bottom: 2rem;
    }
  }

  img {
    height: 160px;
    width: auto;
  }
`;

export const Input = styled(ChakraInput)`
  font-family: "Lato", sans-serif;
  width: 60%;
`;
