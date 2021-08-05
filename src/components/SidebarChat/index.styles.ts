import { Avatar } from "global-styles";
import styled from "styled-components";

export const Container = styled.label`
  display: flex;
  background-color: ${(props: any) => (props.active ? "#eeeeee" : "white")};
  width: 92%;
  border-radius: 8px;
  height: 60px;
  padding: 0.5rem 0.5rem;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const Content = styled.div`
  width: 80%;
`;

export const ContentTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;

  small {
    font-size: 0.7rem;
  }
`;

export const ContentBottom = styled.div`
  p {
    font-size: 0.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 93%;
    font-weight: ${(props: any) => (props.unreadMessages > 0 ? "600" : "500")};
  }
`;

export const SidebarChatOption = styled.input`
  display: none;
`;

export const SidebarAvatar = styled(Avatar)`
  height: 40px;
  width: 40px;
  margin-right: 0.7rem;
`;

export const UnreadBadge = styled.div`
  position: absolute;
  bottom: 9px;
  right: 5px;
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 0.7rem;
  padding: 0.4rem;
  text-align: center;
  font-weight: 700;
  line-height: 0.9em;
  transform: scale(0.8);
`;
