import { InputGroup, InputRightElement } from "@chakra-ui/react";
import Header from "components/Header";
import { useEffect, useState, useMemo } from "react";
import { Book } from "../Profile";
import { Main, Input } from "./index.styles";

export default function Search() {
  const [info, setInfo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(async () => {
    let res = await fetch(
      "https://openlibrary.org/search.json?q=lord+of+the+rings&limit=10"
    );
    const data = await res.json();

    console.log(data.docs);

    setInfo(data.docs);
  }, []);

  const infoList = info.map((data: any, index: any) => {
    let placeholderCover = "https://via.placeholder.com/94x134";

    return (
      // <div key={index}>
      //   {/* {data.author_name ? data.author_name[0] : "Unknown author"} */}
      //   <img
      //     src={
      //       data.cover_i
      //         ? `https://covers.openlibrary.org/b/id/${data.cover_i}-M.jpg`
      //         : placeholderCover
      //     }
      //   />
      //   <h2>{data.title}</h2>
      // </div>
      <Book
        cover={
          data.cover_i
            ? `https://covers.openlibrary.org/b/id/${data.cover_i}-M.jpg`
            : placeholderCover
        }
        title={data.title}
        author={data.author_name ? data.author_name[0] : "Unknown Author"}
      />
    );
  });

  const handleSearch = async () => {
    const searchQuery = inputValue.split(" ").join("+");
    let res = await fetch(
      `https://openlibrary.org/search.json?q=${searchQuery}&limit=5`
    );
    const data = await res.json();

    console.log(data);

    setInfo(data.docs);
  };

  return (
    <>
      <Header />
      <Main>
        <InputGroup>
          <Input
            placeholder="Search for a book"
            onChange={(e: any) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <InputRightElement>
            <button onClick={() => handleSearch()}>Search</button>
          </InputRightElement>
        </InputGroup>
        <div>{infoList}</div>
      </Main>
    </>
  );
}
