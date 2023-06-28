import { Carousel } from 'react-bootstrap';
import Image from 'next/image'

export default function Carrusel() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/images/slide1.jpg"
          alt="Imagen 1"
          width="200"
          height="200"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/images/slide1.jpg"
          alt="Imagen 2"
          width="200"
          height="200"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
