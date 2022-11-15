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

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios(axiosConfig);
      setProduct(response.data.product);
    };
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
      {product && <ItemDetail product={product} />}
      <Footer />
    </div>
  );
}

export default ItemDetailContainer;
