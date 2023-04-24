import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../../assets/Images/logo.png";

import LoginContext from "../../../context/LoginContext/LoginContext";

const Navbar = () => {
  const loginCtx = useContext(LoginContext);

  const logOutHandler = () => {
    loginCtx.logOutHandler();
  };
  return (
    <nav className="navbar navbar-expand lg bg-custom">
      <div className="container-fluid">
        <NavLink to="/" className=" navbar-brand py-1 mx-3">
          <img
            src={Logo}
            alt="Logo of outspot"
            width="54"
            height="54"
            className="d-inline-block align-text-center"
          />
          <span className="logo-text">OutSpot</span>
        </NavLink>
        <button
          className="navbar-toggler mx-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto py-2 mx-3 text-center">
            {!loginCtx.isLoggedIn && (
              <li className="nav-item mx-3">
                <NavLink
                  to={"/login"}
                  className="nav-link nav-link-login my-2 px-3 py-3"
                >
                  Login
                </NavLink>
              </li>
            )}
            {!loginCtx.isLoggedIn && (
              <li className="nav-item">
                <NavLink
                  to={"/signup"}
                  className="nav-link custom-nav-link nav-link-signup my-2 px-3 py-3"
                >
                  Sign Up
                </NavLink>
              </li>
            )}
            {loginCtx.isLoggedIn && (
              <li className="nav-item mx-3">
                <NavLink to="/blog/add" className="nav-link my-2 px-3 py-3">
                  Add Blog
                </NavLink>
              </li>
            )}
            {loginCtx.isLoggedIn && (
              <li className="nav-item mx-3">
                <NavLink
                  onClick={logOutHandler}
                  to="/"
                  className={`nav-link my-2 px-3 py-3 nav-link-logout`}
                >
                  Logout
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
