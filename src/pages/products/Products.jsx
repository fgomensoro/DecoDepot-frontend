import styles from "./Products.module.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import GenericItem from "../../components/genericItem/GenericItem";

function Products() {
  return (
    <div>
      <Navbar />
      <div className={`${styles.header} d-flex justify-content-center align-items-center`}>
        <div>
          <h2>All Products</h2>
          <p>Design your home interior with your heart</p>
        </div>
      </div>
      <div className={`container-fluid px-5 mt-4`}>
        <div className={`row`}>
          <div className={`${styles.leftColumn} col-4 bg-danger`}>
            <h3 className={styles.titleLeft}>Collections</h3>
            <ul className={styles.list}>
              <li>All Products</li>
              <li>Living</li>
              <li>Bedroom</li>
              <li>Home Office</li>
            </ul>
          </div>
          <div class="col-8 bg-warning">
            <div className="d-flex">
              <h4 className={styles.titleRight}>Living</h4>
              <hr className={styles.line} />
              <GenericItem />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
