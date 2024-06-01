import React from "react";
import ReactDOM from "react-dom/client";

const menuData = [
  {
    name: "Dim Sum",
    ingredients: "Pork, Chicken, Tofu, Eggs, Flour",
    price: 150,
    photoName: "foods/DimSum.png",
    soldOut: false,
  },
  {
    name: "Makizushi",
    ingredients: "Shari, Nori, Fish, Vegetables",
    price: 500,
    photoName: "foods/Maki.png",
    soldOut: false,
  },
  {
    name: "Pad Thai",
    ingredients: "Rice Noodles, Peanuts, Vegetables,Lime",
    price: 240,
    photoName: "foods/PadThai.png",
    soldOut: false,
  },
  {
    name: "Ramen",
    ingredients: "Noodles, Broth,Tare, Toppings",
    price: 375,
    photoName: "foods/Ramen.png",
    soldOut: false,
  },
  {
    name: "Samosa",
    ingredients: "Dough, Potatoes, Peas, Spices",
    price: 100,
    photoName: "foods/Samosa.png",
    soldOut: true,
  },
  {
    name: "Tikka Masala",
    ingredients: "Chicken, Yoghurt, Spices, Garlic, Ginger",
    price: 450,
    photoName: "foods/TikkaMasala.png",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <h1>Hello React!!!</h1>
      <Menu />
      <Menu />
    </div>
  );
}

function Menu() {
  return (
    <div>
      <img src="foods/PadThai.png" alt="Pad Thai" />
      <h2>Pad Thai</h2>
      <p>Rice Noodles, Peanuts, Vegetables,Lime</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
