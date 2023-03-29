import { getEquipment } from "../services/fakeEquipment";
import { db } from "../config/firebase";
const Firebasedb = () => {
  const equipment = getEquipment();

  var batch = db.batch();
  equipment.forEach((e) => {
    batch.set(db.doc(`brands/${e}`));
  });

  batch
    .commit()
    .then((response) => {
      console.log("Success");
    })
    .catch((err) => console.error(err));
};

export default Firebasedb;
