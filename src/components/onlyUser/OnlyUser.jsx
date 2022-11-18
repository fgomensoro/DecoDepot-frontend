import { Navigate, Outlet } from "react-router-dom";

function OnlyUser({ user, redirectPath = "/login" }) {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}

export default OnlyUser;
