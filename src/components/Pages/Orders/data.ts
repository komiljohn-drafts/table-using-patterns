const sample = {
  id: 1,
  barcode: "48123848532188",
  category: "Food",
  name: "Osh",
  price: 30000,
};

export const data = Array(250)
  .fill("*")
  .map((_, idx) => ({ ...sample, id: idx + 1 }));

export const columns = [
  { id: 1, key: "barcode" },
  { id: 2, key: "category" },
  { id: 3, key: "name" },
  { id: 4, key: "price" },
];
