import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function OnlyUser({ user, redirectPath = "/login" }) {
  const notify = () => toast("You must be registered to access this action");
  if (!user) {
    return (
      <>
        {notify()}
        <Navigate to={redirectPath} replace />
      </>
    );
  }
  return <Outlet />;
}

export default OnlyUser;
