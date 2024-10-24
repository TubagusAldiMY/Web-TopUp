import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 z-10 bg-white shadow">
      <div className="flex justify-between lg:justify-between items-center lg:p-2 lg:mx-10">
        <div className="m-1 content-center">
          <span className="font-black place pl-2 lg:text-2xl">NamaWeb</span>
        </div>
        <div className="m-3 content-center">
          <ul className="hidden md:flex justify-between items-center font-semibold text-[1rem] gap-5 lg:gap-10 lg:text-[1.2rem]">
            <li>
              <Link to="#">Beranda</Link>
            </li>
            <li>
              <Link to="#">Sale</Link>
            </li>
            <li>
              <Link to="#">Cek Pesanan</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
            <li>
              <a
                className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded "
                href="#"
              >
                LOGIN
              </a>
            </li>
          </ul>
        </div>

        <div
          className="md:hidden lg:hidden m-1 content-center pr-2"
          onClick={handleMenuToggle}
        >
          <GiHamburgerMenu />
        </div>
        {menuOpen && (
          <div className="absolute top-full right-0 bg-white shadow-md w-screen">
            <ul>
              <li>
                <a href="#" className="block p-1 hover:bg-gray-100">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block p-1 hover:bg-gray-100">
                  Sale
                </a>
              </li>
              <li>
                <a href="#" className="block p-1 hover:bg-gray-100">
                  Cek Pesanan
                </a>
              </li>
              <li>
                <a href="#" className="block p-1 hover:bg-gray-100">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
