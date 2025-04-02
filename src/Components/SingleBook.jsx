import { Card, Button, Col } from "react-bootstrap";

const SingleBook = function (props) {
  return (
    <Col xs={12} md={6} lg={3}>
      <Card>
        <Card.Img variant="top" src={props.Book.img} />
        <Card.Body>
          <Card.Title>{props.Book.title}</Card.Title>
          <Card.Text>
            {props.Book.category}-{props.Book.price}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
