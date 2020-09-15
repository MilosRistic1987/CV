import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import logo from "../utilites/img/logo1.svg";

const NavBar = () => {
  const history = useHistory();
  return (
    <div className="navBar">
      <div className="nav">
        <div className="navLogo">
          <img src={logo} alt="logo" onClick={() => history.push("/")} />
        </div>
        <div className="navLinks">
          <ul className="navList">
            <li>
              <NavLink activeClassName="active" to="/home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/projects">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/interest">
                Interest
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
