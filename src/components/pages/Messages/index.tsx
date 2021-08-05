import { useState } from "react";
import {
  Textarea,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Header from "../../Header";
import { MyChatMessage, TheirChatMessage } from "../../ChatMessage";
import {
  Main,
  Sidebar,
  Wrapper,
  HeaderLeft,
  HeaderRight,
  ChatHeaderAvatar,
  ChatContent,
  HeaderMenuIcon,
  SendIcon,
} from "./index.styles";
import { userOne, userTwo, userThree } from "@/dummyData";
import SidebarChat from "components/SidebarChat";

export default function MessageBar() {
  // the currently logged in user
  const [CURRENTUSER] = useState({
    user: "janedoe",
    name: "Jane Doe",
    avatar:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  });

  const [sidebarChats, setSidebarChats] = useState([
    userOne,
    userTwo,
    userThree,
  ]);

  function calculateUnreadMessages(chat: typeof sidebarChats[0]): any {
    let unreadMessages = chat.messages.filter(
      (message) => message.readStatus().userOne.read === false
    );
    return unreadMessages.length;
  }

  // the last active chat should be the last chat/user that the user talked to.
  // i'll implement that later
  const [activeChat, setActiveChat] = useState(userTwo);

  const sidebarChatsView = sidebarChats.map((chat, index) => {
    const lastMessage = chat.messages[chat.messages.length - 1];

    return chat.user === activeChat.user ? (
      <SidebarChat
        avatar={chat.avatar}
        messagePreview={lastMessage.message}
        name={chat.name}
        user={chat.user}
        time={lastMessage.sent}
        unreadMessages={calculateUnreadMessages(chat)}
        chats={sidebarChats}
        setActiveChat={setActiveChat}
        key={index}
        active
      />
    ) : (
      <SidebarChat
        avatar={chat.avatar}
        messagePreview={lastMessage.message}
        name={chat.name}
        user={chat.user}
        time={lastMessage.sent}
        unreadMessages={calculateUnreadMessages(chat)}
        chats={sidebarChats}
        setActiveChat={setActiveChat}
        key={index}
      />
    );
  });

  const chatContentView = activeChat.messages.map((message, index) =>
    message.user === CURRENTUSER.user ? (
      <MyChatMessage key={index} avatar={CURRENTUSER.avatar}>
        {message.message}
      </MyChatMessage>
    ) : (
      <TheirChatMessage key={index * 100} avatar={activeChat.avatar}>
        {message.message}
      </TheirChatMessage>
    )
  );

  return (
    <>
      <Header staticPosition={true} />
      <Wrapper>
        <Sidebar>{sidebarChatsView}</Sidebar>
        <Main>
          <header>
            <HeaderLeft>
              <div>
                <ChatHeaderAvatar src={activeChat.avatar} />
              </div>
              <div>
                <h1>{activeChat.name}</h1>
                <small>@{activeChat.user}</small>
              </div>
            </HeaderLeft>
            <HeaderRight>
              <ChatHeaderMenu />
            </HeaderRight>
          </header>
          <ChatContent>{chatContentView}</ChatContent>
          <footer>
            <Textarea placeholder="Type your message" />
            <SendIcon />
          </footer>
        </Main>
      </Wrapper>
    </>
  );
}

function ChatHeaderMenu() {
  return (
    <>
      <Menu>
        <MenuButton>
          <HeaderMenuIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>View Profile</MenuItem>
          <MenuItem>End Chat</MenuItem>
          <MenuItem>Report</MenuItem>
          <MenuItem>Block</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
