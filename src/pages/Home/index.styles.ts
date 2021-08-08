import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  width: 70%;
  max-width: 1024px;
  height: 100vh;
  min-height: 100vh;
  margin: 0 auto;
  /* background-color: grey; */
`;

export const Feed = styled.div`
  /* display: flex; */
  justify-content: center;
  height: fit-content;
  width: 70%;
  padding-top: 3rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;

  > div {
    margin-bottom: 2rem;
  }
  /* background-color: lightblue; */
`;

export const SidebarContain = styled.div`
  height: fit-content;
  min-height: 100vh;
  width: 30%;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  overflow-y: auto;
  /* background-color: lightsalmon; */
`;
