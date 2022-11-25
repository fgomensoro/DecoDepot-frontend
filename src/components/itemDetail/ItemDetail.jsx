import { useState, useEffect } from "react";
import styles from "./ItemDetail.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SwiperItems from "./SwiperItems";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/cartSlice";
import { toggleCart } from "../../redux/offCanvasSlice";
import AddToCartButton from "../buttons/addToCartButton/AddToCartButton";

function ItemDetail({ product }) {
  const [similar, setSimilar] = useState(null);
  const navigate = useNavigate();
  const dollarUSLocale = Intl.NumberFormat("en-US");

  const getSimilar = async () => {
    const response = await axios(axiosConfig);
    setSimilar(response.data);
  };

  const handleGetProduct = async (slug) => {
    navigate(`/products/${slug}`);
  };

  const axiosConfig = {
    url: `${process.env.REACT_APP_API_URL}/products?category=${product.category._id}&limit=3&id=${product._id}`,
    method: "GET",
  };

  useEffect(() => {
    getSimilar();
  }, [product]);

  return (
    <div className={styles.background}>
      <div className={styles.nameCont}>
        <h2 className={styles.name}>{product.name}</h2>
        <SwiperItems product={product} />
      </div>

      <div className={`${styles.detail} container`}>
        <div className="text-center">
          <AddToCartButton product={product} btnClassName={"buttonBuy"} toggle={true} />
        </div>
        <div className={styles.containerRow}>
          <div className={styles.containerCol}>
            <div className={styles.infoContainer}>
              <div className={styles.nameContainer}>
                <p className={`${styles.category} mt-4 `}>{product.category.name}</p>
              </div>
              <p className={styles.description}>{product.description}</p>
              <div className={styles.nameContainer}>
                <p className={styles.price}>Price: ${dollarUSLocale.format(product.price)}</p>
              </div>
            </div>
          </div>
          <div className={styles.containerCol}>
            <h3 className={styles.similarTitle}>You might also like:</h3>
            <div className={styles.itemsContainer}>
              <div className="row">
                {similar &&
                  similar.map((prod) => {
                    return (
                      <div key={prod._id} className={`${styles.similar} col`}>
                        <div className={styles.similarImgContainer}>
                          <img
                            className={styles.similarImg}
                            src={process.env.REACT_APP_IMAGE_PATH + prod.images[0]}
                            alt="similarImg"
                          />
                        </div>
                        <div className="text-center py-2 px-1">
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
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
