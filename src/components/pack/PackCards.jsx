import styles from "./Pack.module.css";
import PackCard from "./PackCard";
import { useState } from "react";

function PackCards({ packs }) {
  // const [products, setProducts] = useState([]);
  // setProducts(packs.products);
  // console.log(products);

  return packs.products.map((product) => {
    return <PackCard key={product._id} product={product} />;
  });
}

export default PackCards;
