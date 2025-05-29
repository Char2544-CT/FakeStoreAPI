import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const DeleteModal = ({ product, showModal, handleCloseModal, onDelete }) => {
  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete From API?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <p>
              Are You Sure You Want to Delete <b>{product.title}</b> from the
              API?
            </p>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="danger" onClick={onDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
//Handles Close and Delete from API buttons and Modal.
