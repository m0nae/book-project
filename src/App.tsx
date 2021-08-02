import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import styled from "styled-components";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";
import { Switch } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";

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

const SidebarContain = styled.div`
  height: fit-content;
  min-height: 100vh;
  width: 30%;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  overflow-y: auto;
  /* background-color: lightsalmon; */
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Switch>
        <Route path="/profile">
          <div>PROFILE PAGE</div>
        </Route>
        <Route path="/">
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
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
