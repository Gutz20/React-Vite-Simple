import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Layout, NotFound, Password, Recovery, Reset } from "./components";
import {
  About,
  Contact,
  Coverage,
  Forum,
  Home,
  Login,
  Plans,
  Profile,
  Signup,
} from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/forum",
          element: <Forum />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/plans",
          element: <Plans />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/coverage",
          element: <Coverage />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <NotFound />,
    },
    {
      path: "/password",
      element: <Password />,
      errorElement: <NotFound />,
    },
    {
      path: "/recovery",
      element: <Recovery />,
      errorElement: <NotFound />,
    },
    {
      path: "/signup",
      element: <Signup />,
      errorElement: <NotFound />,
    },
    {
      path: "/reset",
      element: <Reset />,
      errorElement: <NotFound />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
