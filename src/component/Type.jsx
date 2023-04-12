import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Paginate from "./common/Paginate";
import paginateRecords from "../utils/paginateRecords";
import EquipmentTable from "./EquipmentTable";
import SearchBox from "./common/SearchBox";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

const Type = () => {
  const [types, setTypes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [equipment, setEquipment] = useState([]);
  const [selected, setSelected] = useState("All Types");
  const [searchQuery, setSearchQuery] = useState();

  const typesCollectionRef = collection(db, "types");
  const equipmentCollectionRef = collection(db, "equipment");

  const getTypesList = async () => {
    try {
      const data = await getDocs(typesCollectionRef);
      const newtypes = data.docs.map((d) => ({
        ...d.data(),
        id: d.name,
      }));
      setTypes([
        { name: "All Types", _id: "dfsdfkajsdklfjakl455" },
        ...newtypes,
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
    getTypesList();
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
  else if (selected && selected !== "All Types")
    filtered = equipment.filter((e) => e.type === selected.toLowerCase());
  const newEquipment = paginateRecords(filtered, currentPage, pageSize);

  return (
    <>
      <div className="row">
        <div className="col-3 mt-3 sidebar">
          <SideBar
            data={types}
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

export default Type;
