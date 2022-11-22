import React from "react";
import styles from "../../components/admin/adminCSS/AdminCSS.module.css";
import AdminNav from "../../components/admin/adminNav/AdminNav";

function Admin() {
  return (
    <div className={styles.body}>
      <div className="col-2">
        <AdminNav />
      </div>
    </div>
  );
}

export default Admin;
