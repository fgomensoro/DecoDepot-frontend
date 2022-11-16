import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Footer from "../../footer/Footer";

import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import styles from "../adminCSS/AdminCSS.module.css";

function CreateProduct() {
  const user = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState(null);
  const [featured, setFeatured] = useState(false);
  const [slug, setSlug] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/categories`,
        method: "GET",
        headers: {
          Authorization: "Bearer " + user.token,
        },
      });
      setCategories(response.data.categories);
    };
    getCategories();
  }, []); // eslint-disable-line

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    const formData = new FormData(e.target);
    const response = await axios({
      url: `${process.env.REACT_APP_API_URL}/products`,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + user.token,
      },
      data: formData,
    });
    if (response.data.msg === "OK") {
      navigate("/admin/products");
    } else {
      return setMessage(response.data.msg);
    }
  };
  return (
    categories && (
      <div>
        <div className={styles.body + " container"}>
          <form className="mt-5" encType="multipart/form-data" action="" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows="3"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input
                type="number"
                className="form-control"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Stock</label>
              <input
                type="number"
                className="form-control"
                name="stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
            <select
              className="form-select"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Categories</option>
              {categories.map((category, index) => {
                return (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
            <div className="mb-3">
              <label className="form-label">Slug</label>
              <input
                type="text"
                className="form-control"
                name="slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <input
                className="form-control"
                name="image1"
                type="file"
                // id="formFile"
              />
            </div>
            <div className="mt-3">
              <input
                className="form-control"
                name="image2"
                type="file"
                // id="formFile"
              />
            </div>
            <div className="mt-3">
              <input
                className="form-control"
                name="image3"
                type="file"
                // id="formFile"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="featured"
                value={featured}
                onChange={() => setFeatured(!featured)}
              />
              <label className="form-check-label">Featured</label>
            </div>
            <p className={styles.message}>{message}</p>
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </form>
        </div>

        <Footer />
      </div>
    )
  );
}

export default CreateProduct;
