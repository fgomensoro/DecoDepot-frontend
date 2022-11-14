import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../adminCSS/AdminCSS.module.css";
import AdminNav from "../adminNav/AdminNav";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

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
      setOrders(response.data.orders);
    };
    getOrders();
  }, []); // eslint-disable-line

  return (
    <div>
      <Navbar />
      <div className={`${styles.body} container`}>
        <AdminNav active={"Orders"} />
        <div className={styles.tables}>
          {orders && (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => {
                  return (
                    <tr key={order._id}>
                      <th scope="row">{index}</th>
                      <td>{order.name}</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <button>Edit</button>
                        <button>Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrdersTable;

<div>
  <Navbar />
  <div className={`${styles.body} container`}>
    <AdminNav />
  </div>
  <Footer />
</div>;
