import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <Container className="d-grid gap-3 text-center">
      <Row>
        <Col>
          <h1>¿Quienes Somos?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            soluta fuga autem ut reprehenderit delectus modi labore eveniet? Vel
            voluptates ea voluptatum dicta reiciendis facere placeat, ad iste
            quam odio?
          </p>
        </Col>
        <Col>
          <h1> Preguntas frecuentes</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa,
            fuga mollitia quibusdam pariatur quasi vel ratione ipsum animi
            facilis porro quam alias error sit dignissimos voluptatem.
            Provident, temporibus consequatur?
          </p>
        </Col>
        <Col>
          <h1> Contacto</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, ab nemo tenetur eos, ad labore temporibus assumenda,
            ducimus nam magni veritatis incidunt at fugit excepturi unde beatae
            eveniet et ex?
          </p>
        </Col>
      </Row>
    </Container>
  );
}
