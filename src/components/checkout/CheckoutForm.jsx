import styles from "./CheckoutForm.module.css";
import Form from "./Form";
import OrderSummary from "./OrderSummary";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/userSlice";
import { useDispatch } from "react-redux";

function CheckoutForm() {
  const user = useSelector((state) => state.user);
  const cartStore = useSelector((state) => state.cart);
  const [total, setTotal] = useState(null);
  const dispatch = useDispatch();
  const url = `${process.env.REACT_APP_IMAGE_PATH}logo.svg`;

  useEffect(() => {
    setTotal(cartStore.total);
  });

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div className="row">
        <div className="col-12 col-lg-6">
          <Link to="/">
            <img className={styles.logo} src={url} alt="Logo" />
          </Link>
          <div className={styles.customerInfo}>
            <h2 className={`${styles.custShippingInfo} mb-4`}>Customer & shipping information</h2>
            <div>
              {user.email ? (
                <h3 className={styles.productDescription2}>{`${user.email} `}</h3>
              ) : (
                <h3 className={styles.productDescription2}>
                  Have an account?{" "}
                  <Link className={styles.links2} to="/login">
                    Login
                  </Link>{" "}
                  or{" "}
                  <Link className={styles.links2} to="/signup">
                    Create an account
                  </Link>
                </h3>
              )}
            </div>
          </div>
          <Form />
        </div>
        <div className="col-12 col-lg-1"></div>
        <div className={`${styles.col2} col-12 col-lg-5 `}>
          <OrderSummary total={total} />
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;

// decoDepotLogo.png
