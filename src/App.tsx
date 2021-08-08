import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import styled from "styled-components";
import Post from "./pages/Home/Post";
import Sidebar from "./pages/Home/Sidebar";
import { Switch } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "pages/Profile";
import { GlobalStyles } from "global-styles";
import MyBooks from "pages/MyBooks";
import MessageBar from "pages/Messages";
import Settings from "pages/Settings";
import Home from "pages/Home";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/messages">
            <MessageBar />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/my-books">
            <MyBooks />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
