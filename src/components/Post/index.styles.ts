import { Avatar } from "global-styles";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
`;

export const Container = styled.div`
  position: relative;
  min-height: 18rem;
  height: fit-content;
  border-radius: 6px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border: 3px solid #e6e6e6;
  border-bottom: 0px;
  padding: 1rem 1.7rem 2rem 3rem;
  text-align: left;
  /* background-color: #dbdbdb; */
`;

export const PostAvatar = styled(Avatar)`
  position: absolute;
  top: -1rem;
  left: -1.5rem;
`;

export const Status = styled.div`
  width: 100%;
  min-height: 4rem;
  height: fit-content;
  border-bottom: 2px solid whitesmoke;

  span {
    font-weight: 700;
    font-size: 1rem;
    color: darkgrey;
  }
`;

export const StatusTop = styled.div`
  display: flex;
`;

export const StatusBottom = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  font-size: 0.8rem;
  font-weight: 700;
`;

export const ProgressBar = styled.progress`
  width: 40%;
  height: 1.5rem;
  margin-right: 0.7rem;
  color: darkgrey;
`;

export const Content = styled.div`
  margin-top: 1rem;
  display: flex;

  > div {
    p {
      margin-top: 0.4rem;
    }
  }

  img {
    width: 150px;
    height: 200px;
    margin-right: 1rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
  width: 100%;
  margin-top: 1rem;
`;

export const SocialActions = styled.div`
  display: flex;
  align-items: center;
`;

export const Comment = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 50px;
  width: 100%;
  background-color: #e2e2e2;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const CommentAvatar = styled(Avatar)`
  height: 30px;
  width: 30px;
  margin-right: 0.5rem;
`;

export const CommentInput = styled.input`
  height: 60%;
  width: 90%;
  padding-left: 0.5rem;
`;

export const Rating = styled.div``;
