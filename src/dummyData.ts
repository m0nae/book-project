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
