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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user = useSelector((state) => state.user);
  const [number, setNewNumber] = useState(user.phoneNumber);
  const [email, setNewEmail] = useState(user.email);
  const [address, setNewAddress] = useState(user.address);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios({
      url: `${process.env.REACT_APP_API_URL}/users/63753c14d61c836e7441e1a1`,
      method: "PATCH",

      data: {
        email: e.target.eMail.value !== user.email ? e.target.eMail.value : "",
        phoneNumber: e.target.phoneNumber.value,
        address: e.target.address.value,
      },
    });

    const modifiedUser = await axios({
      url: `${process.env.REACT_APP_API_URL}/users/63753c14d61c836e7441e1a1`,
      method: "GET",
    });
    dispatch(storeUser(modifiedUser.data));
    handleShow();
    /*  return navigate(`/users/${user.firstname}`); */
  };

  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.formWrapper} `}>
        <div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header className="d-flex justify-content-center">
              <Modal.Title>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  {" "}
                  ¡Your changes have been saved!
                  <Button
                    variant="primary"
                    onClick={() => {
                      navigate(`/users/${user.firstname}`);
                    }}
                  >
                    Continue to your profile!
                  </Button>
                </div>
              </Modal.Title>
            </Modal.Header>
          </Modal>
        </div>
        <div>
          <h2 className="text-center mb-4">Edit your information</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="eMail">Enter new email</label>
            <input
              type="email"
              placeholder="Enter your new email"
              name="eMail"
              className={`${styles.input} form-control mb-3`}
              value={email}
              onChange={(event) => setNewEmail(event.target.value)}
            />
            <label htmlFor="address">Enter your new address</label>
            <input
              type="text"
              placeholder="Enter your new address"
              name="address"
              className={`${styles.input} form-control mb-3`}
              value={address}
              onChange={(event) => setNewAddress(event.target.value)}
            />
            <label htmlFor="phoneNumber">Enter your new number</label>
            <input
              type="text"
              placeholder="Enter your new number"
              name="phoneNumber"
              className={`${styles.input} form-control mb-3`}
              value={number}
              onChange={(event) => setNewNumber(event.target.value)}
            />

            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
