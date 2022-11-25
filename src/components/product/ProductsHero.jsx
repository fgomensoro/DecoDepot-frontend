import { useState, useEffect } from "react";
import styles from "./ProductsHero.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductsHero({ category }) {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/categories`,
        method: "GET",
      });
      setCategories(response.data);
    };
    getCategories();
  }, []); // eslint-disable-line

  return (
    categories && (
      <div>
        {
          <div className={`${styles.header} d-flex justify-content-center align-items-center`}>
            <div className={styles.wrapper}>
              <h1 className={styles.bigLetter}>
                Our {!category ? "products" : category.toLowerCase()}
              </h1>
              <p>Design your home interior with your heart</p>
            </div>
          </div>
        }
        <div className={`${styles.leftColumn} col-12 `}>
          <h3 className={`${styles.titleLeft} mt-5`}>Categories</h3>
          <ul className={`${styles.list} mt-4`}>
            <li>
              <Link to="/store" className={`${styles.customNavLink} nav-link`}>
                All Products
              </Link>
            </li>
            {categories.map((category) => {
              return (
                <li key={category._id}>
                  <Link
                    to={`/store/${category.name}`}
                    className={`${styles.customNavLink} nav-link`}
                  >
                    {category.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    )
  );
}

export default ProductsHero;

/* entre la 31 y la 52 esta el problema. si borro la clase list se arregla*/
