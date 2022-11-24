import { Link } from "react-router-dom";
import styles from "./AboutHome.module.css";
function AboutHome() {
  const baseUrl = process.env.REACT_APP_IMAGE_PATH;

  return (
    <section className="container">
      <div className={`${styles.titleContainer} d-flex`}>
        <hr className={styles.leftLine} />
        <h2 className={styles.title}>About This Project</h2>
        <hr className={styles.rightLine} />
      </div>
      <div className="row">
        <div className="col-12 col-lg-8 mb-4">
          <img className={styles.img} src={baseUrl + "aboutusHome.jpg"} alt="" />
        </div>
        <div className="col-12 col-lg-4 mb-4">
          <div className={styles.card}>
            <h4 className={styles.smallTitle}>About this project </h4>
            <p className={styles.paragraphCard}>
              Deco Depot is an e-commerce that consists of a frontend app builded in React JS, Redux
              and CSS, and an api builded in Node JS and Mongo DB. Read more about this and about
              their creators clicking the button bellow.
            </p>
            <div className="d-flex flex-row-reverse">
              {/* <button className={styles.button}> */}
              <Link className={styles.link} to={"/about_this_project"}>
                More
              </Link>
              {/* </button> */}
            </div>
          </div>
          <div className={styles.card}>
            <h4 className={styles.smallTitle}>Administrator</h4>
            <p className={styles.paragraphCard}>
              You can login with administrator permissions and have access to more data and
              functionalities. To do so try to login using <strong>admin@admin.com</strong>, the
              password is <strong>password</strong>. Click the button bellow to navigate to the
              login page
            </p>
            <div className="d-flex flex-row-reverse">
              {/* <button className={styles.button}> */}
              <Link className={styles.link} to={"/login"}>
                Login
              </Link>
              {/* </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHome;
