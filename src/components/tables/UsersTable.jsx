import { useEffect, useState } from "react";
import axios from "axios";

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
      console.log(response.data.users);
      setUsers(response.data.users);
    };
    getUsers();
  }, []); // eslint-disable-line

  return (
    users && (
      <>
        {users.map((user) => {
          return <p>{user.firstname}</p>;
        })}
      </>
    )
  );
}

export default UsersTable;
