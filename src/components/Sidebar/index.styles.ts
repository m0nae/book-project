import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  margin-top: 1rem;
  margin-bottom: 6rem;
  width: 21%;
  min-height: 100vh;
  height: fit-content;
  min-height: 98%;
  overflow-y: scroll;
  background-color: lightgrey;
  text-align: left;
`;

export const CurrentlyReading = styled.div`
  /* padding: 0 1rem; */
  border-bottom: 1.5px solid grey;

  h2 {
    text-align: left;
    font-weight: 700;
    font-size: 1.3rem;
  }

  > div {
    margin-top: 0.5rem;
  }
`;

export const BookList = styled.div``;
export const Book = styled.div`
  display: flex;
  height: 9rem;
  font-size: 0.9rem;

  h3 {
    font-size: 1rem;
  }

  img {
    height: 130px;
    width: 90px;
  }

  button {
    font-size: 1rem;
  }

  div {
    /* display: flex; */
    padding-left: 0.5rem;
  }
`;
// export const BookCover = styled.img
