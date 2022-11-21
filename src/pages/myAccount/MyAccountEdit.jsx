import React from "react";
import styles from "./MyAccount.module.css";
import EditProfile from "../editProfile/EditProfile";
import MyAccountNavigation from "./MyAccountNavigation";

function MyAccountEdit() {
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
        <div className={`${styles.cont11}`}>
          <EditProfile />
        </div>
      </div>
    </div>
  );
}

export default MyAccountEdit;
