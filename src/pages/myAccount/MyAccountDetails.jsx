import styles from "./MyAccount.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import MyAccountNavigation from "./MyAccountNavigation";

function MyAccount() {
  const user = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/users/${user.slug}`,
        method: "GET",
        headers: {
          Authorization: "Bearer " + user.token,
        },
      });
      setUserInfo(response.data);
    };
    getUsers();
  }, []); // eslint-disable-line

  return (
    userInfo && (
      <div className="container">
        <div className={`${styles.mainContainer} row`}>
          <div className="col-12 col-md-3">
            <div className={`${styles.leftContainer}`}>
              <MyAccountNavigation />
            </div>
          </div>
          <div className={`${styles.rightContainer} col-12 col-md-9`}>
            <div className={`${styles.detailsWrapper}`}>
              <div className="mb-4">
                <small className={styles.title}>Name: </small>
                <small className={styles.detail}>{userInfo.firstname}</small>
              </div>
              <div className="mb-4">
                <small className={styles.title}>Last name: </small>
                <small className={styles.detail}>{userInfo.lastname}</small>
              </div>
              <div className="mb-4">
                <small className={styles.title}>Email: </small>
                <small className={styles.detail}>{userInfo.email}</small>
              </div>
              <div className="mb-4">
                <small className={styles.title}>Address: </small>
                <small className={styles.detail}>{userInfo.address}</small>
              </div>
              <div className="mb-4">
                <small className={styles.title}>Phone Number: </small>
                <small className={styles.detail}>{userInfo.phoneNumber}</small>
              </div>
              <div className="mb-4">
                <small className={styles.title}>Number of Orders: </small>
                <small className={styles.detail}>{userInfo.orders.length}</small>
              </div>
              <div className="d-flex flex-row-reverse">
                <Link className={`${styles.edit} btn btn-light`}>Edit</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default MyAccount;
