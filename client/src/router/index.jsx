import { createBrowserRouter } from "react-router";

import PublicLayout from "../layouts/PublicLayout";
import Home from "../features/public/pages/Home";
import About from "../features/public/pages/About";
import Services from "../features/public/pages/Services";
import NotFound from "../features/public/pages/NotFound";
import Medicines from "../features/public/pages/Medicines";
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
    ],
  },
]);

export default router;
