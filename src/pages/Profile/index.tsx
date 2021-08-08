import { useState } from "react";
import {
  Button,
  TabPanels,
  Tab,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Header from "components/Header";
import ChangeAvatar from "components/ChangeAvatar";
import {
  Main,
  About,
  Sidebar,
  Wrapper,
  FollowBtn,
  MessageBtn,
  FavoriteBooks,
  BookCover,
  Stats,
  BookList,
  Book as BookContainer,
  LargeBookCover,
  BookInfo,
  CustomTabs as Tabs,
  CustomTabList as TabList,
  CustomTabPanel as TabPanel,
} from "./index.styles";
import icon from "components/icons";

export default function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [following, setFollowing] = useState(false);
  const book = {
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1298417783l/23425.jpg",
    title: "Status Anxiety",
    author: "Alan de Botton",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptate odit eligendi ut deserunt recusandae illum similique",
  };
  const [favoriteBooks, setFavoriteBooks] = useState([
    book,
    book,
    book,
    book,
    book,
    book,
    book,
    book,
    book,
    book,
  ]);

  const handleFollow = () => {
    setFollowing((state) => !state);
  };

  // const openFavoriteBooks = () => {
  //   onOpen();
  // }

  const FOLLOWING = (
    <p>
      <icon.Check
        style={{
          fontSize: "1.8rem",
          position: "absolute",
          top: "5",
          left: "20%",
        }}
      />
      FOLLOWING
    </p>
  );
  const FOLLOW = <p>FOLLOW</p>;

  const favoriteBooksList = favoriteBooks.map((book, index) => {
    if (index >= 6) {
      return;
    } else {
      return index === 5 ? (
        <div onClick={() => onOpen()}>
          <span>+{favoriteBooks.length - 5}</span>
          <BookCover src={book.image} />
        </div>
      ) : (
        <BookCover src={book.image} />
      );
    }
  });

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{/* <Lorem count={2} /> */}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Header />
      <Wrapper>
        <Sidebar>
          <About>
            <ChangeAvatar />
            <h1>Jane Doe</h1>
            <p>San Francisco, CA</p>
            <Stats>
              <span>
                <span>50</span>
                <p>ratings</p>
              </span>
              <span>
                <span>24</span>
                <p>reviews</p>
              </span>
              <span>
                <span>150</span>
                <p>books</p>
              </span>
            </Stats>
            <FollowBtn following={following} onClick={() => handleFollow()}>
              {following ? FOLLOWING : FOLLOW}
            </FollowBtn>
            <MessageBtn>MESSAGE</MessageBtn>
          </About>
          <FavoriteBooks>
            <h2>FAVORITE BOOKS</h2>
            <div>{favoriteBooksList}</div>
          </FavoriteBooks>
        </Sidebar>
        <Main>
          <Tabs>
            <TabList>
              <Tab>Currently Reading</Tab>
              <Tab>To Read</Tab>
              <Tab>Read</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <BookList>
                  <Book></Book>
                  <Book></Book>
                  <Book></Book>
                  <Book></Book>
                  <Book></Book>
                </BookList>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Main>
      </Wrapper>
    </>
  );
}

export function Book() {
  return (
    <BookContainer>
      <LargeBookCover src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1298417783l/23425.jpg" />
      <BookInfo>
        <h2>Status Anxiety</h2>
        <h3>Alan de Botton</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          voluptate odit eligendi ut deserunt recusandae illum similique
        </p>
      </BookInfo>
    </BookContainer>
  );
}
