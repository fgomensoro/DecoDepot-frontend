import styles from "./Products.module.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import GenericItem from "../../components/genericItem/GenericItem";
import { useEffect, useState } from "react";
import axios from "axios";
function Products() {
  const [products, setProducts] = useState(null);
  const [table, setTable] = useState(null);
  const [chair, setChair] = useState(null);
  const [bed, setBed] = useState(null);
  const [sofa, setSofa] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_PORT}products`,
        method: "GET",
      });
      setProducts(response.data.products);
    };
    console.log(products);
    getProducts();
  }, []);

  return (
    products && (
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
            <div className="col-8 bg-warning">
              <div className="d-flex">
                <h4 className={styles.titleRight}>Living</h4>
                <hr className={styles.line} />
                {products.map((product) => {
                  return <GenericItem product={product} />;
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  );
}

export default Products;
