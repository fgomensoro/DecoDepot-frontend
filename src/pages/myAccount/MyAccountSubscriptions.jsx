import styles from "./MyAccount.module.css";
import { useDispatch } from "react-redux";
import MyAccountNavigation from "./MyAccountNavigation";

function MyAccount() {
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
          <div className={styles.container3}>
            <div className={styles.containerSubs}>No active subscriptions</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
