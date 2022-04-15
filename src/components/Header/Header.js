import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div style={{ height: "500px" }} className="header">
        <div className="content top-5">
          <h2>Best Food Waiting For Your balley</h2>
          <div className="d-flex justify-content-center mt-3 align-items-center">
            <input
              className="py-1 px-4 w-75 search-border-radius"
              type="text"
              placeholder="search here..."
            />
            <button className="btn btn-danger search-border-radius">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mb-5">
        <NavLink
          to="/breakfast"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Breakfast
        </NavLink>
        <NavLink
          to="/lunch"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Lunch
        </NavLink>
        <NavLink
          to="/dinner"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Dinner
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
