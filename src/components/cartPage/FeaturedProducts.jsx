import styles from "./OrderSummary.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Slider from "./cartPageSlider/Slider";

function ContinueToCheckout() {
  const [featured, setFeatured] = useState([]);

  const axiosConfig = {
    url: `${process.env.REACT_APP_API_URL}/products?featured=true`,
    method: "GET",
  };

  const getFeatured = async () => {
    const response = await axios(axiosConfig);
    setFeatured(response.data);
  };

  useEffect(() => {
    getFeatured();
  }, []);

  return (
    <div className={styles.otherProdContainer}>
      <Slider products={featured} title={"Featured"} />
    </div>
  );
}

export default ContinueToCheckout;
