import styles from "./ProductsSection.module.css";
import GenericItem from "../genericItem/GenericItem";

function ProductsSection({ products, category }) {
  return (
    <div>
      <div className="d-flex">
        <h4 className={styles.titleRight}>{`${category}s`}</h4>
        <hr className={styles.line} />
      </div>
      <div className="d-flex flex-wrap justify-content-center ">
        {products
          .filter((product) => product.category.name === category)
          .map((product, index) => {
            return (
              <div key={index} className="mx-4">
                <GenericItem product={product} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ProductsSection;
