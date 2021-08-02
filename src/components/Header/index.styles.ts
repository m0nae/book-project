import styled from "styled-components";

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  border-bottom: 2px solid whitesmoke;
  width: 100%;
  height: 80px;
  background-color: white;
  z-index: 10;
`;

export const Container = styled.div`
  display: flex;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: inherit;
  width: inherit;
  /* max-width: 1024px; */
  padding: 0 1rem;
  margin: 0 auto;
`;

export const Logo = styled.div`
  cursor: pointer;
  margin-right: 1rem;
`;

export const Links = styled.div`
  > * {
    margin-right: 0.7rem;
  }
`;

export const Link = styled.a`
  cursor: pointer;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Right = styled(Left)`
  > * {
    margin-right: 0.7rem;
  }
`;

export const Search = styled.input`
  height: 2rem;
  border-radius: 3px;
  background-color: #e8e8e8;
  outline: none;
  border: none;
  padding-left: 1rem;
`;

export const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;
