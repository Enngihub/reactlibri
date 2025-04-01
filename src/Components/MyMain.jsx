import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import horrorBook from "./horror.json";
import { Container } from "react-bootstrap";

function MyMain() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className="w-25 bg-dark">
      <Carousel>
        {horrorBook.map((horror) => {
          return (
            <Carousel.Item key={horror.asin}>
              <img src={horror.img} className="w-100" />

              <Carousel.Caption>
                <h3 className="p-2 bg-black text-light">{horror.title}</h3>
                <p className="p-2 bg-black text-light">{horror.price} $</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
}
export default MyMain;
