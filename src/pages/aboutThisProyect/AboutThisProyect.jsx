import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AboutThisProyect.module.css";

function AboutThisProyect() {
  const urlHero = process.env.REACT_APP_IMAGE_PATH + "aboutus9.jpg";
  const urlAvatar = process.env.REACT_APP_IMAGE_PATH + "psyduckAvatar.jpg";
  const urlMern = process.env.REACT_APP_IMAGE_PATH + "mern.jpg";
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.background}>
        <img className={styles.image} src={urlHero} alt="" />

        <div className={`${styles.titleContainer}`}>
          <h1 className={styles.title}>About this proyect</h1>
        </div>
      </div>
      <h2 className={styles.subtitle}>Deco Depot Proyect</h2>
      <div className={`${styles.sectionProyect} container my-5`}>
        <p>
          This proyect is the final outcome of a three months, +600 hours Cooding Bootcamp at Hack
          Academy, between setember and december 2022. And is not the result of a single people
          effort, instead of the coordination and time of four different people, wichs descriptions
          are attached below this section.
        </p>
      </div>
      <h2 className={styles.subtitle}>The Team</h2>
      <div className={`${styles.sectionMambers} container my-5`}>
        <div className="row">
          <div className="col-12 col-md-6 justify-content-center">
            <div className={styles.memberCard}>
              <div className={styles.cardTop}></div>
              <div className={styles.cardBottom}>
                <img className={styles.avatar} src={urlAvatar} alt="" />
                <h3 className={styles.name}>Psyduck</h3>
                <p className={styles.description}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam labore
                  maxime iure provident in eius non maiores architecto deleniti accusamus ipsam
                  consequatur, sunt doloribus nihil libero numquam, voluptatem reiciendis!
                </p>
                <i
                  className={`${styles.linkedin} bi bi-linkedin mx-1`}
                  onClick={() => navigate("/")}
                ></i>
                <i
                  className={`${styles.github} bi bi-github mx-1`}
                  onClick={() => navigate("/")}
                ></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 justify-content-center">
            <div className={styles.memberCard}>
              <div className={styles.cardTop}></div>
              <div className={styles.cardBottom}>
                <img className={styles.avatar} src={urlAvatar} alt="" />
                <h3 className={styles.name}>Psyduck</h3>
                <p className={styles.description}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam labore
                  maxime iure provident in eius non maiores architecto deleniti accusamus ipsam
                  consequatur, sunt doloribus nihil libero numquam, voluptatem reiciendis!
                </p>
                <i
                  className={`${styles.linkedin} bi bi-linkedin mx-1`}
                  onClick={() => navigate("/")}
                ></i>
                <i
                  className={`${styles.github} bi bi-github mx-1`}
                  onClick={() => navigate("/")}
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 justify-content-center">
            <div className={styles.memberCard}>
              <div className={styles.cardTop}></div>
              <div className={styles.cardBottom}>
                <img className={styles.avatar} src={urlAvatar} alt="" />
                <h3 className={styles.name}>Psyduck</h3>
                <p className={styles.description}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam labore
                  maxime iure provident in eius non maiores architecto deleniti accusamus ipsam
                  consequatur, sunt doloribus nihil libero numquam, voluptatem reiciendis!
                </p>
                <i
                  className={`${styles.linkedin} bi bi-linkedin mx-1`}
                  onClick={() => navigate("/")}
                ></i>
                <i
                  className={`${styles.github} bi bi-github mx-1`}
                  onClick={() => navigate("/")}
                ></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 justify-content-center">
            <div className={styles.memberCard}>
              <div className={styles.cardTop}></div>
              <div className={styles.cardBottom}>
                <img className={styles.avatar} src={urlAvatar} alt="" />
                <h3 className={styles.name}>Psyduck</h3>
                <p className={styles.description}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam labore
                  maxime iure provident in eius non maiores architecto deleniti accusamus ipsam
                  consequatur, sunt doloribus nihil libero numquam, voluptatem reiciendis!
                </p>
                <i
                  className={`${styles.linkedin} bi bi-linkedin mx-1`}
                  onClick={() => navigate("/")}
                ></i>
                <i
                  className={`${styles.github} bi bi-github mx-1`}
                  onClick={() => navigate("/")}
                ></i>
              </div>
            </div>
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

export default AboutThisProyect;
