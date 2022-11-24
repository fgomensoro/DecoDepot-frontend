import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "../adminCSS/AdminCSS.module.css";
import AdminNav from "../adminNav/AdminNav";
import ProductIsFeatured from "./ProductIsFeatured";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as iconListSolid from "@fortawesome/free-solid-svg-icons";
import DeleteModal from "./DeleteModal";

function ProductsTable() {
  const user = useSelector((state) => state.user);
  const [products, setProducts] = useState(null);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(true);
  const [deletedProductId, setDeletedProductId] = useState("2");

  const url = process.env.REACT_APP_IMAGE_PATH;

  const handleClose = () => setShow(false);
  const handleShow = (productId) => {
    setDeletedProductId(productId);
    setShow(true);
  };

  const handleDelete = async (deletedProductId) => {
    handleClose();
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
    <div className={`${styles.body} row`}>
      {deletedProductId && (
        <DeleteModal
          show={show}
          handleClose={handleClose}
          handleDelete={handleDelete}
          deletedProductId={deletedProductId}
        />
      )}
      <div className="col-4 col-md-2">
        <AdminNav active={"Products"} />
        <div className={styles.buttonContainer}>
          <button className={styles.buttonCreate}>
            <Link className={styles.linkButtonCreate} to={"/admin/products/create"}>
              Add
            </Link>
          </button>
          <p className={styles.message}>{message}</p>
        </div>
      </div>
      <div className="col-8 col-md-10">
        {products && (
          <table className={`${styles.scrollX} table`}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Images</th>
                <th scope="col">Stock</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
                <th scope="col">Featured</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => {
                return (
                  <tr key={product._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{product.name}</td>
                    <td>
                      <img
                        className={`${styles.tableImage} px-1`}
                        src={url + product.images[0]}
                        alt=""
                      />
                      <img
                        className={`${styles.tableImage} px-1`}
                        src={url + product.images[1]}
                        alt=""
                      />
                      <img
                        className={`${styles.tableImage} px-1`}
                        src={url + product.images[2]}
                        alt=""
                      />
                    </td>
                    <td>{product.stock}</td>
                    <td>{product.price}</td>
                    <td>{product.category.name}</td>
                    <td>
                      <ProductIsFeatured product={product} user={user} getProducts={getProducts} />
                    </td>
                    <td>
                      <button className={styles.buttonPencil}>
                        <Link className={styles.linkButtonEdit} to={`${product.slug}/edit`}>
                          <FontAwesomeIcon icon={iconListSolid.faEdit} />
                        </Link>
                      </button>

                      <button
                        className={styles.buttonDelete}
                        onClick={() => handleShow(product._id)}
                      >
                        <FontAwesomeIcon icon={iconListSolid.faTrash} />
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
