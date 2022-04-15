import React from "react";
import "./Food.css";
import { NavLink } from "react-router-dom";

const Food = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
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

export default Food;
