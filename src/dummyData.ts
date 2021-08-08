const message1 = {
  user: "johnsmith",
  name: function () {
    return this.name;
  },
  sent: "9:30am",
  message:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, quibusdam. Numquam animi dolorum tempore ducimus nam culpa et doloremque eos natus quam reiciendis quia magnam dicta id, neque sint architecto!",
};

const message2 = {
  ...message1,
  sent: "10:21am",
  message:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat velit necessitatibus architecto quas ipsum optio error repellendus repudiandae pariatur earum laboriosam doloribus enim corrupti libero officiis quasi, porro dolorum ratione?",
};

const message3 = {
  ...message1,
  sent: "10:23am",
  message:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt rem quia non autem maiores adipisci placeat delectus eius? Vel, hic. Quaerat tenetur itaque totam et tempora modi dolore id mollitia?",
};

export const userOne = {
  name: "John Smith",
  user: "johnsmith",
  avatar: "https://uifaces.co/our-content/donated/yn7PKqTT.jpg",
  messages: [
    {
      ...message1,
      user: "janedoe",
      sent: "12:54pm",
      readStatus: function () {
        let user = this.user;

        return {
          userOne: {
            user: "janedoe",
            read: true,
          },
          userTwo: function () {
            return {
              user,
              read: true,
            };
          },
        };
      },
    },
    {
      ...message2,
      sent: "1:21pm",
      readStatus: function () {
        let user = this.user;

        return {
          userOne: {
            user: "janedoe",
            read: false,
          },
          userTwo: function () {
            return {
              user,
              read: true,
            };
          },
        };
      },
    },
    {
      ...message3,
      sent: "1:22pm",
      readStatus: function () {
        let user = this.user;

        return {
          userOne: {
            user: "janedoe",
            read: false,
          },
          userTwo: function () {
            return {
              user,
              read: true,
            };
          },
        };
      },
    },
  ],
};

export const userTwo = {
  name: "Bobby Joe",
  user: "bobbyjoe",
  avatar: "https://uifaces.co/our-content/donated/n4Ngwvi7.jpg",
  messages: [
    {
      ...message1,
      user: "bobbyjoe",
      sent: "11:42am",
      readStatus: function () {
        let user = this.user;

        return {
          userOne: {
            user: "janedoe",
            read: true,
          },
          userTwo: function () {
            return {
              user,
              read: true,
            };
          },
        };
      },
    },
    {
      ...message2,
      user: "janedoe",
      sent: "11:42am",
      readStatus: function () {
        let user = this.user;

        return {
          userOne: {
            user: "janedoe",
            read: true,
          },
          userTwo: function () {
            return {
              user,
              read: true,
            };
          },
        };
      },
    },
    {
      ...message3,
      user: "bobbyjoe",
      sent: "11:46am",
      readStatus: function () {
        let user = this.user;

        return {
          userOne: {
            user: "janedoe",
            read: false,
          },
          userTwo: function () {
            return {
              user,
              read: true,
            };
          },
        };
      },
    },
  ],
};

export const userThree = {
  ...userOne,
  name: "Sam Jones",
  user: "samjones",
  avatar:
    "https://images.generated.photos/B7CJLWXHEhr73EmhhiWyTK-WT39VwobNNqwknL-vwUg/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA5/NzY1NDcuanBn.jpg",
  messages: [
    {
      ...message1,
      user: "janedoe",
      sent: "2:13am",
      readStatus: function () {
        let user = this.user;

        return {
          userOne: {
            user: "janedoe",
            read: true,
          },
          userTwo: function () {
            return {
              user,
              read: true,
            };
          },
        };
      },
    },
    {
      ...message2,
      user: "samjones",
      sent: "2:32am",
      readStatus: function () {
        let user = this.user;

        return {
          userOne: {
            user: "janedoe",
            read: true,
          },
          userTwo: function () {
            return {
              user,
              read: true,
            };
          },
        };
      },
    },
    {
      ...message3,
      user: "samjones",
      sent: "4:03am",
      readStatus: function () {
        let user = this.user;

        return {
          userOne: {
            user: "janedoe",
            read: true,
          },
          userTwo: function () {
            return {
              user,
              read: true,
            };
          },
        };
      },
    },
  ],
};

// in the real backend, i might just take the "titles" from the user,
// make it all lowercase, and replace the spaces with hyphens to
// automatically make it into the "name"

// this means that reading lists with duplicate titles/names will NOT be allowed

// and each user has their own table of reading lists/reading lists have "ownere"
// so no need to worry about name clashes of reading lists among different users

// also, impose character limits and other restrictions to the titles!

type GenericArray = Array<Object | null>;
type Book = {
  img: string;
};
type ReadingLists = {
  name: string;
  title: string;
  books: Book[];
}[];

const bookOne = {
  img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1298417783l/23425.jpg",
};

const listBooks = (num: number, book: Book = bookOne) => {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(book);
  }

  return arr as ReadingLists[0]["books"];
};

export const readingLists: ReadingLists = [
  {
    name: "all",
    title: "All",
    books: listBooks(8),
  },
  {
    name: "currently-reading",
    title: "Currently Reading",
    books: listBooks(33),
  },
  {
    name: "read",
    title: "Read",
    books: listBooks(300),
  },
  {
    name: "want-to-read",
    title: "Want to Read",
    books: listBooks(1),
  },
  {
    name: "favorites",
    title: "Favorites",
    books: listBooks(6),
  },
];

interface Comment {
  user: string;
  posted: string;
  edited: string;
  contents: string;
}

type Comments = Comment[];

const commentOne = {
  user: "janedoe",
  posted: "foobar",
  edited: "baz",
  contents:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis eius architecto, hic natus rerum debitis quas officiis! Maiores velit voluptas voluptatem atque, rem illum cumque modi reprehenderit quisquam repellat nemo.",
};

const listComments = (num: number, comment: Comment = commentOne) => {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(comment);
  }

  return arr as Comments;
};

export const comments: Comments = listComments(5, commentOne);
