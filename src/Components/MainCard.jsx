import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Shop from "./horror.json";
import { Row, Col, Button, Form } from "react-bootstrap";

function MainCard() {
  const [visibleBooks, setVisibleBooks] = useState(6);

  const loadMoreBooks = () => {
    setVisibleBooks((prevVisibleBooks) => prevVisibleBooks + 6);
  };
  const loadAllBooks = () => {
    setVisibleBooks(Shop.length);
  };

  const reduceBooks = () => {
    if (visibleBooks >= 6) {
      return setVisibleBooks(3);
    }
  };

  return (
    <div className="container bg-dark justify-content-center align-items-center">
      <Row>
        {Shop.slice(0, visibleBooks).map((carte) => {
          return (
            <Col xs={12} md={8} lg={4} key={carte.asin} className="mt-3 mb-3">
              <Card className="h-100">
                <Card.Img
                  src={carte.img}
                  className="img-fluid"
                  style={{
                    height: "500px",
                    objectFit: "cover",
                  }}
                />
                <Card.Body>
                  <Card.Title>
                    <h3>{carte.title}</h3>
                  </Card.Title>
                  <Card.Text>
                    <p>{carte.price} $</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <div className="d-flex align-items-center flex-column">
        <Button
          variant="danger"
          onClick={loadMoreBooks}
          className="mt-3 mb-3 bg-danger w-50"
        >
          Show More
        </Button>
        <Button
          variant="danger"
          onClick={loadAllBooks}
          className="mt-1 mb-3 bg-danger w-25 "
        >
          Show All
        </Button>
        <Button
          variant="danger"
          onClick={reduceBooks}
          className={
            "mt-1 mb-3 w-25 " + (visibleBooks >= 6 ? "bg-danger" : "invisible")
          }
        >
          Reduce
        </Button>
      </div>
    </div>
  );
}

export default MainCard;
