import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import styled from "styled-components";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";

const Main = styled.div`
  display: flex;
  width: 70%;
  max-width: 1024px;
  height: 100vh;
  min-height: 100vh;
  margin: 0 auto;
  /* background-color: grey; */
`;

const Feed = styled.div`
  /* display: flex; */
  justify-content: center;
  height: 100%;
  width: 70%;
  padding-top: 3rem;

  > div {
    margin-bottom: 1.5rem;
  }
  /* background-color: lightblue; */
`;

const SidebarContain = styled.div`
  height: 100%;
  width: 30%;
  /* background-color: lightsalmon; */
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Main>
        <Feed>
          <Post />
          <Post />
          <Post />
        </Feed>
        <SidebarContain>
          <Sidebar />
        </SidebarContain>
      </Main>
    </div>
  );
}

export default App;
