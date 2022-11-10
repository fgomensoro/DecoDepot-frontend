import React from "react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [eMail, setEMail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const createUser = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_PORT}api/signup`,
      data: {
        firstname: firstName,
        lastname: lastName,

        email: eMail,
        password: password,
        adress: adress,
        phoneNumber: phoneNumber,
      },
    });

    navigate("/");
  };

  return (
    <div className={`${styles.mainContainer} d-flex justify-content-center `}>
      <div className={`${styles.formWrapper} p-3 `}>
        <div>
          <h2 className="text-center mb-5">Login</h2>{" "}
          <form className="d-flex flex-column" onSubmit={createUser}>
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

            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
