import React from "react";
import Modal from "react-bootstrap/Modal";
import styles from "../adminCSS/AdminCSS.module.css";

function UploadingModal({ show, handleClose }) {
  return (
    <Modal className={styles.modalPosition} show={show} onHide={handleClose}>
      <Modal.Header className={`${styles.modal} d-flex justify-content-center`}>
        <Modal.Title>
          <div className="d-flex flex-column align-items-center justify-content-center">
            {" "}
            Uploading files...
          </div>
        </Modal.Title>
      </Modal.Header>
    </Modal>
  );
}

export default UploadingModal;
