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
      } else {
        handleShow();
        const updatedUser = { ...response.data, token: user.token };
        dispatch(storeUser(updatedUser));
      }
    };
    updateUser();
  };

  return (
    <div className={`${styles.formWrapper} mx-auto`}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="d-flex justify-content-center">
          <Modal.Title>
            <div className="d-flex flex-column align-items-center justify-content-center">
              {" "}
              ¡Your changes have been saved!
              <Button
                variant="primary"
                onClick={() => {
                  navigate(`/myaccount`);
                }}
              >
                Continue to your profile!
              </Button>
            </div>
          </Modal.Title>
        </Modal.Header>
      </Modal>

      <div>
        <h2 className={`${styles.title} text-center mb-4`}>Edit your information</h2>
        <form onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="email">
            Enter new email
          </label>
          <input
            type="email"
            placeholder="Enter your new email"
            name="email"
            className={`${styles.input} form-control mb-3`}
            value={email}
            onChange={(event) => setNewEmail(event.target.value)}
          />{" "}
          {error && !email && <p className={styles.message}>Required field</p>}
          <label className={styles.label} htmlFor="address">
            Enter your new address
          </label>
          <input
            type="text"
            placeholder="Enter your new address"
            name="address"
            className={`${styles.input} form-control mb-3`}
            value={address}
            onChange={(event) => setNewAddress(event.target.value)}
          />{" "}
          {error && !address && <p className={styles.message}>Required field</p>}
          <label className={styles.label} htmlFor="phoneNumber">
            Enter your new number
          </label>
          <input
            type="number"
            placeholder="Enter your new number"
            name="phoneNumber"
            className={`${styles.input} form-control mb-3`}
            value={phoneNumber}
            onChange={(event) => setNewPhoneNumber(event.target.value)}
          />{" "}
          {error && !phoneNumber && <p className={styles.message}>Required field</p>}
          <label className={styles.label} htmlFor="password">
            Current password
          </label>
          <input
            type="password"
            placeholder="Enter your new number"
            name="password"
            className={`${styles.input} form-control mb-3`}
            value={currentPassword}
            onChange={(event) => setCurrentPassword(event.target.value)}
          />{" "}
          {error && !currentPassword && <p className={styles.message}>Required field</p>}
          <label className={styles.label} htmlFor="newPassword">
            Enter your new password
          </label>
          <input
            type="password"
            placeholder="Enter your new password"
            name="newPassword"
            className={`${styles.input} form-control mb-3`}
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
          />
          <label className={styles.label} htmlFor="confirmNewPassword">
            Confirm your new password
          </label>
          <input
            type="password"
            placeholder="Enter your new number"
            name="confirmNewPassword"
            className={`${styles.input} form-control mb-3`}
            value={confirmNewPassword}
            onChange={(event) => setConfirmNewPassword(event.target.value)}
          />
          <p className={styles.message}>{backendMessage}</p>
          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
