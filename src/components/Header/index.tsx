import {
  Wrapper,
  Container,
  Left,
  Link,
  Links,
  Logo,
  Right,
  Avatar,
  Search,
} from "./index.styles";

export default function Header() {
  return (
    <>
      <Wrapper>
        <Container>
          <Left>
            <Logo>BOOKLY</Logo>
            <Links>
              <Link>Feed</Link>
              <Link>My Books</Link>
              <Link>Browse</Link>
            </Links>
          </Left>
          <Right>
            <Search placeholder="Search" />
            <Link>BAR</Link>
            <Link>BAR</Link>
            <Link>
              <Avatar
                src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Profile picture"
              />
            </Link>
          </Right>
        </Container>
      </Wrapper>
    </>
  );
}
