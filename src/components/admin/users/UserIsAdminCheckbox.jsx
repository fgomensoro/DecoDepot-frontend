import { useState } from "react";
import axios from "axios";

function UserIsAdminCheckbox({ user, loggedUser, getUsers }) {
  const [isAdmin, setIsAdmin] = useState(user.isAdmin);

  const handleIsAdmin = (value) => {
    setIsAdmin(!isAdmin);
    const updateIsAdmin = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/users/${user.slug}`,
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + loggedUser.token,
        },
        data: {
          isAdmin: value,
          updateIsAdmin: true,
        },
      });
      console.log(response.data.msg);

      getUsers();
    };
    updateIsAdmin();
  };

  if (user.email === "admin@admin.com") {
    return "";
  }

  return (
    <div className="mb-3 form-check">
      <input
        type="checkbox"
        className="form-check-input"
        name="featured"
        checked={isAdmin}
        onChange={() => handleIsAdmin(!isAdmin)}
      />
    </div>
  );
}

export default UserIsAdminCheckbox;
