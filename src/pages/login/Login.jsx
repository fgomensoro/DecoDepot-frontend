import React from "react";
import styles from "./Login.module.css";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { storeUser } from "../../redux/userSlice";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const url = process.env.REACT_APP_IMAGE_PATH + "login4.jpg";
  const getToken = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/users/tokens`,
      data: {
        email: email,
        password: password,
      },
    });
    if (response.data.msg) {
      return setMessage(response.data.msg);
    } else {
      dispatch(storeUser(response.data));
      return navigate("/");
    }
  };

  return (
    <div className={`${styles.mainContainer}`} style={{ backgroundImage: `url(${url})` }}>
      <div className={`${styles.formWrapper} `}>
        <div>
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={getToken}>
            <input
              type="email"
              placeholder="Enter your email"
              name="eMail"
              // className={styles.formInput}
              className={`${styles.input} form-control mb-3`}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              // className={styles.formInput}
              className={`${styles.input} form-control mb-3`}
              onChange={(event) => setPassword(event.target.value)}
            />
            <p className={styles.message}>{message}</p>
            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
            <div className="d-flex justify-content-center mt-2">
              <span>
                <Link to={"/"} className={styles.link}>
                  Home
                </Link>
              </span>
              <span>
                <Link to={"/signup"} className={styles.link}>
                  Sign Up
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
