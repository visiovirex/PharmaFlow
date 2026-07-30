import {
  createBrowserRouter,
} from "react-router";

import PublicLayout from "../layouts/PublicLayout";
import Home from "../features/public/pages/Home";
import NotFound from "../features/public/pages/NotFound";
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
    ],
  },
]);

export default router;