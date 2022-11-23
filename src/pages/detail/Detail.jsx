import { useState, useEffect } from "react";
import ItemDetail from "../../components/itemDetail/ItemDetail";
import axios from "axios";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  const axiosConfig = {
    url: `${process.env.REACT_APP_API_URL}/products/${slug}`,
    method: "GET",
  };

  const getProduct = async () => {
    const response = await axios(axiosConfig);
    setProduct(response.data);
  };

  useEffect(() => {
    getProduct();
  }, [slug]);

  {
    if (!product) {
      return <div>hola</div>;
    }
  }
  return <div>{product && <ItemDetail product={product} />}</div>;
}

export default ItemDetailContainer;
