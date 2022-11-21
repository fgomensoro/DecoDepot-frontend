import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../adminCSS/AdminCSS.module.css";
import AdminNav from "../adminNav/AdminNav";
import ProductIsFeatured from "./ProductIsFeatured";
import { BsPencilSquare, BsTrash } from "react-icons/bs";

function ProductsTable() {
  const user = useSelector((state) => state.user);
  const [products, setProducts] = useState(null);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleDelete = async (deletedProductId) => {
    const response = await axios({
      url: `${process.env.REACT_APP_API_URL}/products/${deletedProductId}`,
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + user.token,
      },
    });
    if (response.data.msg === "OK") {
      const filteredProducts = products.filter((product) => product._id !== deletedProductId);
      setProducts(filteredProducts);
    } else {
      setMessage("Failed to delete product");
    }
  };

  const getProducts = async () => {
    const response = await axios({
      url: `${process.env.REACT_APP_API_URL}/products`,
      method: "GET",
      headers: {
        Authorization: "Bearer " + user.token,
      },
    });
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []); // eslint-disable-line

  return (
    <div>
      <div className={`${styles.body} container`}>
        <AdminNav active={"Products"} />
        <div className={styles.buttonContainer}>
          <button className={styles.buttonCreate}>
            <Link className={styles.linkButtonCreate} to={"/admin/products/create"}>
              Create
            </Link>
          </button>
          <p className={styles.message}>{message}</p>
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
                    <td>
                      <ProductIsFeatured product={product} user={user} getProducts={getProducts} />
                    </td>
                    <td>
                      <button
                        className={styles.ProductsEditButton}
                        onClick={() => navigate(`${product.slug}/edit`)}
                      >
                        <BsPencilSquare />
                      </button>

                      <button
                        className={styles.ProductsDeleteButton}
                        onClick={() => handleDelete(product._id)}
                      >
                        <BsTrash />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ProductsTable;
