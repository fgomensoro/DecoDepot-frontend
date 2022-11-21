import OrderSummary from "../../components/checkout/OrderSummary";
import Form from "./Form";
import styles from "./Pay.module.css";
import { FaLock } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function pay() {
  const url = `${process.env.REACT_APP_IMAGE_PATH}logo.svg`;
  const user = useSelector((state) => state.user);
  const cartStore = useSelector((state) => state.cart);
  const shipAddress = useSelector((state) => state.shippingAddress);

  const [total, setTotal] = useState(null);

  useEffect(() => {
    setTotal(cartStore.total);
  });

  return (
    <div>
      <FaLock className={styles.lock} />

      <div className={`${styles.cont} container`}>
        <div className="row">
          <div className="col-12 col-lg-6">
            <Link to="/">
              <img className={styles.logo} src={url} alt="Logo" />
            </Link>
            <div className={styles.customerInfo}>
              <div className={styles.firstLine}>
                <h2 className={`${styles.custShippingInfo} mb-4`}>
                  Customer & shipping information
                </h2>
                <Link className={styles.edit} to="/checkout">
                  Edit
                </Link>
              </div>
              <div className="mt-2">
                <h3 className={styles.productDescription2}>{`${user.email} `}</h3>
              </div>
              <div className="mt-4">
                <h3
                  className={styles.productDescription2}
                >{`${shipAddress.firstName} ${shipAddress.lastName}`}</h3>
                <h3
                  className={styles.productDescription2}
                >{`${shipAddress.address},  ${shipAddress.apt}`}</h3>
                <h3
                  className={styles.productDescription2}
                >{`${shipAddress.city},  ${shipAddress.state},  ${shipAddress.zipCode}`}</h3>
                <h3
                  className={styles.productDescription2}
                >{`${shipAddress.country} ${shipAddress.phone}`}</h3>
              </div>
            </div>
            <Form />
          </div>
          <div className="col-12 col-lg-1"></div>
          <div className={`${styles.col2} col-12 col-lg-5`}>
            <OrderSummary total={total} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default pay;
