import styles from "./MyAccount.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Orders from "../../components/myAccount/Orders";
import MyAccountNavigation from "./MyAccountNavigation";

function MyAccount() {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/users/${user.slug}`,
        method: "GET",
        headers: {
          Authorization: "Bearer " + user.token,
        },
      });
      setOrders(response.data.orders);
      // console.log(orders);
    };
    getUsers();
  }, []); // eslint-disable-line

  return (
    <div className="container">
      <div className={`${styles.mainContainer} row`}>
        <div className="col-12 col-lg-3">
          <div className={`${styles.leftContainer}`}>
            <MyAccountNavigation />
          </div>
        </div>

        <div className="col-12 col-lg-9">
          {orders && (
            <div className="d-flex justify-content-center">
              {orders.length > 0 && <Orders orders={orders} />}
              {orders.length === 0 && (
                <div className={`${styles.subscriptionsWrapper} `}>
                  <div className={styles.containerSubs}>
                    <p className={styles.subscriptionContent}>No orders</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
