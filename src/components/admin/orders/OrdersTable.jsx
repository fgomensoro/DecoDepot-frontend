import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import styles from "../adminCSS/AdminCSS.module.css";
import AdminNav from "../adminNav/AdminNav";
import OrderButtons from "./OrderButtons";
import { Link } from "react-router-dom";

function OrdersTable() {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState(null);

  const getOrders = async () => {
    const response = await axios({
      url: `${process.env.REACT_APP_API_URL}/orders`,
      method: "GET",
      headers: {
        Authorization: "Bearer " + user.token,
      },
    });
    setOrders(response.data);
  };

  useEffect(() => {
    getOrders();
  }, []); // eslint-disable-line

  return (
    <div>
      <div className={`${styles.body} row`}>
        <div className="col-4 col-md-2">
          <AdminNav active={"Orders"} />
        </div>
        <div className="col-8 col-md-10">
          <div className={styles.tables}>
            {orders && (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders &&
                    orders.map((order, index) => {
                      return (
                        <tr key={order._id}>
                          <th scope="row">{index + 1}</th>
                          <td>{order.user.email}</td>
                          <td>{order.user.address}</td>
                          <td>
                            <OrderButtons order={order} getOrders={getOrders} />
                          </td>
                          <td>
                            <Link to={`/admin/orders/${order._id}`} className={styles.btnDetail}>
                              Detail
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdersTable;
