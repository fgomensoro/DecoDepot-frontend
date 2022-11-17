import { useEffect, useState } from "react";
import styles from "./OrderDetail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function OrderDetail() {
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const [order, setOrder] = useState(null);

  const getOrder = async () => {
    const response = await axios({
      url: `${process.env.REACT_APP_API_URL}/orders/${id}`,
      method: "GET",
      headers: {
        Authorization: "Bearer " + user.token,
      },
    });
    setOrder(response.data);
  };

  useEffect(() => {
    getOrder();
  }, []); // eslint-disable-line
  console.log(order);
  return (
    <div>
      <h1></h1>
    </div>
  );
}

export default OrderDetail;
