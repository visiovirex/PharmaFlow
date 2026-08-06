import { useState } from "react";

import DashboardContext from "./DashboardContext";

function DashboardProvider({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <DashboardContext.Provider
      value={{
        sidebarOpen,
        toggleSidebar,
        closeSidebar,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export default DashboardProvider;