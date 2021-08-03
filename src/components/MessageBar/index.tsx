import Header from "../Header";
import { Main, Sidebar, Wrapper } from "./index.styles";

export default function MessageBar() {
  return (
    <>
      <Header staticPosition />
      <Wrapper>
        <Sidebar></Sidebar>
        <Main>
          <header>
            <h1>John Smith</h1>
            <small>@johnsmith</small>
          </header>
        </Main>
      </Wrapper>
    </>
  );
}
