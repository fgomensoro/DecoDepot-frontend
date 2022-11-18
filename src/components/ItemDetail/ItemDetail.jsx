import { useState, useEffect } from "react";
import styles from "./ItemDetail.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleCart } from "../../redux/offCanvasSlice";
import { addItem } from "../../redux/cartSlice";

function ItemDetail({ product, getProduct }) {
  const [similar, setSimilar] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: product._id,
        name: product.name,
        qty: 1,
        image: product.images[2],
        price: product.price,
        slug: product.slug,
      }),
    );
    dispatch(toggleCart());
  };

  const handleGetProduct = async (slug) => {
    getProduct();
    navigate(`/products/${slug}`);
  };

  const axiosConfig = {
    url: `${process.env.REACT_APP_API_URL}/products?category=${product.category._id}&limit=3`,
    method: "GET",
  };

  useEffect(() => {
    const getSimilar = async () => {
      const response = await axios(axiosConfig);
      setSimilar(response.data);
    };
    getSimilar();
  }, [product]);

  return (
    <div className={`${styles.detail} container`}>
      <div className={styles.imgContainer}>
        <img
          className={styles.img}
          src={process.env.REACT_APP_IMAGE_PATH + product.images[1]}
          alt=""
        />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.nameContainer}>
          <h2 className={styles.name}>{product.name}</h2>
          <p className={styles.category}>{product.category.name}</p>
        </div>
        <p className={styles.description}>{product.description}</p>
        <button className={styles.btn} onClick={handleAddToCart}>
          Add to cart
        </button>

        <h3 className={styles.similarTitle}>You might also like</h3>
        <div className={styles.itemsContainer}>
          {similar &&
            similar.map((prod) => {
              return (
                <div key={prod._id} className={styles.similar}>
                  <div className={styles.similarImgContainer}>
                    <img
                      className={styles.similarImg}
                      src={process.env.REACT_APP_IMAGE_PATH + prod.images[0]}
                      alt=""
                    />
                  </div>

                  <div className="text-start py-2 px-1">
                    <button
                      onClick={() => handleGetProduct(prod.slug)}
                      className={styles.similarBtn}
                    >
                      See more
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
