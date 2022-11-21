import styles from "./Products.module.css";
import ProductsSection from "../../components/product/ProductsSection";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductsHero from "../../components/product/ProductsHero";

function Products() {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/products`,
        method: "GET",
      });
      setProducts(response.data);
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/categories`,
        method: "GET",
      });
      setCategories(response.data);
    };
    getCategories();
  }, []);

  return (
    products &&
    categories && (
      <div>
        <ProductsHero />
        <div className={`container-fluid px-5 mt-4`}>
          <div className={`row`}>
            <div className="col-8 mx-auto">
              {categories.map((category) => {
                return (
                  <ProductsSection
                    key={category._id}
                    products={products}
                    category={category.name}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Products;
