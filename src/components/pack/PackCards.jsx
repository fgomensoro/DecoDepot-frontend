import PackCard from "./PackCard";
import styles from "./Pack.module.css";
import { Link } from "react-router-dom";

function PackCards({ packs }) {
  return packs.products.map((product) => {
    return (
      <Link className={styles.link} to={`/products/${product.slug}`} key={product._id}>
        <PackCard product={product} />
      </Link>
    );
  });
}

export default PackCards;
