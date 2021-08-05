import { Avatar } from "global-styles";
import styled from "styled-components";

// export const ProfileAvatarContainer = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   :hover {
//     img {
//       filter: brightness(50%);
//     }

//     > :first-child {
//       display: block;
//     }
//   }

//   > :first-child {
//     display: none;
//     position: absolute;
//     /* bottom: 0; */
//     z-index: 10;
//     font-size: 3.3rem;
//     color: #ffffff97;
//   }
// `;

export const ProfileAvatarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  width: fit-content;

  input {
    display: none;
  }

  :hover {
    img {
      filter: brightness(50%);
    }

    > :first-child {
      display: block;
    }
  }

  > :nth-child(2) {
    visibility: hidden;
    position: absolute;
    z-index: -1;
  }

  > :first-child {
    display: none;
    position: absolute;
    /* bottom: 0; */
    z-index: 10;
    font-size: 3.3rem;
    color: #ffffff97;
  }
`;

export const ProfileAvatar = styled(Avatar)`
  width: 200px;
  min-height: 200px;
  height: auto;
  border-radius: 4%;
  margin: 0;

  // TODO: this should only be allowed/appear if this is the current user's profile
  // so create a separate component and just conditionally render it based on
  // if it's the currently logged in user's own profile
  :hover {
    cursor: pointer;
  }
`;

// export const ProfileAvatar = styled(Avatar)`
//   width: 100%;
//   min-height: 200px;
//   height: auto;
//   border-radius: 4%;

//   // TODO: this should only be allowed/appear if this is the current user's profile
//   // so create a separate component and just conditionally render it based on
//   // if it's the currently logged in user's own profile
//   :hover {
//     cursor: pointer;
//   }
// `;
