import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import DeleteModal from "./Modal";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = `https://fakestoreapi.com/products/${id}`;
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(apiUrl);
        setProduct(response.data);
      } catch (error) {
        setError(`Error fetching product: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]); // Fetch product details when the component mounts or when the ID changes

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
          Loading Product Details...
        </h3>
      </Container>
    );
  }
  if (error) {
    return (
      <Container>
        <h3 className="text-danger">{error}</h3>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Card>
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.title}
          className="mb-3"
          style={{ maxHeight: "450px", objectFit: "contain" }}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>Price: ${product.price}</Card.Text>
          <Card.Text>Category: {product.category}</Card.Text>
          <Button variant="primary">Add to Cart</Button>{" "}
          {/*OffCanvas Would be Nice*/}
          <Button variant="danger" onClick={() => setShowModal(true)}>
            Delete from API
          </Button>{" "}
          {/*Modal Pops up confirming deletion from the API*/}
        </Card.Body>
      </Card>
      <DeleteModal
        product={product}
        clicked={true}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      />
    </Container>
  );
}

export default ProductDetails;
// This component fetches and displays the details of a product based on the ID from the URL parameters.
