import React from "react";
import { Outlet, Link } from "react-router-dom";

/**Renders sidebar related to brand or type */

function SideBar({ data, selectedItem, onItemSelect }) {
  return (
    <>
      <ul role="navigation" className="list-group">
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
