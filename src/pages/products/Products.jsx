import styles from "./Products.module.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import ProductsSection from "../../components/product/ProductsSection";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductsHero from "../../components/product/ProductsHero";

function Products() {
  const [products, setProducts] = useState(null);

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

  return (
    products && (
      <div>
        <Navbar />
        <ProductsHero />
        <div className={`container-fluid px-5 mt-4`}>
          <div className={`row`}>
            <div className="col-8 mx-auto">
              <ProductsSection products={products} category="chair" />
              <ProductsSection products={products} category="table" />
              <ProductsSection products={products} category="bed" />
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
