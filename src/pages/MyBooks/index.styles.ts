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
  justify-content: center;
  flex-direction: column;
  padding: 4rem 0.5rem;
  /* max-height: */
  height: 90vh;
  position: fixed;
  top: 80px;
  left: 0;
  width: 25%;
  font-size: 1.3rem;
  background-color: #dbdbdb;

  > * {
    cursor: pointer;
    margin-bottom: 1rem;
  }

  > label > input {
    visibility: hidden;
  }
`;

export const Main = styled.div`
  position: relative;
  height: 100%;
  margin-left: 25vw;
  width: auto;

  > h1 {
    font-size: 2rem;
    font-weight: 700;
    padding: 1rem 0 1rem 2rem;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 0 2rem;

    > img {
      margin-bottom: 1rem;
    }
  }
`;
