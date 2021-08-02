import { useState } from "react";
import Header from "../../Header";
import {
  BookList,
  About,
  ProfileAvatar,
  Sidebar,
  Wrapper,
  FollowBtn,
  MessageBtn,
  FavoriteBooks,
  BookCover,
  Stats,
} from "./index.styles";

export default function Profile() {
  const [following, setFollowing] = useState(false);

  const handleFollow = () => {
    setFollowing((state) => !state);
  };

  return (
    <>
      <Header />
      <Wrapper>
        <Sidebar>
          <About>
            <ProfileAvatar
              src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Profile picture"
            />
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
              {following ? "FOLLOWING" : "FOLLOW"}
            </FollowBtn>
            <MessageBtn>MESSAGE</MessageBtn>
          </About>
          <FavoriteBooks>
            <h2>FAVORITE BOOKS</h2>
            <div>
              <BookCover src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1298417783l/23425.jpg" />
              <BookCover src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1298417783l/23425.jpg" />
              <BookCover src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1298417783l/23425.jpg" />
              <BookCover src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1298417783l/23425.jpg" />
              <BookCover src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1298417783l/23425.jpg" />
              <a href="#">
                <span>+32</span>
                <BookCover src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1298417783l/23425.jpg" />
              </a>
            </div>
          </FavoriteBooks>
        </Sidebar>
        <BookList />
      </Wrapper>
    </>
  );
}
