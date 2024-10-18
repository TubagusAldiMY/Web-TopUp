import React, { useState } from "react";
import Button from "../Elements/Button";
// import Input from "../Elements/Input";
import Search from "../Elements/Search";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-[95px] flex justify-between items-center shadow-lg bg-white px-4 md:px-8">
      <img src="/logo.jpg" alt="logo" className="w-[80px]" />
      {/* Menu for larger screens */}
      <ul className="hidden md:flex justify-between gap-[3rem] items-center font-semibold text-[1rem]">
        <li>🏠 Beranda</li>
        <li>🚀 Sale</li>
        <li>🔎 Cek Pesanan</li>
        <li>🤙 Contact</li>
      </ul>

      {/* Search bar and button */}
      <div className="hidden md:flex items-center gap-2">
        <Search className="w-[150px]" />
        <Button title="Login" variant="bg-slate-300 border border-black" />
      </div>

      {/* Hamburger icon for mobile */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className="w-8 h-8 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Dropdown menu for mobile */}
      {isMenuOpen && (
        <div className="absolute top-[95px] left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>🏠 Beranda</li>
            <li>🚀 Sale</li>
            <li>🔎 Cek Pesanan</li>
            <li>🤙 Contact</li>
            <div className="flex items-center gap-2">
              <Search className="w-[150px]" />
              <Button
                title="Login"
                variant="bg-slate-300 border border-black"
              />
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
