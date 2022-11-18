import React from "react";
import styles from "./MyAccount.module.css";
import EditProfile from "../editProfile/EditProfile";
import MyAccountNavigation from "./MyAccountNavigation";

function MyAccountEdit() {
  return (
    <div className="container">
      <div className={`${styles.mainContainer} row`}>
        <div className={`${styles.leftContainer} col-12 col-md-4 my-5`}>
          <MyAccountNavigation />
        </div>
        <div className={`${styles.rightContainer} col-12 col-md-8`}>
          <EditProfile />
        </div>
      </div>
    </div>
  );
}

export default MyAccountEdit;
