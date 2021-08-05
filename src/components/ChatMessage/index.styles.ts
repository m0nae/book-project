import { Avatar } from "global-styles";
import styled from "styled-components";

export const ChatMessage = styled.div`
  display: flex;

  > img {
    align-self: flex-end;
  }
`;

export const ChatAvatar = styled(Avatar)`
  height: 40px;
  width: 40px;
`;

export const ChatBubble = styled.div`
  width: 50%;
  height: fit-content;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  background-color: #eeeeee;
`;

export const MyChatMessage = styled(ChatMessage)`
  justify-content: flex-end;

  > div {
    background-color: var(--dark-red);
    color: white;
  }

  > :last-child {
    margin-right: 0;
    margin-left: 0.5rem;
  }
`;

export const TheirChatMessage = styled(ChatMessage)`
  > :first-child {
    margin-right: 0.5rem;
  }
`;
