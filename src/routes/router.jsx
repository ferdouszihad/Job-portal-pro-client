import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home/Home";
import JobDetails from "../pages/JobDetails";
import ApplicationForm from "../pages/ApplicationForm";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <h2>Not Found</h2>,
    children: [
      {
        path: "",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/jobs"),
      },
      {
        path: "/jobs/details/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/details/${params.id}`),
      },
      {
        path: "/apply/:id",
        element: (
          <PrivateRoute>
            <ApplicationForm></ApplicationForm>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/details/${params.id}`),
      },
      {
        path: "/add-jobs",
        element: <h2>AddJobs</h2>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
