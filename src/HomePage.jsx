import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Carousel from "./Carousel";

function HomePage() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Welcome To The Store &#128513;</h1>
          <p>
            Here you can view, update, delete, or edit our products all from one
            simple app!
          </p>
          <p>
            <code>(For Testing Purposes Only. Testing API Used)</code>
          </p>
          <p className="text-muted">Get started down below &darr;</p>
        </Col>
      </Row>

      <Row className="mt-4 mb-4">
        <Carousel />
      </Row>

      <Row>
        <Col>
          <Button
            href={"/product-listing"}
            variant="outline-info"
            className="mt-4"
          >
            View Products
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
