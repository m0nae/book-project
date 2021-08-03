import styled from "styled-components";

export const Wrapper = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  /* background-color: grey; */
  height: 100vh;
  /* width: 100vw; */
  /* margin: 0 auto; */
  /* max-width: 1100px; */
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  /* max-height: */
  height: 90vh;
  position: fixed;
  top: 80px;
  left: 0;
  width: 25%;
  font-size: 1.3rem;
  font-weight: 600;
  background-color: #dbdbdb;
`;

export const Main = styled.div`
  height: 100%;
  margin-left: 25vw;
  width: auto;

  header {
    border-bottom: 1px solid whitesmoke;
  }
`;
