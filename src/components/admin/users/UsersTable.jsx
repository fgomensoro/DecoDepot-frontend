import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import styles from "../adminCSS/AdminCSS.module.css";
import AdminNav from "../adminNav/AdminNav";
import UserIsAdminCheckbox from "./UserIsAdminCheckbox";

function UsersTable() {
  const loggedUser = useSelector((state) => state.user);
  const [users, setUsers] = useState(null);

  const getUsers = async () => {
    const response = await axios({
      url: `${process.env.REACT_APP_API_URL}/users`,
      method: "GET",
      headers: {
        Authorization: "Bearer " + loggedUser.token,
      },
    });
    setUsers(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []); // eslint-disable-line

  return (
    <div>
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
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={user._id}>
                    <th scope="row">{index}</th>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td>{user.phoneNumber}</td>
                    <td>
                      <UserIsAdminCheckbox
                        loggedUser={loggedUser}
                        user={user}
                        getUsers={getUsers}
                      />
                    </td>
                    <td>{user.orders}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default UsersTable;
