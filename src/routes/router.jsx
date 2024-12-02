import { createBrowserRouter } from "react-router";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <h2>Not Found</h2>,
    children: [
      {
        path: "/jobs",
        element: <h2>Jobs</h2>,
      },
      {
        path: "/add-jobs",
        element: <h2>AddJobs</h2>,
      },
    ],
  },
]);

export default router;
