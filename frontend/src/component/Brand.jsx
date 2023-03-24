import React, { useState, useEffect } from "react";
import axios from "axios";
import { registerCustomQueryHandler } from "puppeteer";

const Brand = () => {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://127.0.0.1:3000/black");
      setRecords(data);
    };
    fetchData();
  }, []);
  return <h1>{console.log(records)}</h1>;
};

export default Brand;
