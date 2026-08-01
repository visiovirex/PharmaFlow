import { useContext, useEffect, useState } from "react";

import axiosSecure from "../api/axiosSecure";
import AuthContext from "../contexts/AuthContext";

function useUser() {
  const { user } = useContext(AuthContext);

  const [dbUser, setDbUser] = useState(null);
  const [loading, setLoading] = useState(!!user);

  useEffect(() => {
    if (!user?.email) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);

    axiosSecure
      .get(`/users/${user.email}`)
      .then((res) => {
        setDbUser(res.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user]);

  return { dbUser, loading };
}

export default useUser;