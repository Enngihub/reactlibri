import Card from "react-bootstrap/Card";
import Shop from "./horror.json";
import { Row, Col } from "react-bootstrap";

function MainCard() {
  return (
    <div className=" container bg-dark">
      <Row>
        {Shop.map((carte) => {
          return (
            <Col xs={12} md={8} lg={4} key={carte.asin} className="mt-3 mb-3">
              <Card className=" h-100">
                <Card.Img
                  src={carte.img}
                  className=" img-fluid"
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
    </div>
  );
}

export default MainCard;
