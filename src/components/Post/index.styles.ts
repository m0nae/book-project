import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 18rem;
  height: fit-content;
  width: 80%;
  border-radius: 6px;
  border: 3px solid whitesmoke;
  padding: 1rem 1.7rem 5rem 3rem;
  text-align: left;
  /* background-color: grey; */
`;

export const Avatar = styled.img`
  position: absolute;
  top: -1rem;
  left: -1.5rem;
  height: 60px;
  width: 60px;
  border-radius: 50%;
`;

export const Status = styled.div`
  width: 100%;
  min-height: 4rem;
  height: fit-content;
  border-bottom: 2px solid whitesmoke;

  span {
    font-weight: 700;
    font-size: 1rem;
    color: darkgrey;
  }
`;

export const StatusTop = styled.div`
  display: flex;
`;

export const StatusBottom = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  font-size: 0.8rem;
  font-weight: 700;
`;

export const ProgressBar = styled.progress`
  width: 40%;
  height: 1.5rem;
  margin-right: 0.7rem;
  color: darkgrey;
`;

export const Content = styled.div`
  margin-top: 1rem;
  display: flex;

  > div {
    p {
      margin-top: 0.4rem;
    }
  }

  img {
    width: 150px;
    height: 200px;
    margin-right: 1rem;
  }
`;

export const Comment = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background-color: darkgrey;
  border: 1px solid darkgrey;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
`;
