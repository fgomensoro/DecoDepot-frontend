import Modal from "react-bootstrap/Modal";
import styles from "../adminCSS/AdminCSS.module.css";

function DeleteModal({ show, handleClose, handleDelete, deletedProductId }) {
  return (
    <Modal className={styles.modalPosition} show={show} onHide={handleClose}>
      <Modal.Header className={`${styles.modal} d-flex justify-content-center`}>
        <Modal.Title>
          <div className="d-flex flex-column align-items-center justify-content-center">
            {" "}
            Are you sure you want to remove this product? This action can't be undone...
            <div className={styles.modalButtonsContainer}>
              <button className={styles.modalBtnClose} onClick={() => handleClose()}>
                Close
              </button>
              <button
                className={styles.modalBtnDelete}
                onClick={() => handleDelete(deletedProductId)}
              >
                Delete
              </button>
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
    </Modal>
  );
}

export default DeleteModal;
