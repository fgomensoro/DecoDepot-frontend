import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./AdminLists.module.css";
import AdminNav from "../adminNav/AdminNav";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function UsersTable() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_PORT}users`,
        method: "GET",
        // headers: {
        //   Authorization: "Bearer " + token,
        // },
      });
      setUsers(response.data.users);
    };
    getUsers();
  }, []); // eslint-disable-line

  return (
    <div>
      <Navbar />
      <div className={`${styles.body} container`}>
        <AdminNav active={"Users"} />
        {users && (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Firstname</th>
                <th scope="col">Lastname</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Phone</th>
                <th scope="col">Admin</th>
                <th scope="col">Orders</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={user._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.admin}</td>
                    <td>{user.orders}</td>
                    <td>
                      <button>Edit</button>
                      <button>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default UsersTable;
