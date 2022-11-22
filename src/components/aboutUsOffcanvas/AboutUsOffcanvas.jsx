import styles from "./AboutUsOffcanvas.module.css";
import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AboutUsOffcanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleResteDataBase = async () => {
    const response = await axios({
      url: `${process.env.REACT_APP_API_URL}/database/reset`,
      method: "GET",
    });
    console.log(response.data.msg);
    handleClose();
  };

  return (
    <>
      <button onClick={handleShow} className={styles.button}>
        <p className={styles.buttonContent}>ABOUT THIS PROYECT</p>
      </button>

      <Offcanvas show={show} onHide={handleClose} className={styles.aboutusOffcanvasBody}>
        <Offcanvas.Header closeButton>
          <h2 className={styles.title}>About this proyect</h2>
          <button onClick={handleClose} className={styles.btnClose}></button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={styles.wrapper}>
            <hr></hr>
            <div className={styles.sectionWrapper}>
              <h3>Abstract</h3>
              <p>
                Deco Depot is an e-commerce developed by 4 students over a period of 3 weeks as a
                final proyect for de HackAcademy Coding Bootcamp. You can find more about us here:
              </p>
              <Link to="/about-this-proyect" onClick={handleClose} className={styles.links}>
                <button className={styles.navigationButtons}>About us</button>
              </Link>
            </div>
            <hr></hr>
            <div className={styles.sectionWrapper}>
              <h3>Considerations</h3>
              <p>
                As someone might have added or edited content from the page, we recomend clearing
                and reseting the data base for a better experience.
              </p>
              <button onClick={() => handleResteDataBase()} className={styles.navigationButtons}>
                Reset database
              </button>
            </div>
            <hr></hr>
            <div className={styles.sectionWrapper}>
              <h3>Navigation guide</h3>
              <p>
                We have provided a user with admin credentials. With it, you will be able to test
                all admin functionalities as well as navigate as a customer.
              </p>
              <p>Username: admin@admin.com</p> <p>Password: 1</p>
              <Link to="/login" onClick={handleClose} className={styles.links}>
                <button className={styles.navigationButtons}>Login</button>
              </Link>
            </div>
            <hr></hr>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default AboutUsOffcanvas;
