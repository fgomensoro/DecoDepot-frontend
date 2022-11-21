import styles from "./MyAccount.module.css";
import MyAccountNavigation from "./MyAccountNavigation";

function MyAccount() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-2">
          <div className={`${styles.container}`}>
            <MyAccountNavigation />
          </div>
        </div>
        <div className="col-12 col-md-9"></div>
      </div>
    </div>
  );
}

export default MyAccount;
