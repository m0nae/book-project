import {
  MyChatMessage as MyChatMessageContainer,
  ChatBubble,
  TheirChatMessage as TheirChatMessageContainer,
  ChatAvatar,
} from "./index.styles";

export function MyChatMessage({ avatar, children }: any) {
  return (
    <MyChatMessageContainer>
      <ChatBubble>{children}</ChatBubble>
      <ChatAvatar src={avatar} />
    </MyChatMessageContainer>
  );
}

export function TheirChatMessage({ avatar, children }: any) {
  return (
    <TheirChatMessageContainer>
      <ChatAvatar src={avatar} />
      <ChatBubble>{children}</ChatBubble>
    </TheirChatMessageContainer>
  );
}
