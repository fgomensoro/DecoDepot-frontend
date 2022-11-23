import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AboutThisProject.module.css";

function AboutThisProject() {
  const baseURL = process.env.REACT_APP_IMAGE_PATH;
  const urlHero = process.env.REACT_APP_IMAGE_PATH + "aboutus9.jpg";
  const urlAvatar = process.env.REACT_APP_IMAGE_PATH + "psyduckAvatar.jpg";
  const urlMern = process.env.REACT_APP_IMAGE_PATH + "mern.jpg";
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.background}>
        <img className={styles.image} src={urlHero} alt="" />

        <div className={`${styles.titleContainer}`}>
          <h1 className={styles.title}>About this project</h1>
        </div>
      </div>
      <h2 className={styles.subtitle}>Deco Depot Project</h2>
      <div className={`${styles.sectionProject} container my-5`}>
        <p>
          This project is the final outcome of a three months, +600 hours Coding Bootcamp at Hack
          Academy. This course lasted from September to December at fulltime pace, and for this
          final project we invested the last 3 weeks of the schedule. And is not the result of a
          single person effort, instead of the coordination and time of four different people,
          working remote but in constant communication. Everything was created from scratch,
          including the design, the architecture and the data base.
        </p>
        <p>
          Deco Depot is an e-commerce that consists of a frontend app builded in React JS, Redux,
          HTML and CSS5, and an api builded in Node JS and Mongo DB. You can login or register with
          a regular user that will allow you to 'buy' products, and you can also can login with an
          admin user that will give you access to more functionalities like creating or editing the
          products, have access to all the recorded orders and more.
        </p>
        <p>
          Feel free to navigate throughout all of this project and to try all of it's
          functionalities!
        </p>
        <p>
          And you can take a look to our linkedIn and our GitHub profiles linked in our descriptions
          bellow
        </p>
      </div>
      <h2 className={styles.subtitle}>The Team</h2>
      <div className={`${styles.sectionMembers} container my-5`}>
        <div className="row">
          <div className="col-12 col-md-6 justify-content-center">
            <div className={styles.memberCard}>
              <div className={styles.cardTop}></div>
              <div className={styles.cardBottom}>
                <img className={styles.avatar} src={urlAvatar} alt="" />
                <div className="d-flex">
                  <div className={styles.ghostBlock}></div>
                  <h3 className={styles.name}>Psyduck</h3>
                </div>
                <p className={styles.description}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam labore
                  maxime iure provident in eius non maiores architecto deleniti accusamus ipsam
                  consequatur, sunt doloribus nihil libero numquam, voluptatem reiciendis!
                </p>
                <a href="">
                  <i className={`${styles.linkedin} bi bi-linkedin mx-1`}></i>
                </a>
                <a href="">
                  <i className={`${styles.github} bi bi-github mx-1`}></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 justify-content-center">
            <div className={styles.memberCard}>
              <div className={styles.cardTop}></div>
              <div className={styles.cardBottom}>
                <img className={styles.avatar} src={urlAvatar} alt="" />
                <div className="d-flex">
                  <div className={styles.ghostBlock}></div>
                  <h3 className={styles.name}>Psyduck</h3>
                </div>
                <p className={styles.description}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam labore
                  maxime iure provident in eius non maiores architecto deleniti accusamus ipsam
                  consequatur, sunt doloribus nihil libero numquam, voluptatem reiciendis!
                </p>
                <a href="">
                  <i className={`${styles.linkedin} bi bi-linkedin mx-1`}></i>
                </a>
                <a href="">
                  <i className={`${styles.github} bi bi-github mx-1`}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 justify-content-center">
            <div className={styles.memberCard}>
              <div className={styles.cardTop}></div>
              <div className={styles.cardBottom}>
                <img className={styles.avatar} src={baseURL + "joelCV.jpg"} alt="" />
                <div className="d-flex">
                  <div className={styles.ghostBlock}></div>
                  <h3 className={styles.name}>Joel Dominguez</h3>
                </div>
                <p className={styles.description}>
                  Fullstack Web Developer Junior, that likes to play guitar on it's free time and
                  fan of Tolkien's books, Studio Ghibli's movies and rpgs. More than 15 years of
                  experience working in restaurants and as a bookseller, looking for my first
                  experience on the IT world
                </p>
                <a href="https://www.linkedin.com/in/joeldominguez89/">
                  <i className={`${styles.linkedin} bi bi-linkedin mx-1`}></i>
                </a>
                <a href="https://github.com/J-DomiNus">
                  <i className={`${styles.github} bi bi-github mx-1`}></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 justify-content-center">
            <div className={styles.memberCard}>
              <div className={styles.cardTop}></div>
              <div className={styles.cardBottom}>
                <img className={styles.avatar} src={urlAvatar} alt="" />
                <div className="d-flex">
                  <div className={styles.ghostBlock}></div>
                  <h3 className={styles.name}>Psyduck</h3>
                </div>
                <p className={styles.description}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam labore
                  maxime iure provident in eius non maiores architecto deleniti accusamus ipsam
                  consequatur, sunt doloribus nihil libero numquam, voluptatem reiciendis!
                </p>
                <a href="">
                  <i className={`${styles.linkedin} bi bi-linkedin mx-1`}></i>
                </a>
                <a href="">
                  <i className={`${styles.github} bi bi-github mx-1`}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className={styles.subtitle}>TECHNOLOGIES</h2>
      <div className={`${styles.sectionTechs} container my-5`}>
        <div className="row">
          <div className="col-6 col-md-3 d-flex justify-content-center mb-5">
            <img className={styles.techLogos} src={baseURL + "javascript-icon.png"} alt="" />
          </div>
          <div className="col-6 col-md-3 d-flex justify-content-center mb-5">
            <img className={styles.techLogos} src={baseURL + "react4.png"} alt="" />
          </div>

          <div className="col-6 col-md-3 d-flex justify-content-center mb-5">
            <img className={styles.techLogos} src={baseURL + "redux.png"} alt="" />
          </div>
          <div className="col-6 col-md-3 d-flex justify-content-center mb-5">
            <img className={styles.techLogos} src={baseURL + "bootstrap.jfif"} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-3 d-flex justify-content-center mb-5">
            <img className={styles.techLogos} src={baseURL + "github.png"} alt="" />
          </div>
          <div className="col-6 col-md-3 d-flex justify-content-center mb-5">
            <img className={styles.techLogos} src={baseURL + "css5.png"} alt="" />
          </div>
          <div className="col-6 col-md-3 d-flex justify-content-center mb-5">
            <img className={styles.techLogos} src={baseURL + "node4.png"} alt="" />
          </div>
          <div className="col-6 col-md-3 d-flex justify-content-center mb-5">
            <img className={styles.techLogos} src={baseURL + "mongo2.png"} alt="" />
          </div>
        </div>
      </div>
      <h2 className={styles.subtitle}>MER</h2>
      <div className={`${styles.sectionMore} container my-5`}>
        <div className="row">
          <div className="col-12 col-md-6 p-4">
            <img className={styles.imageMern} src={urlMern} alt="" />
          </div>
          <div className="col-12 col-md-6 p-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur sint non
              maxime, quisquam iusto esse consequatur minima id, aliquid dolor unde, vero eaque
              autem! Nostrum unde fugit officia <dolores className="lorem"></dolores>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur sint non
              maxime, quisquam iusto esse consequatur minima id, aliquid dolor unde, vero eaque
              autem! Nostrum unde fugit officia <dolores className="lorem"></dolores>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur sint non
              maxime, quisquam iusto esse consequatur minima id, aliquid dolor unde, vero eaque
              autem! Nostrum unde fugit officia <dolores className="lorem"></dolores>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutThisProject;
