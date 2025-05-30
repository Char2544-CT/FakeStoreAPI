import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import { useState, useEffect } from "react";

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const apiUrl = `https://fakestoreapi.com/products`;

  const getRandomSubset = (arr, n) => {
    return arr.sort(() => 0.5 - Math.random()).slice(0, n);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(apiUrl);
        setProducts(getRandomSubset(response.data, 5)); //5 random products
      } catch (error) {
        setError("Failed to fetch products");
      }
    };
    fetchProducts();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <Carousel>
      {products.map((product) => (
        <Carousel.Item key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            style={{
              maxHeight: "300px",
              objectFit: "contain",
              margin: "0 auto",
            }}
          />
          <Carousel.Caption className="text-dark">
            <h5>{product.title}</h5>
            <p>{product.price}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
