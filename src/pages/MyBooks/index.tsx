import { useState, useCallback, useMemo, useRef, useEffect } from "react";
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
import ReactPaginate from "react-paginate";
import Header from "components/Header";
import Option from "components/Option";
import { LargeBookCover } from "pages/Profile/index.styles";
import { Main, Sidebar, Wrapper } from "./index.styles";

import { readingLists as READINGLISTS } from "src/dummyData";
import icon from "components/icons";

export default function MyBooks() {
  const [readingLists, setReadingList] = useState(READINGLISTS);
  const [selectedReadingList, setSelectedReadingList] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);

  const READINGLISTVIEWS = useMemo(() => {
    let readingList: any = {};
    readingLists.forEach((list) => {
      readingList[list.name] = {
        ...list,
        books: list.books.map((book: any) => <Book src={book.img} />),
      };
    });

    return readingList;
  }, [readingLists]);

  const readingListView = useMemo(() => {
    return READINGLISTVIEWS[selectedReadingList].books;
  }, [readingLists, selectedReadingList]);

  const readingListTitle = useMemo(() => {
    return READINGLISTVIEWS[selectedReadingList].title;
  }, [readingLists, selectedReadingList]);

  const allReadingLists = readingLists.map((list) => (
    <Option
      selectedOption={selectedReadingList}
      setSelectedOption={setSelectedReadingList}
      radioName="reading-list"
      optionName={list.name}
      optionNameLabel={list.title}
    />
  ));

  const getPaginatedData = useMemo(() => {
    const data = readingListView;
    const dataLimit = 30;
    const startIndex =
      (currentPage === 0 ? currentPage + 1 : currentPage) * dataLimit -
      dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  }, [readingListView, currentPage]);

  // scrolls to the top of page when reading list changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [readingListView, currentPage]);

  useEffect(() => {
    setCurrentPage(0);
  }, [readingListView]);

  const showPagination = getPaginatedData.length > 29 || currentPage > 0;

  return (
    <>
      <Header />
      <Wrapper>
        <Sidebar>{allReadingLists}</Sidebar>
        <Main>
          <h1>{readingListTitle}</h1>
          <div>{getPaginatedData}</div>
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
          )}
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
      <Popover
        placement="right"
        trigger="hover"
        openDelay={100}
        arrowSize={20}
        isLazy
      >
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
