import { useFormik } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";

const AddProduct = () => {
  const [showAlert, setShowAlert] = useState(false);

  //Yup Validation
  const validationSchema = Yup.object({
    product: Yup.string().required("Title is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Must be positive"),
    description: Yup.string().required("Describe the product"),
    category: Yup.string().required("Select category"),
  });

  //Formik
  const formik = useFormik({
    initialValues: {
      product: "",
      price: "",
      description: "",
      category: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      formik.handleReset();
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000); //Timeout after 3 secs
    },
  });

  //jsx
  return (
    <Container
      style={{
        borderRadius: "15px",
        background: "rgb(154, 172, 189)",
      }}
    >
      <Row className="justify-content-center pt-3 pb-3">
        <Col md={6}>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="product">
              <Form.Label>
                <strong>Product Title:</strong>
              </Form.Label>
              <Form.Control
                type="text"
                name="product"
                value={formik.values.product}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.product && !!formik.errors.product}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.product}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
              <Form.Label>
                <strong>$ Price:</strong>
              </Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.price && !!formik.errors.price}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.price}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>
                <strong>Description:</strong>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={
                  formik.touched.description && !!formik.errors.description
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.description}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="category">
              <Form.Label>
                <strong>Category:</strong>
              </Form.Label>
              <Form.Select
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.category && !!formik.errors.category}
              >
                <option value="">Select a category</option>
                <option value="Men's Clothing">Men's Clothing</option>
                <option value="Women's Clothing">Women's Clothing</option>
                <option value="Jewelry">Jewelry</option>
                <option value="Electronics">Electronics</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {formik.errors.category}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-2 mb-2">
              Submit
            </Button>

            {showAlert && (
              <Alert
                variant="success"
                dismissible
                onClose={() => setShowAlert(false)}
              >
                Product created successfully!
              </Alert>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProduct;
