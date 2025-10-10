import React from "react";
import NavBar from "./componenets/Navbar";
import Home from "./componenets/Home";
import escola from "./componenets/escola";
import SobreMim from "./componenets/sobreMiM";
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