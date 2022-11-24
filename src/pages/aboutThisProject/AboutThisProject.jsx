import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AboutThisProject.module.css";

function AboutThisProject() {
  const baseURL = process.env.REACT_APP_IMAGE_PATH;

  const urlAvatar = process.env.REACT_APP_IMAGE_PATH + "psyduckAvatar.jpg";
  const urlAvatarFran = process.env.REACT_APP_IMAGE_PATH + "cv_fran_pic_lejos_1.jpeg";
  const urlMern = process.env.REACT_APP_IMAGE_PATH + "mern.jpg";
  const urlCurve = process.env.REACT_APP_IMAGE_PATH + "curveWhite.svg";
  const urlLogo = process.env.REACT_APP_IMAGE_PATH + "navLogo.png";
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.background}>
        {/* <img className={styles.image} src={urlHero} alt="" /> */}

        <div className={`${styles.titleContainer}`}>
          <h1 className={styles.title}>Our Project</h1>
        </div>
        <div className={styles.curveContainer}>
          <img className={styles.curveImg} src={urlCurve} alt="" />
        </div>
      </div>

      <div className={`${styles.firstText} container`}>
        <div className={styles.firstTextContainer}>
          <div className={styles.projectTextContainer}>
            <h2 className={styles.subtitle}>How did this project come about?</h2>
            <p className={styles.projectText}>
              This page is the result of the final project done at Hack Academy, in its Coding
              Bootcamp for full-stack Web Developer. This is an intensive course with a strong
              theoretical and practical load, it had the duration of three months and more than 600
              hours dictated full time. The objective of the final project is to put into practice
              the knowledge acquired using different technologies. During the three weeks that the
              project lasted, it took approximately 160 hours per member. This is the result of the
              effort, coordination and time of four different people, working remotely but in
              constant communication. Everything was created from scratch, including the design,
              architecture and database.
            </p>
          </div>
          <div className={styles.projectLogo}>
            <img className={styles.logo} src={urlLogo} alt="" />
          </div>
        </div>
        <div className={styles.textSectionContainer}>
          <div className={styles.textSection}>
            <h3 className={styles.sectionTitle}>Design & Development</h3>
            <p className={styles.projectText}>
              The initial development was done in Figma, to define aspects such as the MER
              (Entity-Relationship Model) and the basic structure of the project. For the design of
              our e-commerce we took ideas from other similar sites, taking the best of each one and
              adjusting them to our site.
            </p>
          </div>
          <div className={styles.textSection}>
            <h3 className={styles.sectionTitle}>Team Organization and Methodology</h3>
            <p className={styles.projectText}>
              To organize the team's tasks we used Trello to outline, assign and keep track of
              everyone's tasks, following the SCRUM methodology. Finally, Discord was the platform
              we used for constant communication and pair programming.
            </p>
          </div>
        </div>
      </div>
      <h2 className={styles.teamTitle}>Our Team</h2>
      <div className={`${styles.sectionMembers} container my-5`}>
        <div className=" d-flex flex-wrap justify-content-between">
          <div className={styles.cardBottom}>
            <div className={styles.containerAvatar}>
              <div
                className={styles.avatarFran}
                style={{ backgroundImage: `url(${urlAvatarFran})` }}
              ></div>
            </div>
            <div className={styles.nameContainer}>
              <h3 className={styles.name}>Francisco Gomensoro</h3>
              <p className={styles.developer}>Full Stack Developer Jr</p>
            </div>
            <div className={styles.linkedContainer}>
              <a href="https://www.linkedin.com/in/francisco-gomensoro-23205624/" target="_blank">
                <i className={`${styles.linkedin} bi bi-linkedin mx-1`}></i>
              </a>
            </div>
            <div className={styles.gitContainer}>
              <a href="https://github.com/fgomensoro" target="_blank">
                <i className={`${styles.github} bi bi-github mx-1`}></i>
              </a>
            </div>
          </div>

          <div className={styles.cardBottom}>
            <img className={styles.avatar} src={urlAvatar} alt="" />
            <div className={styles.nameContainer}>
              <h3 className={styles.name}>Tomás Zerbino</h3>
              <p className={styles.developer}>Full Stack Developer Jr</p>
            </div>
            <div className={styles.linkedContainer}>
              <a href="https://www.linkedin.com/in/tomas-zerbino-1285a1240/" target="_blank">
                <i className={`${styles.linkedin} bi bi-linkedin mx-1`}></i>
              </a>
            </div>
            <div className={styles.gitContainer}>
              <a href="https://github.com/TomasZerbino" target="_blank">
                <i className={`${styles.github} bi bi-github mx-1`}></i>
              </a>
            </div>
          </div>
          <div className={styles.cardBottom}>
            <img className={styles.avatar} src={baseURL + "joelCV.jpg"} alt="" />
            <div className={styles.nameContainer}>
              <h3 className={styles.name}>Joel Dominguez</h3>
              <p className={styles.developer}>Full Stack Developer Jr</p>
            </div>
            <div className={styles.linkedContainer}>
              <a href="https://www.linkedin.com/in/joeldominguez89/" target="_blank">
                <i className={`${styles.linkedin} bi bi-linkedin mx-1`}></i>
              </a>
            </div>
            <div className={styles.gitContainer}>
              <a href="https://github.com/J-DomiNus" target="_blank">
                <i className={`${styles.github} bi bi-github mx-1`}></i>
              </a>
            </div>
          </div>

          <div className={styles.cardBottom}>
            <img className={styles.avatar} src={urlAvatar} alt="" />
            <div className={styles.nameContainer}>
              <h3 className={styles.name}>Germán Delgado</h3>
              <p className={styles.developer}>Full Stack Developer Jr</p>
            </div>
            <div className={styles.linkedContainer}>
              <a href="" target="_blank">
                <i className={`${styles.linkedin} bi bi-linkedin mx-1`}></i>
              </a>
            </div>
            <div className={styles.gitContainer}>
              <a href="https://github.com/German-uruguay" target="_blank">
                <i className={`${styles.github} bi bi-github mx-1`}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center my-5">MER</h2>
      <h2 className="text-center my-5">TECHNOLOGIES</h2>
      <div className={`${styles.sectionTechs} container`}>
        <div className={styles.tech}>
          <div className={styles.logoContainer}>
            <img className={styles.techLogos} src={baseURL + "javascript-icon.png"} alt="" />
            <p className={styles.techName}>JavaScript</p>
          </div>
          <div className={styles.logoContainer}>
            <img className={styles.techLogos} src={baseURL + "react4.png"} alt="" />
            <p className={styles.techName}>React.js</p>
          </div>

          <div className={styles.logoContainer}>
            <img className={styles.techLogos} src={baseURL + "redux.png"} alt="" />
            <p className={styles.techName}>Redux</p>
          </div>
          <div className={styles.logoContainer}>
            <img className={styles.techLogosMongo} src={baseURL + "mongo2.png"} alt="" />
            <p className={styles.techName}>MongoDB</p>
          </div>
          <div className={styles.logoContainer}>
            <img className={styles.techLogos} src={baseURL + "github.png"} alt="" />
            <p className={styles.techName}>GitHub</p>
          </div>
          <div className={styles.logoContainer}>
            <img className={styles.techLogos} src={baseURL + "css5.png"} alt="" />
            <p className={styles.techName}>CSS</p>
          </div>
          <div className={styles.logoContainer}>
            <img className={styles.techLogos} src={baseURL + "Node.js-Logo.png"} alt="" />
            <p className={styles.techName}>Node.js</p>
          </div>
          <div className={styles.logoContainer}>
            <img className={styles.techLogos} src={baseURL + "bootstrap.jfif"} alt="" />
            <p className={styles.techName}>Bootstrap</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutThisProject;
