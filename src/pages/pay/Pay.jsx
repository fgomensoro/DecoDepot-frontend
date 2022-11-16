import OrderSummary from "../../components/checkout/OrderSummary";
import styles from "./Pay.module.css";
import { FaLock } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function pay() {
  const cartStore = useSelector((state) => state.cart);

  const [total, setTotal] = useState(null);

  useEffect(() => {
    setTotal(cartStore.total);
  });

  return (
    <div>
      <FaLock className={styles.lock} />
      <div className={`${styles.cont} container`}>
        <div className="row">
          <div className="col-12 col-lg-6 text-center"></div>
          <div className="col-12 col-lg-1"></div>
          <div className={`${styles.col2} col-12 col-lg-5 text-center`}>
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}

export default pay;
