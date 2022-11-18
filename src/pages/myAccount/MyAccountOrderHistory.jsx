import styles from "./MyAccount.module.css";
import { Link } from "react-router-dom";
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
      <div className="col-8"></div>
    </div>
  );
}

export default MyAccount;
