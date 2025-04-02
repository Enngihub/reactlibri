import { Container, Row } from "react-bootstrap";
import SingleBook from "./Components/SingleBook";

const BookList = function (props) {
  return (
    <Container>
      <Row>
        {props.arrayOfBook.map((libro) => {
          return <SingleBook key={libro.asin} Book={libro} />;
        })}
      </Row>
    </Container>
  );
};

export default BookList;
