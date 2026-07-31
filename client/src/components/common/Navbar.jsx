import { Link } from "react-router";

import { PATHS } from "../../router/paths";
import { useContext } from "react";
import toast from "react-hot-toast";

import AuthContext from "../../contexts/AuthContext";

function Navbar() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully.");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to={PATHS.HOME} className="text-2xl font-bold text-emerald-600">
          PharmaFlow
        </Link>

        <div className="flex items-center gap-6">
          <Link to={PATHS.HOME}>Home</Link>

          <Link to={PATHS.ABOUT}>About</Link>

          <Link to={PATHS.SERVICES}>Services</Link>

          <Link to={PATHS.MEDICINES}>Medicines</Link>

          <Link to={PATHS.CATEGORIES}>Categories</Link>

          <Link to={PATHS.OFFERS}>Offers</Link>

          <Link to={PATHS.CONTACT}>Contact</Link>

          {user ? (
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <Link
              to={PATHS.LOGIN}
              className="rounded-lg bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-700"
            >
              Login
            </Link>
          )}

          {user && (
            <span className="text-sm text-slate-600">
              {user.emailVerified ? "✅ Verified" : "⚠️ Not Verified"}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
