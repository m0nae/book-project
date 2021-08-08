import icon from "../../../components/icons";
import { Progress } from "@chakra-ui/react";
import {
  PostAvatar,
  CommentAvatar,
  CommentInput,
  Container,
  Content,
  ProgressBar,
  Status,
  StatusTop,
  StatusBottom,
  Comment,
  Wrapper,
  Actions,
  SocialActions,
  Rating,
  DisplayComments,
} from "./index.styles";
import { useState } from "react";

import { comments as COMMENTS } from "@/dummyData";
import { TheirChatMessage } from "src/pages/Messages/ChatMessage";

export default function Post() {
  const [comments, setComments] = useState();
  const [displayComments, setDisplayComments] = useState(false);

  const handleDisplayComments = () => {
    setDisplayComments((state) => !state);
  };

  console.log(COMMENTS);

  return (
    <>
      <Wrapper>
        <Container>
          <a href="#">
            <PostAvatar
              src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Profile picture"
            />
          </a>
          <Status>
            <StatusTop>
              <p>Username made progress on Strategic Planning for Dummies</p>
              <span>16h</span>
            </StatusTop>
            <StatusBottom>
              <Progress borderRadius="xl" value={70} />
              <p>pg 70 of 100</p>
            </StatusBottom>
          </Status>
          <Content>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51R65TPT4AL._SX395_BO1,204,203,200_.jpg"
              alt="Book Cover"
            />
            <div>
              <h3>Strategic Planning for Dummies</h3>
              <span>by Eric Olsen</span>
              <p>
                Insert book info here. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ab ratione deserunt id dolore. Repellendus
                saepe quam sit impedit ad illum! Asperiores in rerum labore
                laborum.
                <b>Continue Reading</b>
              </p>
            </div>
          </Content>
          <Actions>
            <SocialActions>
              <icon.Heart color="white" />
              <icon.Comment onClick={() => handleDisplayComments()} />
            </SocialActions>
            <Rating>
              <span>Rate it</span>
              <icon.Star />
              <icon.Star />
              <icon.Star />
              <icon.Star />
              <icon.Star />
            </Rating>
          </Actions>
        </Container>
        <Comment>
          <a href="#profile">
            <CommentAvatar
              src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Comment avatar"
            />
          </a>
          <CommentInput placeholder="Write a comment" />
        </Comment>
        <DisplayComments displayComments={displayComments}>
          <TheirChatMessage avatar="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80">
            <h2>Jane Doe</h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Blanditiis, ad. Libero, incidunt porro. Eaque, aut voluptas? Optio
            error modi itaque, nostrum eaque sit repellendus ex incidunt
            architecto unde earum eveniet!
          </TheirChatMessage>
        </DisplayComments>
      </Wrapper>
    </>
  );
}
