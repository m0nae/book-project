import styled from "styled-components";
import { Container as CContainer, IconButton } from "@chakra-ui/react";

export const Container = styled.div`
  position: relative;
  width: 70vw;
  max-width: 1024px;
  margin: 0 auto;
  max-height: 100vh;
  height: 89vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: tomato; */
`;

export const BackButton = styled(IconButton)`
  position: absolute;
  top: -1rem;
  left: 0rem;
  align-self: flex-start;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 70%;
  height: fit-content;
  padding-bottom: 1rem;
  padding-top: 3rem;
  max-width: 500px;
  /* background-color: grey; */

  h1 {
    font-size: 2rem;
    align-self: center;
  }
`;

export const SettingsContainer = styled.div`
  height: fit-content;
  padding: 1rem;
  justify-self: center;
  align-self: center;
  width: 80%;
  /* outline: 1px solid red; */
  margin-top: 1rem;
`;

// TODO: create a standard button inside of global.styles.ts!!!

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ButtonsLeft = styled.div``;
export const ButtonsRight = styled.div`
  display: flex;
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 1rem;
  background-color: #e3eaec;
  /* background-color: red; */
  /* color: white; */
  padding: 0.7rem 1rem;
  border-radius: 6px;
  text-transform: uppercase;
  transition: background-color 150ms ease-in-out;

  :hover {
    background-color: #c9cfd1;
    transition: background-color 150ms ease-in-out;
  }
`;

export const DeleteButton = styled(Button)`
  background-color: red;
  color: white;

  :hover {
    background-color: #bd0000;
  }
`;

export const SaveButton = styled(Button)`
  background-color: #5c8eda;
  color: white;
  padding: 0 1.7rem;

  :hover {
    background-color: #547db9;
  }
`;
