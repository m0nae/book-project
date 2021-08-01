import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  margin-top: 1rem;
  width: 21%;
  height: 98%;
  background-color: lightgrey;
  text-align: left;
`;

export const CurrentlyReading = styled.div`
  padding: 0 1rem;

  h2 {
    text-align: left;
    font-weight: 700;
    font-size: 1.3rem;
  }

  > div {
    margin-top: 1rem;
  }
`;

export const BookList = styled.div``;
export const Book = styled.div`
  display: flex;
  height: 9rem;

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
