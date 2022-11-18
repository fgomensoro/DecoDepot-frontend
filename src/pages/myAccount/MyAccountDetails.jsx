import styles from "./MyAccount.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function MyAccount() {
  const user = useSelector((state) => state.user);

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
      <div className="col-8">
        <div className={styles.container2}>
          <div className="mt-4">
            <small className={styles.title}>Name: </small>
            <small className={styles.detail}>{user.firstname}</small>
          </div>
          <div className="mt-4">
            <small className={styles.title}>Last name: </small>
            <small className={styles.detail}>{user.lastname}</small>
          </div>
          <div className="mt-4">
            <small className={styles.title}>Email: </small>
            <small className={styles.detail}>{user.email}</small>
          </div>
          <div className="mt-4">
            <small className={styles.title}>Address: </small>
            <small className={styles.detail}>{user.address}</small>
          </div>
          <div className="mt-4">
            <small className={styles.title}>Phone Number: </small>
            <small className={styles.detail}>{user.phoneNumber}</small>
          </div>
          <div className="d-flex mt-5">
            <Link className={`${styles.edit} btn btn-light`}>Edit</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
