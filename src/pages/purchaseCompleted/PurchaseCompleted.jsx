import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Order from "../../components/myAccount/Order";
import axios from "axios";
import styles from "./PurchaseCompleted.module.css";

function PurchaseCompleted() {
  const user = useSelector((state) => state.user);
  const [order, setOrder] = useState(null);
  const params = useParams();

  useEffect(() => {
    const getOrder = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/orders/${params.orderId}`,
        method: "GET",
        headers: {
          Authorization: "Bearer " + user.token,
        },
      });
      setOrder(response.data);
    };
    getOrder();
  }, []); // eslint-disable-line

  return (
    order && (
      <div className={styles.container}>
        <h1>Thanks For Your Purchase!</h1>
        <div className="d-flex justify-content-center">
          <Order order={order} />
        </div>
      </div>
    )
  );
}

export default PurchaseCompleted;
