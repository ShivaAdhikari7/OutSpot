import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
