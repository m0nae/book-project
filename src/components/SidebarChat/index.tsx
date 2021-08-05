import {
  Container,
  SidebarAvatar,
  UnreadBadge,
  SidebarChatOption,
  Content,
  ContentTop,
  ContentBottom,
} from "./index.styles";

interface SidebarChatProps {
  active?: boolean;
  avatar: string;
  name: string;
  user: string;
  time: string;
  messagePreview: string;
  unreadMessages: number;
  chats: any;
  setActiveChat: any;
}

export default function SidebarChat({
  avatar,
  active,
  name,
  user,
  time,
  messagePreview,
  unreadMessages,
  chats,
  setActiveChat,
}: SidebarChatProps) {
  return (
    <>
      <Container active={active} htmlFor={user}>
        <SidebarChatOption
          type="radio"
          id={user}
          value={user}
          name="chat"
          aria-hidden={false}
          onChange={() =>
            setActiveChat(chats.find((chat: any) => chat.user === user))
          }
        />
        <SidebarAvatar src={avatar} />
        <Content>
          <ContentTop>
            <p>{name}</p>
            <small>{time}</small>
          </ContentTop>
          <ContentBottom unreadMessages={unreadMessages}>
            <p>{messagePreview}</p>
            {unreadMessages > 0 && (
              <UnreadBadge>
                <span>{unreadMessages}</span>
              </UnreadBadge>
            )}
          </ContentBottom>
        </Content>
      </Container>
    </>
  );
}
