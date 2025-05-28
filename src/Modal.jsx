import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const DeleteModal = ({ product, clicked, showModal, handleCloseModal }) => {
  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete From API?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {clicked && (
            <>
              <p>
                Are You Sure You Want to Delete <b>{product.title}</b> from the
                API?
              </p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="warning">Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
//Need to Connect This Modal to ProductDetails Button and DeleteProduct.jsx
