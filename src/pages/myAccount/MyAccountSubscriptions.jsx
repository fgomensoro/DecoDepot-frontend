import styles from "./MyAccount.module.css";
import { useDispatch } from "react-redux";
import MyAccountNavigation from "./MyAccountNavigation";

function MyAccount() {
  return (
    <div className="row">
      <div className="col-4">
        <div className={`${styles.container} row`}>
          <div className="col-5"></div>
          <div className="col-5">
            <MyAccountNavigation />
          </div>
          <div className="col-2"></div>
        </div>
      </div>
      <div className="col-8">
        <div className={styles.container22}>
          <div className={styles.container3}>
            <div className={styles.containerSubs}>No active subscriptions</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
