import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsHero from "../../components/product/ProductsHero";
import Footer from "../../components/footer/Footer";

import axios from "axios";
import ProductsSection from "../../components/product/ProductsSection";

function ProductsCategory() {
  const [products, setProducts] = useState(null);
  const { category } = useParams();

  const getProducts = async () => {
    const response = await axios({
      url: `${process.env.REACT_APP_API_URL}/products`,
      method: "GET",
    });
    let filtredProducts = response.data.filter((product) => product.category.name === category);

    setProducts(filtredProducts);
  };

  useEffect(() => {
    getProducts();
  }, [category]);

  console.log(products);
  return (
    products && (
      <div>
        <ProductsHero getProducts={getProducts} />
        <div className={`container-fluid px-5 mt-4`}>
          <div className={`row`}>
            <div className="col-8 mx-auto">
              <ProductsSection products={products} category={category} />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ProductsCategory;
