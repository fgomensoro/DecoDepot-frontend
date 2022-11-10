import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <div className={`${styles.gradient} `}>
        <div className="container">
          <div className={`${styles.sloganWrapper}`}>
            <p className={styles.slogan}>
              One billion toothpaste tubes are thrown out each year We want to end this plastic
              waste, give you a healthier smile, and build the world's most sustainable oral care
              company.
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.backGrey} container-fluid`}>
        <div class="container ">
          <footer class="py-5">
            <div className="d-flex justify-content-between">
              <p>Subscribe to get 10% off on your first order</p>
              <div>
                <i class="bi bi-instagram mx-1"></i>
                <i class="bi bi-tiktok mx-1"></i>
                <i class="bi bi-twitter mx-1"></i>
                <i class="bi bi-facebook mx-1"></i>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-6 col-md-2 mb-3 ">
                <h5 className={styles.listTitles}>Section</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2">
                    <Link
                      to="/"
                      className={`${styles.customFooterLink} nav-link nav-link p-0 text-muted`}
                    >
                      All products
                    </Link>
                  </li>
                  <li class="nav-item mb-2">
                    <Link
                      to="/"
                      className={`${styles.customFooterLink} nav-link nav-link p-0 text-muted`}
                    >
                      Bedroom
                    </Link>
                  </li>
                  <li class="nav-item mb-2">
                    <Link
                      to="/"
                      className={`${styles.customFooterLink} nav-link nav-link p-0 text-muted`}
                    >
                      Home office
                    </Link>
                  </li>
                  <li class="nav-item mb-2">
                    <Link
                      to="/"
                      className={`${styles.customFooterLink} nav-link nav-link p-0 text-muted`}
                    >
                      Living
                    </Link>
                  </li>
                </ul>
              </div>

              <div class="col-6 col-md-2 mb-3">
                <h5 className={styles.listTitles}>ABOUT</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2">
                    <Link
                      to="/"
                      className={`${styles.customFooterLink} nav-link nav-link p-0 text-muted`}
                    >
                      About us
                    </Link>
                  </li>
                  <li class="nav-item mb-2">
                    <Link to="/" className={`${styles.customFooterLink} nav-link p-0 text-muted`}>
                      Brands
                    </Link>
                  </li>
                  <li class="nav-item mb-2">
                    <Link
                      to="/"
                      className={`${styles.customFooterLink} nav-link nav-link p-0 text-muted`}
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              <div class="col-6 col-md-2 mb-3">
                <h5 className={styles.listTitles}>MORE</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2">
                    <Link
                      to="/"
                      className={`${styles.customFooterLink} nav-link nav-link p-0 text-muted`}
                    >
                      Contact us
                    </Link>
                  </li>
                  <li class="nav-item mb-2">
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
            <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 ">
              <p>© 2022 Company, Inc. All rights reserved.</p>
              <ul class="list-unstyled d-flex">
                <li class="ms-3">
                  <Link to="/" className={`${styles.customFooterLink} link-dark`}>
                    Terms of service
                  </Link>
                </li>
                <li class="ms-3">
                  <Link to="/" className={`${styles.customFooterLink} link-dark`}>
                    Privacy policy
                  </Link>
                </li>
                <li class="ms-3">
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

{
  /* <div class="container">
  <footer class="py-5">
    <div class="row">
      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
        </ul>
      </div>

     
    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2022 Company, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
      </ul>
    </div>
  </footer>
</div>; */
}
