import { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const axiosConfig = {
    url: `${process.env.REACT_APP_API_PORT}products/detail/${id}`,
    method: "GET",
  };

  const getProduct = async () => {
    const response = await axios(axiosConfig);
    setProduct(response.data.product);
  };

  useEffect(() => {
    getProduct();
  }, []);

  console.log(product);
  {
    if (!product) {
      return <div>holax</div>;
    }
  }
  return (
    <div>
      <Navbar />
      {product && <ItemDetail product={product} getProduct={getProduct} />}
      <Footer />
    </div>
  );
}

export default ItemDetailContainer;
