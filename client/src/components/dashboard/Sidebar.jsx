import useUser from "../../hooks/useUser";
import { sidebarMenus } from "../../data/sidebarMenus";

import { useContext } from "react";
import { FaTimes } from "react-icons/fa";

import DashboardContext from "../../contexts/DashboardContext";

import { Link } from "react-router";

// import { PATHS } from "../../router/paths";

function Sidebar() {
  const { sidebarOpen, closeSidebar } = useContext(DashboardContext);
  const { dbUser, loading } = useUser();

  if (loading) {
    return (
      <aside className="flex h-screen w-72 items-center justify-center bg-emerald-700 text-white">
        Loading...
      </aside>
    );
  }

  const role = dbUser?.role || "cashier";

  const menuItems = sidebarMenus[role] || [];

  return (
    <aside
      className={`
    fixed z-50 h-screen w-72 bg-emerald-700 text-white
    transition-transform duration-300
    lg:static lg:translate-x-0
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
  `}
    >
      <div className="border-b border-emerald-600 p-6">
        <h1 className="text-3xl font-bold">PharmaFlow</h1>

        <div className="flex justify-end p-2 lg:hidden">
          <button onClick={closeSidebar}>
            <FaTimes className="text-xl" />
          </button>
        </div>

        <p className="mt-1 text-sm text-emerald-100">Pharmacy ERP</p>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-emerald-600"
            >
              <Icon className="text-lg" />

              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
