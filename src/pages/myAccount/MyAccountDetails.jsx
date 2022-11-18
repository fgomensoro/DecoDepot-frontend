import styles from "./MyAccount.module.css";
import { Link } from "react-router-dom";

function MyAccount() {
  return (
    <div className="row">
      <div className="col-4">
        <div className={`${styles.container} row`}>
          <div className="col-5"></div>
          <div className="col-5">
            <Link className={styles.link} to="/myaccount_details">
              Account Details
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
            <Link className={styles.link} onClick={() => handleLogout()} to="/">
              Log Out
            </Link>
           
          </div>
          <div className="col-2"></div>
        </div>
      </div>
      <div className="col-8"></div>
    </div>
  );
}

export default MyAccount;
