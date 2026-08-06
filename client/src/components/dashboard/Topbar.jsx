import { useContext } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import {
  FaBars,
  FaBell,
  FaSearch,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";

import DashboardContext from "../../contexts/DashboardContext";

import AuthContext from "../../contexts/AuthContext";

function Topbar() {
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { toggleSidebar } = useContext(DashboardContext);

  const handleLogout = async () => {
    try {
      await logOutUser();

      toast.success("Logged out successfully.");

      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="text-xl text-slate-600 lg:hidden"
        >
          <FaBars />
        </button>

        <div className="relative hidden md:block">
          <FaSearch className="absolute left-3 top-3 text-slate-400" />

          <input
            type="text"
            placeholder="Search..."
            className="w-80 rounded-lg border border-slate-300 py-2 pl-10 pr-4 outline-none focus:border-emerald-600"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <button className="relative text-xl text-slate-600">
          <FaBell />

          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-3">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt="User"
              className="h-10 w-10 rounded-full object-cover"
            />
          ) : (
            <FaUserCircle className="text-4xl text-slate-500" />
          )}

          <div className="hidden text-right md:block">
            <h4 className="font-semibold">{user?.displayName || "User"}</h4>

            <p className="text-sm text-slate-500">{user?.email}</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </header>
  );
}

export default Topbar;
