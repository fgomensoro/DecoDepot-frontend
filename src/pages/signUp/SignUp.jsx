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
              onChange={(event) => setEmail(event.target.value)}
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

            <label htmlFor="address">Address</label>
            <input
              type="text"
              placeholder="Enter your address"
              name="address"
              className={styles.formInput}
              onChange={(event) => setAddress(event.target.value)}
            />

            <label htmlFor="phoneNumber">Phone number</label>
            <input
              type="number"
              placeholder="Enter your phone number"
              name="phoneNumber"
              className={styles.formInput}
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
