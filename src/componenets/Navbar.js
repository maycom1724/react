import React from "react";

export default function Navbar() {
    return (
        <nav classNAme="flex justify-center gap-6 bg-gray-200 p-4 shadow-md">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#escola" className="hover:text-blue-600">Sobre a Escola</a>
            <a href="#mim" className="hover:text-blue-600">Sobre Mim</a>
        </nav>
    )
}