import styles from "./MyAccount.module.css";
import MyAccountNavigation from "./MyAccountNavigation";

function MyAccount() {
  return (
    <div className="container">
      <div className={`${styles.mainContainer} row`}>
        <div className="col-12 col-md-2">
          <div className={`${styles.leftContainer}`}>
            <MyAccountNavigation />
          </div>
        </div>
        <div className="col-12 col-md-9"></div>
      </div>
    </div>
  );
}

export default MyAccount;
