import { useEffect, useState } from "react";
import axios from "axios";

function OrdersTable() {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_PORT}orders`,
        method: "GET",
        // headers: {
        //   Authorization: "Bearer " + token,
        // },
      });
      console.log(response.data.orders);
      setOrders(response.data.orders);
    };
    getOrders();
  }, []); // eslint-disable-line

  return (
    orders && (
      <>
        {orders.map((order) => {
          return <p>{order.name}</p>;
        })}
      </>
    )
  );
}

export default OrdersTable;
