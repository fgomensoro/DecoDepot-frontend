import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./AdminLists.module.css";

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
    <>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Create</button>
      </div>
      {products && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Stock</th>
              <th scope="col">Price</th>
              <th scope="col">Slug</th>
              <th scope="col">Category</th>
              <th scope="col">Featured</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return (
                <tr key={product._id}>
                  <th scope="row">{index}</th>
                  <td>{product.name}</td>
                  <td>{product.images[0]}</td>
                  <td>{product.stock}</td>
                  <td>{product.price}</td>
                  <td>{product.slug}</td>
                  <td>{product.category.name}</td>
                  <td>{product.featured}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default ProductsTable;
