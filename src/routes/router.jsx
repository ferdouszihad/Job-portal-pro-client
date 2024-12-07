import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home/Home";
import JobDetails from "../pages/JobDetails";
import ApplicationForm from "../pages/ApplicationForm";
import PrivateRoute from "./PrivateRoute";
import MyApplication from "../pages/MyApplication";
import AddJob from "../pages/AddJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <h2>Not Found</h2>,
    children: [
      {
        path: "",
        element: <Home></Home>,
        loader: () => fetch("https://job-portal-server-gules.vercel.app/jobs"),
      },
      {
        path: "/jobs/details/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://job-portal-server-gules.vercel.app/jobs/details/${params.id}`
          ),
      },
      {
        path: "/apply/:id",
        element: (
          <PrivateRoute>
            <ApplicationForm></ApplicationForm>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://job-portal-server-gules.vercel.app/jobs/details/${params.id}`
          ),
      },
      {
        path: "/my-application",
        element: (
          <PrivateRoute>
            <MyApplication></MyApplication>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-jobs",
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
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
