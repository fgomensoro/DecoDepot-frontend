import { useState, useEffect } from "react";
import ItemDetail from "../../components/itemDetail/ItemDetail";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const axiosConfig = {
    url: `${process.env.REACT_APP_API_URL}/products/${id}`,
    method: "GET",
  };

  const getProduct = async () => {
    const response = await axios(axiosConfig);
    setProduct(response.data);
  };

  useEffect(() => {
    getProduct();
  }, []);

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
