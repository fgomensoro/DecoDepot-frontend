import React from "react";
import styles from "./MyAccount.module.css";
import EditProfile from "../editProfile/EditProfile";
import MyAccountNavigation from "./MyAccountNavigation";

function MyAccountEdit() {
  return (
    <div className="container">
      <div className={`${styles.mainContainer} row`}>
        <div className="col-12 col-md-3">
          <div className={`${styles.leftContainer}`}>
            <MyAccountNavigation />
          </div>
        </div>

        <div className={`${styles.rightContainer} col-12 col-md-9`}>
          <EditProfile />
        </div>
      </div>
    </div>
  );
}

export default MyAccountEdit;
