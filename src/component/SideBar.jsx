import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function SideBar({ data, selectedItem, onItemSelect }) {
  return (
    <>
      <ul className="list-group side-bar">
        {data.map((d) => (
          <li
            onClick={() => onItemSelect(d.name)}
            key={d._id}
            className={
              selectedItem === d.name
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            <Link to={d.Link}>{d.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}

export default SideBar;
