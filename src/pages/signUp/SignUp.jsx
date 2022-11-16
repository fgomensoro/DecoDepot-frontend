import { useState } from "react";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { storeUser } from "../../redux/userSlice";
import axios from "axios";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const url = process.env.REACT_APP_IMAGE_PATH + "login3.jpg";

  const createUser = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/users/signup`,
      data: {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
        address: address,
        phoneNumber: phoneNumber,
        confirmPassword: confirmPassword,
      },
    });
    if (response.data.msg) {
      setMessage(response.data.msg);
    } else {
      dispatch(storeUser(response.data));
      navigate("/");
    }
  };

  return (
    <div className={styles.mainContainer} style={{ backgroundImage: `url(${url})` }}>
      <div className={styles.formWrapper}>
        <div>
          <h2 className="text-center mb-5">Create an account</h2>{" "}
          <form className="d-flex flex-column" onSubmit={createUser}>
            <input
              type="text"
              placeholder="Enter your first name"
              name="firstName"
              className={`${styles.input} form-control mb-3`}
              onChange={(event) => setFirstName(event.target.value)}
            />

            <input
              type="text"
              placeholder="Enter your last name"
              name="lastName"
              className={`${styles.input} form-control mb-3`}
              onChange={(event) => setLastName(event.target.value)}
            />

            <input
              type="email"
              placeholder="Enter your email"
              name="eMail"
              className={`${styles.input} form-control mb-3`}
              onChange={(event) => setEmail(event.target.value)}
            />

            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className={`${styles.input} form-control mb-3`}
              onChange={(event) => setPassword(event.target.value)}
            />

            <input
              type="password"
              placeholder="Confirm your password"
              name="confirmPassword"
              className={`${styles.input} form-control mb-3`}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />

            <input
              type="text"
              placeholder="Enter your address"
              name="address"
              className={`${styles.input} form-control mb-3`}
              onChange={(event) => setAddress(event.target.value)}
            />

            <input
              type="number"
              placeholder="Enter your phone number"
              name="phoneNumber"
              className={`${styles.input} form-control mb-3`}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
            <p className={styles.message}>{message}</p>

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
