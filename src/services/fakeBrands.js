export const brands = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Black-Diamond" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Petzl" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Metolius-Climbing" },
  { _id: "5b21ca3eeb7f6fbccd471821", name: "LaSportiva" },
  { _id: "5b21ca3eeb7f6fbccd471822", name: "Beal" },
  { _id: "5b21ca3eeb7f6fbccd471823", name: "Patagonia" },
  { _id: "5b21ca3eeb7f6fbccd471824", name: "Climbing-Technology" },
];

export function getBrands() {
  return brands.filter((b) => b);
}
