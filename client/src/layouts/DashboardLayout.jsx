import { Outlet } from "react-router";
import { useContext } from "react";

import DashboardProvider from "../contexts/DashboardProvider";
import DashboardContext from "../contexts/DashboardContext";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

function DashboardContent() {
  const { sidebarOpen, closeSidebar } = useContext(DashboardContext);

  return (
    <div className="flex min-h-screen bg-slate-100">
      {sidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function DashboardLayout() {
  return (
    <DashboardProvider>
      <DashboardContent />
    </DashboardProvider>
  );
}

export default DashboardLayout;