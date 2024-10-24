import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className=" bg-black text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                {/* <!-- Logo & About Section --> */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        {/* <!-- Logo --> */}
                        <img src="logo.png" alt="Logo" className="w-8 h-8" />
                        <h1 className="font-bold text-xl">OTW STORE</h1>
                    </div>
                    <p className="text-sm">
                        lorem ipsum sit dolor amet akwoakwo akwoakwo awkoawk akwoakwo akwoakwo awkoawkakwoakwoakwoakwo
                    </p>
                </div>

                {/* <!-- Map Section --> */}
                <div className="flex justify-around ">
                    <div className="space-y-2">
                        <h2 className="font-bold text-lg">Situs Navigasi</h2>
                        <ul className="space-y-1">
                            <li><a href="#" className="text-sm hover:underline">Beranda</a></li>
                            <li><a href="#" className="text-sm hover:underline">Cek transaksi</a></li>
                            <li><a href="#" className="text-sm hover:underline">Hubungi Kami</a></li>
                            <li><a href="#" className="text-sm hover:underline">Ulasan</a></li>
                        </ul>
                    </div>

                    {/* <!-- Social Section --> */}
                    <div className="space-y-2">
                        <h2 className="font-bold text-lg">Social</h2>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2">
                                <FaInstagram className="w-5 h-5" alt="Instagram" />
                                <Link to="https://instagram.com" className="text-sm hover:underline">Instagram</Link>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FaFacebookF className="w-5 h-5" alt="Facebook" />
                                <Link to="https://facebook.com" className="text-sm hover:underline">Facebook</Link>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FaTiktok className="w-5 h-5" alt="TikTok" />
                                <Link to="https://tiktok.com" className="text-sm hover:underline">TikTok</Link>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FaYoutube className="w-5 h-5" alt="YouTube" />
                                <Link to="https://youtube.com" className="text-sm hover:underline">Youtube</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
