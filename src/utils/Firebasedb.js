// Extracts data from fakeBrands and fakeEquipment and inserts into firestore

import { getBrands } from "../services/fakeBrands";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useEffect } from "react";

const Firebasedb = () => {
  const brandsCollectionRef = collection(db, "brands");

  const brands = getBrands();
  useEffect(() => {
    const insertDb = async (item) => {
      try {
        await addDoc(brandsCollectionRef, item);
      } catch (err) {
        console.error(err);
      }
    };
    for (let item of brands) {
      insertDb(item);
    }
  });
};

export default Firebasedb;
