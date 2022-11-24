import styles from "./EditProfile.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { storeUser } from "../../redux/userSlice";

import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EditProfile() {
  const user = useSelector((state) => state.user);

  const [show, setShow] = useState(false);
  const [phoneNumber, setNewPhoneNumber] = useState(user.phoneNumber);
  const [email, setNewEmail] = useState(user.email);
  const [address, setNewAddress] = useState(user.address);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [backendMessage, setBackendMessage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !address || !phoneNumber || !currentPassword) {
      setError(true);
      return false;
    }
    handleShow();
    const updateUser = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/users/${user.slug}`,
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + user.token,
        },
        data: {
          email,
          phoneNumber,
          address,
          currentPassword,
          newPassword,
          confirmNewPassword,
        },
      });
      if (response.data.msg) {
        return setBackendMessage(response.data.msg);
        handleClose();
      } else {
        handleClose();
        const updatedUser = { ...response.data, token: user.token };
        dispatch(storeUser(updatedUser));
      }
    };
    updateUser();
  };

  return (
    <div className={`${styles.formWrapper} mx-auto`}>
      <Modal className={styles.modalPosition} show={show} onHide={handleClose}>
        <Modal.Header className={`${styles.modal} d-flex justify-content-center`}>
          <Modal.Title>
            <div className="d-flex flex-column align-items-center justify-content-center">
              {" "}
              Updating...
            </div>
          </Modal.Title>
        </Modal.Header>
      </Modal>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="d-flex mt-4">
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your new email"
              name="email"
              className={`${styles.input} form-control`}
              value={email}
              onChange={(event) => setNewEmail(event.target.value)}
            />{" "}
          </div>
          {error && !email && <p className={styles.message}>Required field</p>}
          <div className="d-flex mt-4">
            <label className={styles.label} htmlFor="address">
              Address
            </label>
            <input
              type="text"
              placeholder="Enter your new address"
              name="address"
              className={`${styles.input} form-control`}
              value={address}
              onChange={(event) => setNewAddress(event.target.value)}
            />{" "}
          </div>
          {error && !address && <p className={styles.message}>Required field</p>}
          <div className="d-flex mt-4">
            <label className={styles.label} htmlFor="phoneNumber">
              Phone number
            </label>
            <input
              type="number"
              placeholder="Enter your new number"
              name="phoneNumber"
              className={`${styles.input} form-control`}
              value={phoneNumber}
              onChange={(event) => setNewPhoneNumber(event.target.value)}
            />{" "}
          </div>
          {error && !phoneNumber && <p className={styles.message}>Required field</p>}
          <div className="d-flex mt-4">
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your new number"
              name="password"
              className={`${styles.input} form-control`}
              value={currentPassword}
              onChange={(event) => setCurrentPassword(event.target.value)}
            />{" "}
          </div>
          {error && !currentPassword && <p className={styles.message}>Required field</p>}
          <div className="d-flex mt-4">
            <label className={styles.label} htmlFor="newPassword">
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter your new password"
              name="newPassword"
              className={`${styles.input} form-control`}
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
            />
          </div>
          <div className="d-flex mt-4">
            <label className={styles.label} htmlFor="confirmNewPassword">
              Confirm password
            </label>
            <input
              type="password"
              placeholder="Enter your new number"
              name="confirmNewPassword"
              className={`${styles.input} form-control`}
              value={confirmNewPassword}
              onChange={(event) => setConfirmNewPassword(event.target.value)}
            />
          </div>
          <p className={`${styles.message}`}>{backendMessage}</p>
          <div className={`${styles.links} d-flex justify-content-center`}>
            <button type="submit" className={`${styles.btnSave} btn btn-block`}>
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
