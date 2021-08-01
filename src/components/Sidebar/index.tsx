import { Book, Container, CurrentlyReading } from "./index.styles";

export default function Sidebar() {
  return (
    <>
      <Container>
        <CurrentlyReading>
          <h2>Currently Reading</h2>
          <Book>
            <img src="https://images-na.ssl-images-amazon.com/images/I/51R65TPT4AL._SX395_BO1,204,203,200_.jpg" />
            <div>
              <h3>Strategic Planning for Dummies</h3>
              <p>by Erica Olsen</p>
              <button>Update Progress</button>
            </div>
          </Book>
          <Book>
            <img src="https://images-na.ssl-images-amazon.com/images/I/51R65TPT4AL._SX395_BO1,204,203,200_.jpg" />
            <div>
              <h3>Strategic Planning for Dummies</h3>
              <p>by Erica Olsen</p>
              <button>Update Progress</button>
            </div>
          </Book>
          <Book>
            <img src="https://images-na.ssl-images-amazon.com/images/I/51R65TPT4AL._SX395_BO1,204,203,200_.jpg" />
            <div>
              <h3>Strategic Planning for Dummies</h3>
              <p>by Erica Olsen</p>
              <button>Update Progress</button>
            </div>
          </Book>
        </CurrentlyReading>
      </Container>
    </>
  );
}
