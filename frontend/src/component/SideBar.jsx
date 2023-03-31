import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

function SideBar({ brands, selectedItem, onItemSelect }) {
  return (
    <>
      <ul className="list-group">
        {brands.map((b) => (
          <li
            onClick={() => onItemSelect(b.name)}
            key={b._id}
            className={
              selectedItem === b.name
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            <NavLink to={b.Link}>{b.name}</NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}

export default SideBar;
