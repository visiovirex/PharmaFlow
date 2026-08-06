import { createBrowserRouter } from "react-router";

import PublicLayout from "../layouts/PublicLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../features/public/pages/Home";
import About from "../features/public/pages/About";
import Services from "../features/public/pages/Services";
import Medicines from "../features/public/pages/Medicines";
import Categories from "../features/public/pages/Categories";
import Offers from "../features/public/pages/Offers";
import Contact from "../features/public/pages/Contact";
import Login from "../features/public/pages/Login";
import Register from "../features/public/pages/Register";
import ForgotPassword from "../features/public/pages/ForgotPassword";
import NotFound from "../features/public/pages/NotFound";

import DashboardHome from "../features/dashboard/pages/DashboardHome";

import PrivateRoute from "./PrivateRoute";
import { PATHS } from "./paths";

const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <PublicLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: PATHS.ABOUT,
        element: <About />,
      },
      {
        path: PATHS.SERVICES,
        element: <Services />,
      },
      {
        path: PATHS.MEDICINES,
        element: <Medicines />,
      },
      {
        path: PATHS.CATEGORIES,
        element: <Categories />,
      },
      {
        path: PATHS.OFFERS,
        element: <Offers />,
      },
      {
        path: PATHS.CONTACT,
        element: <Contact />,
      },
      {
        path: PATHS.LOGIN,
        element: <Login />,
      },
      {
        path: PATHS.REGISTER,
        element: <Register />,
      },
      {
        path: PATHS.FORGOT_PASSWORD,
        element: <ForgotPassword />,
      },
    ],
  },

  {
    path: PATHS.DASHBOARD,
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
    ],
  },
]);

export default router;