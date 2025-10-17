import React from "react";
import NavBar from "./componenets/Navbar";
import Home from "./componenets/Home";
import Escola from "./componenets/escola";
import SobreMim from "./componenets/sobreMiM";
import Footer from "./componenets/footer";

import "./index.css";

export default function App() {
  return (
    <div className="font-sans">
      <NavBar />
      <Home />
      <Escola />
      <SobreMim />
      <Footer />
    </div>
  );
}