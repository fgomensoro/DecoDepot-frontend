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
    <div className="row">
      <div className="col-2">
        <div className={`${styles.container} row`}>
          <div className="col-sm-8 mx-5">
            <MyAccountNavigation />
          </div>
        </div>
      </div>

      <div className={`${styles.column8} col-10`}>
        <div className={styles.cont11}>
          {orders && (
            <div>
              {orders.length > 0 && <Orders orders={orders} />}
              {orders.length === 0 && (
                <div className={styles.container22}>
                  <div className={styles.container4}>
                    <div className={styles.containerSubs}>No orders</div>
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
