import { Avatar } from "global-styles";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  /* background-color: grey; */
  height: 100vh;
  width: 88vw;
  margin: 0 auto;
  max-width: 1100px;
`;

export const Sidebar = styled.div`
  display: flex;
  padding: 2rem 0;
  flex-direction: column;
  /* align-items: center; */
  height: 100%;
  width: 30%;
  /* background-color: lightblue; */
`;

export const BookList = styled.div`
  height: 100%;
  width: 70%;
  /* background-color: tomato; */
`;

export const ProfileAvatar = styled(Avatar)`
  width: 100%;
  min-height: 200px;
  height: auto;
  border-radius: 4%;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;

  img {
    align-self: center;
  }

  h1 {
    font-weight: 700;
    margin: 0.6rem 0;
    font-size: 1.5rem;
  }

  p {
    font-size: 0.9rem;
    color: #3d3d3d;
  }
`;

export const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;

  > * {
    margin-right: 0.5rem;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;

    > span:nth-child(1) {
      font-weight: 800;
      font-size: 1.7rem;
      margin-bottom: 0.4rem;
      color: #3d3d3d;
    }

    p {
      font-size: 0.7rem;
      letter-spacing: 2px;
      font-weight: 600;
      color: grey;
    }
  }

  > :nth-child(3) {
    margin-right: 0;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 0.75rem;
  padding: 0.7rem;
  color: #fff;
  font-weight: 800;
  letter-spacing: 1px;
  border-radius: 6px;
`;

interface FollowBtnProps {
  following: boolean;
}

export const FollowBtn = styled(Button)`
  background-color: ${(props: FollowBtnProps) =>
    props.following ? "#cc4646" : "#da5c5c"};
  margin-bottom: 0.5rem;
  transition: background-color 170ms ease-in-out;

  /* :hover {
    background-color: #c75454;
    transition: background-color 170ms ease-in-out;
  } */
`;

export const MessageBtn = styled(Button)`
  background-color: #5c8eda;
`;

export const FavoriteBooks = styled.div`
  align-self: flex-start;
  margin-top: 1rem;

  h2 {
    font-weight: 800;
    font-size: 0.8rem;
    letter-spacing: 1px;
    margin-bottom: 0.7rem;
  }

  > :nth-child(2) {
    display: flex;
    flex-wrap: wrap;

    > * {
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
    }

    > :last-child {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        filter: brightness(50%);
        z-index: -1;
      }

      span {
        position: absolute;
        z-index: 9;
        font-size: 1.5rem;
        text-decoration: none;
        color: white;
        font-weight: 700;
      }
    }
  }
`;

export const BookCover = styled.img`
  border-radius: 3px;
  height: 110px;
  width: auto;
`;
