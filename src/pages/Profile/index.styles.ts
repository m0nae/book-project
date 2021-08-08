import { Avatar } from "global-styles";
import { TabList, Tabs, TabPanel } from "@chakra-ui/react";
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
  width: 25%;
  /* background-color: lightblue; */
`;

export const Main = styled.div`
  height: 100%;
  width: 70%;
  padding: 1.3rem 2rem 0 2.6rem;
  /* background-color: tomato; */
`;

export const CustomTabs = styled(Tabs)`
  [aria-selected="true"] {
    border-color: var(--dark-red) !important;
    color: grey !important;
  }
`;

export const CustomTabPanel = styled(TabPanel)`
  padding: 1rem 0 !important;
`;

export const CustomTabList = styled(TabList)`
  > button {
    font-size: var(--small-text-size);
    letter-spacing: var(--small-text-spacing);
    font-weight: 400;
    text-transform: var(--small-text-transform);
    color: grey;
  }
`;

export const BookList = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  width: 100%;

  > * {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`;

export const Book = styled.div`
  display: flex;
`;

export const LargeBookCover = styled.img`
  height: 230px;
  width: auto;
  margin-right: 1.5rem;
`;

export const BookInfo = styled.div`
  h2 {
    font-size: 1.3rem;
    font-weight: 600;
  }
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

  > button:first-of-type {
    position: relative;
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
      font-size: var(--small-text-size);
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

  > p {
    font-size: 0.75rem;
    color: #fff;
    font-weight: 800;
    letter-spacing: 1px;
  }
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
      cursor: pointer;
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
