import React from "react";
import styles from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [eMail, setEMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [adress, setAdress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  const createUser = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_PORT}users/signup`,
      data: {
        firstname: firstName,
        lastname: lastName,

        email: eMail,
        password: password,
        adress: adress,
        phoneNumber: phoneNumber,
        confirmPassword: confirmPassword,
      },
    });

    navigate("/login");
  };

  return (
    <div className={`${styles.mainContainer} d-flex justify-content-center `}>
      <div className={`${styles.formWrapper} p-3 `}>
        <div>
          <h2 className="text-center mb-5">Create an account</h2>{" "}
          <form className="d-flex flex-column" onSubmit={createUser}>
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              name="firstName"
              className={styles.formInput}
              onChange={(event) => setFirstName(event.target.value)}
            />

            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              name="lastName"
              className={styles.formInput}
              onChange={(event) => setLastName(event.target.value)}
            />

            <label htmlFor="eMail">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="eMail"
              className={styles.formInput}
              onChange={(event) => setEMail(event.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className={styles.formInput}
              onChange={(event) => setPassword(event.target.value)}
            />

            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              name="confirmPassword"
              className={styles.formInput}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />

            <label htmlFor="adress">Adress</label>
            <input
              type="text"
              placeholder="Enter your adress"
              name="adress"
              className={styles.formInput}
              onChange={(event) => setAdress(event.target.value)}
            />

            <label htmlFor="phoneNumber">Phone number</label>
            <input
              type="number"
              placeholder="Enter your phone number"
              name="phoneNumber"
              className={styles.formInput}
              onChange={(event) => setPhoneNumber(event.target.value)}
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

export default SignUp;
