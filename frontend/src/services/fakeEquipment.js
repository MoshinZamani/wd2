export const equipment = [
  { _id: "5b21ca3eeb7f6fbccd472812", name: "Helmet", brand: "Black-Diamond" },
  { _id: "5b21ca3eeb7f6fbccd472818", name: "ATC Guid", brand: "Black-Diamond" },
  { _id: "5b21ca3eeb7f6ffccd472812", name: "Helmet", brand: "Petzl" },
  { _id: "5b21ca3eeb7f6fbccd472814", name: "Reverso 3", brand: "Petzl" },
  { _id: "5b21ca3eeb7f6fbccd472820", name: "BRD", brand: "Metolius-Climbing" },
  {
    _id: "5b21ca3eeb7c6fbccd472812",
    name: "Helmet",
    brand: "Metolius-Climbing",
  },
  {
    _id: "5b21ca3eeb7f6fbccd472821",
    name: "Katana Races",
    brand: "LaSportiva",
  },
  { _id: "5b21ca3eeb7f6fbccd475812", name: "Helmet", brand: "LaSportiva" },
  { _id: "5b21ca3eeb7f6fbccd472822", name: "Air Force", brand: "Beal" },
  { _id: "5b21ca3eeb7f6fbccd462812", name: "Helmet", brand: "Beal" },
  { _id: "5b21ca3eeb7f6fbccd472823", name: "Pants", brand: "Patagonia" },
  { _id: "5b21ca1eeb7f6fbccd472812", name: "Helmet", brand: "Patagonia" },
  {
    _id: "5b21ca3eeb7f6fbccd472824",
    name: "Click Up",
    brand: "Climbing-Technology",
  },
  {
    _id: "5b21ca3reb7f6fbccd472812",
    name: "Helmet",
    brand: "Climbing-Technology",
  },
];

export function getEquipment() {
  return equipment.map((e) => e);
}
