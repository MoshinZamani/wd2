import React, { useState, useEffect } from "react";
import { Outlet, NavLink, useParams } from "react-router-dom";
import SideBar from "./SideBar";
import Paginate from "./common/Paginate";
import paginateRecords from "../utils/paginateRecords";
import { getBrands } from "./../services/fakeBrands";
import { getEquipment } from "./../services/fakeEquipment";
import EquipmentTable from "./EquipmentTable";

const Brand = () => {
  const newbrands = [{ name: "All Brands" }, ...getBrands()];
  const [currentPage, setCurrentPage] = useState(1);
  const [brands, setBrands] = useState(newbrands);
  const [equipment, setEquipment] = useState(getEquipment());
  const [selected, setSelected] = useState("All Brands");
  const pageSize = 8;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemSelect = (selected) => {
    setSelected(selected);
    setCurrentPage(1);
  };

  const filtered =
    selected && selected !== "All Brands"
      ? equipment.filter((e) => e.brand === selected)
      : equipment;
  console.log(filtered);
  const newEquipment = paginateRecords(filtered, currentPage, pageSize);

  return (
    <>
      <div className="row">
        <div className="col-3">
          <SideBar
            brands={brands}
            selectedItem={selected}
            onItemSelect={handleItemSelect}
          />
        </div>
        <div className="col">
          <EquipmentTable equipment={newEquipment} />
          <Paginate
            itemsCount={filtered.length}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
};

export default Brand;
