import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

function SideBar({ brands, selectedItem, onItemSelect }) {
  const [records, setRecords] = useState(brands);
  return (
    <>
      <ul className="list-group">
        {records.map((r) => (
          <li
            onClick={() => onItemSelect(r.name)}
            key={r.name}
            className={
              selectedItem === r.name
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            <a>{r.name}</a>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}

export default SideBar;
