import React from "react";
import NavBar from "./components/NavBar";
import Home from "./compenents/Home";
import escola from "./compenents/Escola";
import SobreMim from "./components/SobreMim";
import "./index.css";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Home />
      <Escola />
      <SobreMim />
    </div>
  );
}