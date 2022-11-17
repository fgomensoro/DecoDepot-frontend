import React from "react";
import styles from "./AboutUs.module.css";

function AboutUs() {
  const urlHero = process.env.REACT_APP_IMAGE_PATH + "aboutus6.jpg";
  const urlAvatar = process.env.REACT_APP_IMAGE_PATH + "psyduckAvatar.jpg";
  const urlMern = process.env.REACT_APP_IMAGE_PATH + "mern.jpg";
  return (
    <>
      <div className={styles.background}>
        <img className={styles.image} src={urlHero} alt="" />

        <div className={`${styles.textContainer}`}>
          <h1 className={styles.title}>About us and this proyect</h1>
        </div>
      </div>
      <div className={`${styles.sectionProyect} container my-5`}>
        <h2>Deco Depot Proyect</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, explicabo! Dicta,
          laudantium repellat recusandae ipsa voluptas soluta voluptatum dignissimos culpa minus
          accusantium aut, voluptatem, enim accusamus dolorem! Omnis, dicta facere! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Earum eos quas incidunt a veniam, assumenda
          nesciunt error magni eligendi quidem repellendus eum sint corporis labore ducimus
          perferendis dignissimos? Aut, a.
        </p>
      </div>
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
                <i className={`${styles.linkedin} bi bi-linkedin mx-1`}></i>
                <i className={`${styles.github} bi bi-github mx-1`}></i>
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
                <i className={`${styles.linkedin} bi bi-linkedin mx-1`}></i>
                <i className={`${styles.github} bi bi-github mx-1`}></i>
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
                <i className={`${styles.linkedin} bi bi-linkedin mx-1`}></i>
                <i className={`${styles.github} bi bi-github mx-1`}></i>
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
                <i className={`${styles.linkedin} bi bi-linkedin mx-1`}></i>
                <i className={`${styles.github} bi bi-github mx-1`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.sectionMore} container my-5`}>
        <div className="row">
          <div className="col-12 col-md-6 p-4">
            <img className={styles.imageMern} src={urlMern} alt="" />
          </div>
          <div className="col-12 col-md-6 p-4">
            <h2>Mern</h2>
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

export default AboutUs;
