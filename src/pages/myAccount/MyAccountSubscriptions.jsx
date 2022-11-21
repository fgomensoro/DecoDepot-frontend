import styles from "./MyAccount.module.css";
import { useDispatch } from "react-redux";
import MyAccountNavigation from "./MyAccountNavigation";

function MyAccount() {
  return (
    <div className="container">
      <div className={`${styles.mainContainer} row`}>
        <div className="col-12 col-md-3">
          <div className={`${styles.leftContainer}`}>
            <MyAccountNavigation />
          </div>
        </div>
        <div className={`${styles.rightContainer} col-12 col-md-9`}>
          <div className={`${styles.subscriptionsWrapper} d-flex justify-content-center`}>
            <div className={styles.containerSubs}>
              <p className={styles.subscriptionContent}>No active subscriptions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
