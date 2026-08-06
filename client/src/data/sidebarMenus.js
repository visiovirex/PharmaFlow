import {
  FaChartLine,
  FaPills,
  FaBoxes,
  FaCashRegister,
  FaTruck,
  FaUsers,
  FaFileInvoiceDollar,
  FaCog,
  FaUser,
} from "react-icons/fa";

import { PATHS } from "../router/paths";

export const sidebarMenus = {
  admin: [
    {
      name: "Dashboard",
      path: PATHS.DASHBOARD,
      icon: FaChartLine,
    },
    {
      name: "Medicines",
      path: PATHS.DASHBOARD_MEDICINES,
      icon: FaPills,
    },
    {
      name: "Inventory",
      path: PATHS.DASHBOARD_INVENTORY,
      icon: FaBoxes,
    },
    {
      name: "POS",
      path: PATHS.DASHBOARD_POS,
      icon: FaCashRegister,
    },
    {
      name: "Customers",
      path: PATHS.DASHBOARD_CUSTOMERS,
      icon: FaUsers,
    },
    {
      name: "Suppliers",
      path: PATHS.DASHBOARD_SUPPLIERS,
      icon: FaTruck,
    },
    {
      name: "Reports",
      path: PATHS.DASHBOARD_REPORTS,
      icon: FaFileInvoiceDollar,
    },
    {
      name: "Profile",
      path: PATHS.PROFILE,
      icon: FaUser,
    },
    {
      name: "Settings",
      path: PATHS.SETTINGS,
      icon: FaCog,
    },
  ],

  pharmacist: [
    {
      name: "Dashboard",
      path: PATHS.DASHBOARD,
      icon: FaChartLine,
    },
    {
      name: "Medicines",
      path: PATHS.DASHBOARD_MEDICINES,
      icon: FaPills,
    },
    {
      name: "Inventory",
      path: PATHS.DASHBOARD_INVENTORY,
      icon: FaBoxes,
    },
    {
      name: "POS",
      path: PATHS.DASHBOARD_POS,
      icon: FaCashRegister,
    },
    {
      name: "Profile",
      path: PATHS.PROFILE,
      icon: FaUser,
    },
  ],

  cashier: [
    {
      name: "Dashboard",
      path: PATHS.DASHBOARD,
      icon: FaChartLine,
    },
    {
      name: "POS",
      path: PATHS.DASHBOARD_POS,
      icon: FaCashRegister,
    },
    {
      name: "Customers",
      path: PATHS.DASHBOARD_CUSTOMERS,
      icon: FaUsers,
    },
    {
      name: "Profile",
      path: PATHS.PROFILE,
      icon: FaUser,
    },
  ],

  manager: [
    {
      name: "Dashboard",
      path: PATHS.DASHBOARD,
      icon: FaChartLine,
    },
    {
      name: "Inventory",
      path: PATHS.DASHBOARD_INVENTORY,
      icon: FaBoxes,
    },
    {
      name: "Reports",
      path: PATHS.DASHBOARD_REPORTS,
      icon: FaFileInvoiceDollar,
    },
    {
      name: "Profile",
      path: PATHS.PROFILE,
      icon: FaUser,
    },
  ],

  accountant: [
    {
      name: "Dashboard",
      path: PATHS.DASHBOARD,
      icon: FaChartLine,
    },
    {
      name: "Reports",
      path: PATHS.DASHBOARD_REPORTS,
      icon: FaFileInvoiceDollar,
    },
    {
      name: "Profile",
      path: PATHS.PROFILE,
      icon: FaUser,
    },
  ],

  storekeeper: [
    {
      name: "Dashboard",
      path: PATHS.DASHBOARD,
      icon: FaChartLine,
    },
    {
      name: "Inventory",
      path: PATHS.DASHBOARD_INVENTORY,
      icon: FaBoxes,
    },
    {
      name: "Suppliers",
      path: PATHS.DASHBOARD_SUPPLIERS,
      icon: FaTruck,
    },
    {
      name: "Profile",
      path: PATHS.PROFILE,
      icon: FaUser,
    },
  ],
};