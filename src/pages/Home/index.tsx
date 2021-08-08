import Header from "components/Header";
import Post from "src/pages/Home/Post";
import Sidebar from "src/pages/Home/Sidebar";
import { Feed, Main, SidebarContain } from "./index.styles";

export default function Home() {
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
