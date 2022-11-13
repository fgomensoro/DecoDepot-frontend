import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className={styles.footerContainer}>
      {/* <div className={`${styles.gradient} `}>
        <div className="container">
          <div className={`${styles.sloganWrapper}`}>
            <p className={styles.slogan}>
              One billion toothpaste tubes are thrown out each year We want to end this plastic
              waste, give you a healthier smile, and build the world's most sustainable oral care
              company.
            </p>
          </div>
        </div>
      </div> */}
      <div className={`${styles.backGrey} container-fluid`}>
        <div className="container ">
          <footer className="py-5">
            <div className="d-flex justify-content-between">
              <p>Subscribe to get 10% off on your first order</p>
              <div>
                <i className="bi bi-instagram mx-1"></i>
                <i className="bi bi-tiktok mx-1"></i>
                <i className="bi bi-twitter mx-1"></i>
                <i className="bi bi-facebook mx-1"></i>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-6 col-md-2 mb-3 ">
                <h5 className={styles.listTitles}>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link
                      to="/"
                      className={`${styles.customFooterLink} nav-link nav-link p-0 text-muted`}
                    >
                      All products
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="/"
                      className={`${styles.customFooterLink} nav-link nav-link p-0 text-muted`}
                    >
                      Bedroom
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="/"
                      className={`${styles.customFooterLink} nav-link nav-link p-0 text-muted`}
                    >
                      Home office
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="/"
                      className={`${styles.customFooterLink} nav-link nav-link p-0 text-muted`}
                    >
                      Living
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-md-2 mb-3">
                <h5 className={styles.listTitles}>ABOUT</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link
                      to="/"
                      className={`${styles.customFooterLink} nav-link nav-link p-0 text-muted`}
                    >
                      About us
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/" className={`${styles.customFooterLink} nav-link p-0 text-muted`}>
                      Brands
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="/"
                      className={`${styles.customFooterLink} nav-link nav-link p-0 text-muted`}
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-md-2 mb-3">
                <h5 className={styles.listTitles}>MORE</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link
                      to="/"
                      className={`${styles.customFooterLink} nav-link nav-link p-0 text-muted`}
                    >
                      Contact us
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="/"
                      className={`${styles.customFooterLink} nav-link nav-link p-0 text-muted`}
                    >
                      Want to join our team?
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 ">
              <p>© 2022 Company, Inc. All rights reserved.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <Link to="/" className={`${styles.customFooterLink} link-dark`}>
                    Terms of service
                  </Link>
                </li>
                <li className="ms-3">
                  <Link to="/" className={`${styles.customFooterLink} link-dark`}>
                    Privacy policy
                  </Link>
                </li>
                <li className="ms-3">
                  <Link to="/" className={`${styles.customFooterLink} link-dark`}>
                    Accesibility
                  </Link>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Footer;
