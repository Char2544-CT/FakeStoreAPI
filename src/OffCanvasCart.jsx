import Offcanvas from "react-bootstrap/Offcanvas";

const OffCanvasCart = ({ product, showOffCanvas, handleCloseOffCanvas }) => {
  return (
    <>
      <Offcanvas show={showOffCanvas} onHide={handleCloseOffCanvas}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{product.title} Added to Cart!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>
            <strong>{product.price}</strong> Added to shopping total ❗
          </p>
          <p>Thank you :)</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvasCart;
