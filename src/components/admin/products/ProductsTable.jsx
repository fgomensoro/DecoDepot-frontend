import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "../tablesCSS/AdminTables.module.css";
import AdminNav from "../adminNav/AdminNav";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

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
      setProducts(response.data.products);
    };
    getProducts();
  }, []); // eslint-disable-line

  return (
    <div>
      <Navbar />
      <div className={`${styles.body} container`}>
        <AdminNav active={"Products"} />
        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            <Link className={styles.link} to={"/admin/products/create"}>
              Create
            </Link>
          </button>
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
      </div>
      <Footer />
    </div>
  );
}

export default ProductsTable;
