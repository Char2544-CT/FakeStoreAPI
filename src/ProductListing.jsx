import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductListing() {
  const [products, setProducts] = useState([]); //Stores all Products from API
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(`Failed to fetch products: ${error.message}`);
        setLoading(false);
      });
  }, []); //Runs only once, when loaded

  if (loading) {
    return (
      <Container>
        <h3>
          <Spinner
            animation="grow"
            variant="info"
            style={{ marginRight: "15px" }}
            role="status"
          />
          Loading Products...
        </h3>
      </Container>
    );
  }

  if (error) return <p>{error}</p>;

  return (
    <Container>
      <h3>Product List</h3>
      <Row>
        {products.map((product) => (
          <Col key={product.id} className="mt-4">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {product.price}
                </Card.Subtitle>
                <Card.Text className="mt-3">
                  {product.description.length > 80
                    ? product.description.slice(0, 80) + "..."
                    : product.description}{" "}
                  {/* Truncate description if too long */}
                </Card.Text>
                <Card.Img
                  variant="bottom"
                  src={product.image}
                  alt={product.title}
                  className="mb-3"
                  style={{ maxHeight: "200px", objectFit: "contain" }}
                />
                <Button href={`/product-details/${product.id}`}>
                  Product Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductListing;
