import React, { Component } from "react";

import { Link, NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
          <nav className="navbar navbar-expand-lg navbar-dark   sticky-top z-3">
            <div className="container-fluid p-2 ">
              <Link className="navbar-brand fw-bold mx-3" to="/">NEOGYM</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 w-50 d-flex flex-nowrap justify-content-around align-items-center ">
                  <li className="nav-item">
                    <NavLink  className={({ isActive }) => `nav-link ${isActive ? "active-link" : ""}`} to="/">HOME</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => `nav-link ${isActive ? "active-link" : ""}`} to="/us">WHY US</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => `nav-link ${isActive ? "active-link" : ""}`}to="/trainers">TRAINERS</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => `nav-link ${isActive ? "active-link" : ""}`} to="/registration">CONTCT US</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      </>
    );
  }
}
