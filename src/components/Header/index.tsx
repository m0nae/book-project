import {
  Wrapper,
  Container,
  Left,
  Link,
  Links,
  Logo,
  Right,
  Avatar,
  Search,
} from "./index.styles";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";

export interface HeaderProps {
  staticPosition?: boolean;
}

export default function Header({ staticPosition }: HeaderProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const handleHover = () => {
  //   setTimeout(() => {
  //     if () {

  //     }
  //   }, 1500);
  // };

  return (
    <>
      <Wrapper>
        <Container>
          <Left>
            <Logo>BOOKLY</Logo>
            <Links>
              <Link href="http://localhost:3000">Home</Link>
              <Link>My Books</Link>
              <Link>Browse</Link>
            </Links>
          </Left>
          <Right>
            <Search placeholder="Search" />
            <Link>BAR</Link>
            <Link>BAR</Link>
            <Link>
              <Menu isOpen={isOpen} autoSelect>
                <MenuButton onMouseEnter={onOpen}>
                  <Avatar
                    src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="Profile picture"
                  />
                </MenuButton>
                <MenuList onMouseLeave={onClose}>
                  <MenuItem as={Link} href="/profile">
                    Profile
                  </MenuItem>
                  <MenuItem as={Link} href="/settings">
                    Settings
                  </MenuItem>
                  <MenuItem as={Link} href="/logout">
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </Link>
          </Right>
        </Container>
      </Wrapper>
    </>
  );
}
