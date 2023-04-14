// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import LoadingContextProvider from "./context/LoadingContext/LoadingContextProvider";

import LoginContextProvider from "./context/LoginContext/LoginContextProvider";

const App = () => {
  return (
    <LoginContextProvider>
      <LoadingContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              localStorage.getItem("token") ? <HomePage /> : <LandingPage />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />{" "}
          <Route
            path="*"
            element={
              <p className="no-page-warning">
                <span>Error 404</span> No Page Found!
              </p>
            }
          />
        </Routes>
      </LoadingContextProvider>
    </LoginContextProvider>
  );
};

export default App;

// import RootLayout from "./pages/Root";
// import ErrorPage from "./pages/ErrorPage";

// const token = localStorage.getItem("token");
// console.log(token);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: token ? <HomePage /> : <LandingPage />,
//       },
//       { path: "login", element: <Login /> },
//       { path: "signup", element: <SignUp /> },
//     ],
//   },
// ]);
