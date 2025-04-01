import Card from "react-bootstrap/Card";

function MyFooter() {
  return (
    <Card className="text-center">
      <Card.Header>E-Book</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
  );
}

export default MyFooter;
