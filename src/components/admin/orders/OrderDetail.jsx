import { useEffect, useState } from "react";
import styles from "./OrderDetail.module.css";
import { Link, useParams } from "react-router-dom";
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
  return (
    <div className={`${styles.order} container`}>
      <h1 className="text-center">Order detail</h1>
      {order && (
        <div className={styles.table}>
          <table className="table">
            <tbody>
              <tr>
                <td className={styles.td}>User email</td>
                <td className={styles.td}>{order.user.email}</td>
              </tr>
              <tr>
                <td className={styles.td}>Address</td>
                <td className={styles.td}>
                  {order.shippingAddress.address}-{order.shippingAddress.apt}
                </td>
              </tr>
              <tr>
                <td className={styles.td}>Products</td>
                <td className={styles.td}>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Qty</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.products.map((product, index) => {
                        return (
                          <tr key={index}>
                            <td className={styles.td}>{product.name}</td>
                            <td className={styles.td}>{product.price}</td>
                            <td className={styles.td}>{product.qty}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>Status</td>
                <td className={styles.td}>{order.status}</td>
              </tr>
              <tr>
                <td className={styles.td}>Total</td>
                <td className={styles.td}>${order.total}</td>
              </tr>
            </tbody>
          </table>
          <Link to={"/admin"}>Back to Admin</Link>
        </div>
      )}
    </div>
  );
}

export default OrderDetail;
