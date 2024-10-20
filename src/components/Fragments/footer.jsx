import React from "react";
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
                                <img src="instagram-icon.png" alt="Instagram" className="w-5 h-5" />
                                <a href="#" className="text-sm hover:underline">Instagram</a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <img src="facebook-icon.png" alt="Facebook" className="w-5 h-5" />
                                <a href="#" className="text-sm hover:underline">Facebook</a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <img src="tiktok-icon.png" alt="TikTok" className="w-5 h-5" />
                                <a href="#" className="text-sm hover:underline">TikTok</a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <img src="youtube-icon.png" alt="YouTube" className="w-5 h-5" />
                                <a href="#" className="text-sm hover:underline">Youtube</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
