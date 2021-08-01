import { Avatar, Container, Content, Status } from "./index.styles";

export default function Post() {
  return (
    <>
      <Container>
        <a href="#">
          <Avatar
            src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Profile picture"
          />
        </a>
        <Status>
          <p>Username made progress on Strategic Planning for Dummies</p>
          <span>16h</span>
        </Status>
        <Content>
          Insert book info here. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ab ratione deserunt id dolore. Repellendus saepe
          quam sit impedit ad illum! Asperiores in rerum labore laborum officia
          nesciunt distinctio totam ducimus. Ab ratione deserunt id dolore.
          Repellendus saepe quam sit impedit ad illum! Asperiores in rerum
          labore laborum officia nesciunt distinctio totam ducimus.
        </Content>
      </Container>
    </>
  );
}
