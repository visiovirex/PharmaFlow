import { useContext } from "react";
import { Navigate, useLocation } from "react-router";

import AuthContext from "../contexts/AuthContext";
import { PATHS } from "../router/paths";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="text-xl font-semibold">Loading...</h2>
      </div>
    );
  }

  if (!user) {
    return (
      <Navigate
        to={PATHS.LOGIN}
        replace
        state={{ from: location }}
      />
    );
  }

  return children;
}

export default PrivateRoute;