import { Avatar } from "global-styles";
import icon from "components/icons";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 89vh;
  max-height: 100%;
  overflow-y: hidden;
`;

export const Sidebar = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 90vh;
  padding: 1rem 0;
  position: fixed;
  top: 80px;
  left: 0;
  width: 28%;
  font-size: 1.3rem;
  font-weight: 600;
  border-right: 2px solid whitesmoke;

  > * {
    margin-bottom: 0.5rem;
  }
`;

export const Main = styled.div`
  position: relative;
  height: 100%;
  margin-left: 28vw;
  width: auto;

  header {
    display: flex;
    align-items: center;
    height: 60px;
    justify-content: space-between;
    border-bottom: 1px solid whitesmoke;
    padding: 0 1.5rem;
  }

  footer {
    position: sticky;
    display: flex;
    align-items: center;
    background-color: white;
    height: fit-content;
    width: 98%;
    bottom: 0;
    padding: 1rem 2rem;
    padding-bottom: 1rem;

    > textarea {
      padding-bottom: 1rem;
      margin-right: 1rem;
    }
  }
`;

export const ChatHeaderAvatar = styled(Avatar)`
  height: 35px;
  width: 35px;
  margin-right: 0.6rem;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  h1 {
    line-height: 0.6;
  }
`;
export const HeaderRight = styled.div`
  display: flex;
`;

export const HeaderMenuIcon = styled(icon.HorizontalDots)`
  font-size: 1.5rem;
  color: grey;
`;

export const ChatContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  max-height: 100%;
  overflow-y: auto;
  padding-bottom: 9rem;

  > * {
    margin-bottom: 2.5rem;
  }
`;

export const SendIcon = styled(icon.Send)`
  font-size: 1.5rem;
  align-self: flex-end;
  color: var(--dark-red);
  margin-bottom: 0.3rem;
`;
