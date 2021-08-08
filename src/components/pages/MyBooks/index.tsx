import { useState, useCallback } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import Header from "../../Header";
import { LargeBookCover } from "../Profile/index.styles";
import { Main, Sidebar, Wrapper } from "./index.styles";

export default function MyBooks() {
  // these are for all of the "reading lists".
  // if i give users the ability to create their own, i might just make a single state
  // and pull the data from an api. maybe useReducer would be better,
  // but for now im hard-coding the reading lists like this
  const bookOne = {
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1298417783l/23425.jpg",
  };

  type GenericArray = Array<Object | null>;

  const ALLBOOKS: GenericArray = [];
  const CURRENTLYREADINGBOOKS: GenericArray = [];
  const WANTTOREADBOOKS: GenericArray = [];

  const printBooks = (arr: GenericArray, book: Object, num: Number) => {
    for (let i = 0; i < num; i++) {
      arr.push(book);
    }
  };

  printBooks(ALLBOOKS, bookOne, 9);
  printBooks(CURRENTLYREADINGBOOKS, bookOne, 3);
  printBooks(WANTTOREADBOOKS, bookOne, 15);

  const [allBooks, setAllBooks] = useState(ALLBOOKS);
  const [wantToReadBooks, setWantToReadBooks] = useState(WANTTOREADBOOKS);
  const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState(
    CURRENTLYREADINGBOOKS
  );

  const allBooksView = ALLBOOKS.map((book: any) => <Book src={book.img} />);
  const currentlyReadingBooksView = CURRENTLYREADINGBOOKS.map((book: any) => (
    <Book src={book.img} />
  ));
  const wantToReadBooksView = WANTTOREADBOOKS.map((book: any) => (
    <Book src={book.img} />
  ));

  const [selectedReadingList, setSelectedReadingList] = useState("all");

  const readingListView = useCallback(() => {
    switch (selectedReadingList) {
      case "all":
        return allBooksView;
      case "currently-reading":
        return currentlyReadingBooksView;
      default:
        return allBooksView;
    }
  }, [selectedReadingList]);

  const readingListTitle = useCallback(() => {
    switch (selectedReadingList) {
      case "all":
        return "My Books";
      case "currently-reading":
        return "Currently Reading";
      default:
        return "My Books";
    }
  }, [selectedReadingList]);

  // function readingListView() {
  //   switch(selectedReadingList) {
  //     case 'all':
  //       return allBooksView;
  //     case 'currently-reading':
  //       return currentlyReadingBooksView;
  //     default:
  //       return allBooksView;
  //   }
  // }

  return (
    <>
      <Header />
      <Wrapper>
          {showPagination && (
            <ReactPaginate
              forcePage={currentPage}
              pageCount={Math.ceil(readingListView.length / 30)}
              pageRangeDisplayed={3}
              marginPagesDisplayed={3}
              containerClassName="paginate-container"
              pageLinkClassName="paginate-link"
              breakClassName="paginate-break"
              nextClassName="paginate-next"
              previousClassName="paginate-back"
              activeLinkClassName="paginate-active-btn"
              breakLinkClassName="paginate-break"
              previousLabel={<icon.LeftChevron />}
              nextLabel={<icon.RightChevron />}
              onPageChange={(pg: any) => setCurrentPage(pg.selected)}
          />
          <label htmlFor="currently-reading">Currently Reading</label>
          <p>Read</p>
          <p>Want to Read</p>
          <p>Favorites</p>
        </Sidebar>
        <Main>
          <h1>{readingListTitle()}</h1>
          <div>{readingListView()}</div>
        </Main>
      </Wrapper>
    </>
  );
}

interface BookProps {
  src: string;
}

function Book({ src }: BookProps) {
  return (
    <>
      <Popover placement="right" trigger="hover" openDelay={100} arrowSize={20}>
        <PopoverTrigger>
          <LargeBookCover style={{ cursor: "pointer" }} src={src} />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>CONTENT HERE</PopoverHeader>
          <PopoverBody>CONTENT HERE</PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}
