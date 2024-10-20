// import { useState } from "react";
// import Button from "../Elements/Button";
// // import Input from "../Elements/Input";
// import Search from "../Elements/Search";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="h-[5rem] flex justify-between items-center shadow-lg bg-white px-4 md:px-8">
//       <img src="/logo.jpg" alt="logo" className="w-[80px]" />
//       {/* Menu for larger screens */}
//       <ul className="hidden md:flex justify-between gap-[3rem] items-center font-semibold text-[1rem]">
//         <li>🏠 Beranda</li>
//         <li>🚀 Sale</li>
//         <li>🔎 Cek Pesanan</li>
//         <li>🤙 Contact</li>
//       </ul>

//       {/* Search bar and button */}
//       <div className="hidden md:flex items-center gap-2">
//         <Search className="w-[150px]" />
//         <Button title="Login" variant="bg-slate-300 border border-black" />
//       </div>

//       {/* Hamburger icon for mobile */}
//       <div className="md:hidden">
//         <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           <svg
//             className="w-8 h-8 text-black"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
//             ></path>
//           </svg>
//         </button>
//       </div>

//       {/* Dropdown menu for mobile */}
//       {isMenuOpen && (
//         <div className="absolute top-[95px] left-0 w-full bg-white shadow-lg md:hidden">
//           <ul className="flex flex-col items-center gap-4 py-4">
//             <li>🏠 Beranda</li>
//             <li>🚀 Sale</li>
//             <li>🔎 Cek Pesanan</li>
//             <li>🤙 Contact</li>
//             <div className="flex items-center gap-2">
//               <Search className="w-[150px]" />
//               <Button
//                 title="Login"
//                 variant="bg-slate-300 border border-black"
//               />
//             </div>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

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
              <a href="#">🏠 Beranda</a>
            </li>
            <li>
              <a href="#">🚀 Sale</a>
            </li>
            <li>
              <a href="#">🔎 Cek Pesanan</a>
            </li>
            <li>
              <a href="#">🤙 Contact</a>
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
