import Card from "react-bootstrap/Card";

function MyFooter() {
  return (
    <Card className="text-center">
      <Card.Header>E-Boohks</Card.Header>
      <Card.Body>
        <Card.Title>Special Horror Corporation</Card.Title>
        <Card.Text>{new Date().getFullYear()}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
  );
}

export default MyFooter;
