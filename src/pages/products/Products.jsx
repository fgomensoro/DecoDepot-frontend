import styles from "./Products.module.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import ProductsSection from "../../components/productsSection/ProductsSection";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_PORT}/products`,
        method: "GET",
      });
      setProducts(response.data);
    };
    getProducts();
  }, []);

  return (
    products && (
      <div>
        <Navbar />
        <div className={`${styles.header} d-flex justify-content-center align-items-center`}>
          <div className={styles.wrapper}>
            <h1 className={styles.bigLetter}>Products</h1>
            <p>Design your home interior with your heart</p>
          </div>
        </div>
        <div className={`container-fluid px-5 mt-4`}>
          <div className={`row`}>
            <div className={`${styles.leftColumn} col-4 `}>
              <h3 className={styles.titleLeft}>Categories</h3>
              <ul className={styles.list}>
                <li>
                  <Link to="/store" className={`${styles.customNavLink} nav-link`}>
                    Tables
                  </Link>
                </li>
                <li>
                  <Link to="/store" className={`${styles.customNavLink} nav-link`}>
                    Chairs
                  </Link>
                </li>
                <li>
                  <Link to="/store" className={`${styles.customNavLink} nav-link`}>
                    Beds
                  </Link>
                </li>
                <li>
                  <Link to="/store" className={`${styles.customNavLink} nav-link`}>
                    Sofas
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-8  ">
              <div className="d-flex">
                <h4 className={styles.titleRight}>Tables</h4>
                <hr className={styles.line} />
              </div>
              <ProductsSection products={products} category="chair" />
              <div className="d-flex">
                <h4 className={styles.titleRight}>Chairs</h4>
                <hr className={styles.line} />
              </div>
              <ProductsSection products={products} category="table" />
              <div className="d-flex">
                <h4 className={styles.titleRight}>Beds</h4>
                <hr className={styles.line} />
              </div>
              <ProductsSection products={products} category="bed" />
              <div className="d-flex">
                <h4 className={styles.titleRight}>Sofas</h4>
                <hr className={styles.line} />
              </div>
              <ProductsSection products={products} category="sofa" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  );
}

export default Products;
