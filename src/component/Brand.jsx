import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Paginate from "./common/Paginate";
import paginateRecords from "../utils/paginateRecords";
import EquipmentTable from "./EquipmentTable";
import SearchBox from "./common/SearchBox";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

const Brand = () => {
  const [brands, setBrands] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [equipment, setEquipment] = useState([]);
  const [selected, setSelected] = useState("All Brands");
  const [searchQuery, setSearchQuery] = useState();

  const brandsCollectionRef = collection(db, "brands");
  const equipmentCollectionRef = collection(db, "equipment");

  const getBrandsList = async () => {
    try {
      const data = await getDocs(brandsCollectionRef);
      const newbrands = data.docs.map((d) => ({
        ...d.data(),
        id: d.name,
      }));
      setBrands([
        { name: "All Brands", _id: "dfsdfkajsdklfjakl454" },
        ...newbrands,
      ]);
    } catch (err) {
      console.error(err);
    }
  };

  const getEquipmentList = async () => {
    try {
      const data = await getDocs(equipmentCollectionRef);
      const newEquipment = data.docs.map((d) => ({
        ...d.data(),
        id: d.name,
      }));
      setEquipment(newEquipment);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBrandsList();
    getEquipmentList();
  }, []);

  const pageSize = 8;

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelected(null);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemSelect = (selected) => {
    setSelected(selected);
    setSearchQuery("");
    setCurrentPage(1);
  };

  let filtered = equipment;
  if (searchQuery)
    filtered = equipment.filter((e) =>
      e.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  else if (selected && selected !== "All Brands")
    filtered = equipment.filter((e) => e.brand === selected);
  const newEquipment = paginateRecords(filtered, currentPage, pageSize);

  return (
    <>
      <div className="row">
        <div className="mt-3 sidebar">
          <SideBar
            data={brands}
            selectedItem={selected}
            onItemSelect={handleItemSelect}
          />
        </div>
        <div className="col">
          <SearchBox value={searchQuery} onChange={handleSearch} />
          <EquipmentTable equipment={newEquipment} selected={selected} />
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
