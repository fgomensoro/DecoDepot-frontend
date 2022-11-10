import React from "react";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className={`${styles.mainContainer} d-flex justify-content-center `}>
      <div className={`${styles.formWrapper} p-3 `}>
        <div>
          <h2 className="text-center mb-5">Create an account</h2>{" "}
          <form action="" className="d-flex flex-column ">
            <label htmlFor="">First name</label>
            <input type="text" className={styles.formInput} />
            <label htmlFor="">Last name</label>
            <input type="text" className={styles.formInput} />
            <label htmlFor="">Email</label>
            <input type="email" className={styles.formInput} />
            <label htmlFor="">Passwprd</label>
            <input type="password" className={styles.formInput} />
            <label htmlFor="">Adress</label>
            <input type="text" className={styles.formInput} />

            <label htmlFor="">Phone number</label>
            <input type="number" className={styles.formInput} />
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
