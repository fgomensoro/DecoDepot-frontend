import { useEffect, useState } from "react";
import styles from "../adminCSS/AdminCSS.module.css";
import { useSelector } from "react-redux";
import axios from "axios";

function OrderButtons({ order, getOrders }) {
  const user = useSelector((state) => state.user);

  const handleClick = (status) => {
    const patchOrder = async () => {
      await axios({
        url: `${process.env.REACT_APP_API_URL}/orders/${order._id}`,
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + user.token,
        },
        data: {
          status,
        },
      });
    };
    patchOrder();
    getOrders();
  };

  return (
    <>
      <select
        className={styles.select}
        onChange={(e) => handleClick(e.target.value)}
        name="state"
        id=""
        value={order.status}
      >
        <option value="Not paid">Not paid</option>
        <option value="Paid">Paid</option>
        <option value="Undelivered">Undelivered</option>
        <option value="Delivered">Delivered</option>
      </select>
    </>
  );
}

export default OrderButtons;
