import styles from "./MyAccount.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";

function MyAccountNavigation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <>
      <Link className={styles.link} to="/myaccount_details">
        Account Details
      </Link>
      <div className={styles.line}></div>
      <Link className={styles.link} to="/myaccount_edit">
        Edit Account
      </Link>
      <div className={styles.line}></div>
      <Link className={styles.link} to="/myaccount_subscriptions">
        Subscriptions
      </Link>
      <div className={styles.line}></div>
      <Link className={styles.link} to="/myaccount_orderhistory">
        Order History
      </Link>
      <div className={styles.line}></div>
      <Link className={styles.link} onClick={() => handleLogout()}>
        Log Out
      </Link>
    </>
  );
}

export default MyAccountNavigation;
