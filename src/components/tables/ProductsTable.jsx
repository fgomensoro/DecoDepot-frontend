import { useEffect, useState } from "react";
import axios from "axios";

function ProductsTable() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_PORT}products`,
        method: "GET",
        // headers: {
        //   Authorization: "Bearer " + token,
        // },
      });
      console.log(response.data.products);
      setProducts(response.data.products);
    };
    getProducts();
  }, []); // eslint-disable-line

  return (
    products && (
      <>
        {products.map((product) => {
          return <p>{product.name}</p>;
        })}
      </>
    )
  );
}

export default ProductsTable;
