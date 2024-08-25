const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const PORT = 8080;

app.use("/assets", express.static(path.join(__dirname, "assets")));

const smartphones = [
  {
    brand: "Apple",
    name: "iPhone 14",
    description: "iPhone 14 128gb",
    image: "http://localhost:8080/assets/iphone-14.png",
    price: 4000,
  },
  {
    brand: "Apple",
    name: "iPhone 15",
    description: "iPhone 15 128gb",
    image: "http://localhost:8080/assets/iphone-15.png",
    price: 4700,
  },
  {
    brand: "Xiaomi",
    name: "Redmi Note 13",
    description: "Xiaomi Note 13 128gb",
    image: "http://localhost:8080/assets/xiaomi-note13.png",
    price: 1700,
  },
  {
    brand: "Xiaomi",
    name: "Redmi Note 14",
    description: "Xiaomi Note 14 128gb",
    image: "http://localhost:8080/assets/xiaomi-note14.webp",
    price: 4000,
  },
  {
    brand: "Samsung",
    name: "Galaxy S23",
    description: "Samsung Galaxy S23 128gb",
    image: "http://localhost:8080/assets/galaxy-s23.jpg",
    price: 3000,
  },
  {
    brand: "Samsung",
    name: "Galaxy S24",
    description: "Samsung Galaxy S24 128gb",
    image: "http://localhost:8080/assets/galaxy-s24.png",
    price: 4500,
  },
  {
    brand: "Apple",
    name: "iPhone 14",
    description: "iPhone 14 128gb",
    image: "http://localhost:8080/assets/iphone-14.png",
    price: 4000,
  },
  {
    brand: "Apple",
    name: "iPhone 15",
    description: "iPhone 15 128gb",
    image: "http://localhost:8080/assets/iphone-15.png",
    price: 4700,
  },
  {
    brand: "Xiaomi",
    name: "Redmi Note 13",
    description: "Xiaomi Note 13 128gb",
    image: "http://localhost:8080/assets/xiaomi-note13.png",
    price: 1700,
  },
  {
    brand: "Xiaomi",
    name: "Redmi Note 14",
    description: "Xiaomi Note 14 128gb",
    image: "http://localhost:8080/assets/xiaomi-note14.webp",
    price: 4000,
  },
  {
    brand: "Samsung",
    name: "Galaxy S23",
    description: "Samsung Galaxy S23 128gb",
    image: "http://localhost:8080/assets/galaxy-s23.jpg",
    price: 3000,
  },
  {
    brand: "Samsung",
    name: "Galaxy S24",
    description: "Samsung Galaxy S24 128gb",
    image: "http://localhost:8080/assets/galaxy-s24.png",
    price: 4500,
  },
];

app.use(cors());

app.get("/api/smartphones", (req, res) => {
  res.json(smartphones);
});

app.get("/api/home", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
