import Header from "../../Header";
import { LargeBookCover } from "../Profile/index.styles";
import { Main, Sidebar, Wrapper } from "./index.styles";

export default function MyBooks() {
  return (
    <>
      <Header />
      <Wrapper>
        <Sidebar>
          {/* TODO: these are going to be hidden radio btns */}
          <p>All</p>
          <p>Currently Reading</p>
          <p>Read</p>
          <p>Want to Read</p>
        </Sidebar>
        <Main>
          <h1>My Books</h1>
          <div>
            <LargeBookCover src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1298417783l/23425.jpg" />
            <LargeBookCover src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1298417783l/23425.jpg" />
            <LargeBookCover src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1298417783l/23425.jpg" />
            <LargeBookCover src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1298417783l/23425.jpg" />
            <LargeBookCover src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1298417783l/23425.jpg" />
            <LargeBookCover src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1298417783l/23425.jpg" />
            <LargeBookCover src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1298417783l/23425.jpg" />
          </div>
        </Main>
      </Wrapper>
    </>
  );
}
