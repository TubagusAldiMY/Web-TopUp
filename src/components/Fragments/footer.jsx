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



        // <footer>
        //     <div className="mt-20 shadow-inner h-96 flex justify-around">
        //         <div className="p-10 w-1/3 place-items-center ">
        //             <div className="flex  w-1/3 h-1/3 m-5">
        //                 <img src="/logo.jpg" alt="" />
        //             </div>
        //             <div className=" items-center text-justify">
        //                 Lorem ipsum, adalah tempat topup terbaik sepanjang sejarah
        //                 per-TopUp-an dengan proses yang cepat dan juga cermat, dengan harga
        //                 yang terjangkau.
        //             </div>
        //         </div>
        //         <div className=" p-10 w-1/3 text-center mt-10">
        //             <h1>Contact</h1>
        //             <div className="place-items-start pl-10 no-">
        //                 <li>
        //                     <a href="mailto:loremipsum@gmail.com" title="Email">
        //                         <i>Email</i>
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a href="https://instagram.com/loremipsum" title="Instagram">
        //                         <i>Instagram</i>
        //                     </a>
        //                 </li>
        //             </div>
        //         </div>
        //         <div className="p-10 w-1/3 items-center mt-10">
        //             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab maxime
        //             mollitia omnis vero numquam ipsam eius, temporibus aliquam.
        //             Accusantium eos possimus quibusdam et quia magnam officia ullam quod
        //             hic? Ipsam!
        //         </div>
        //     </div>
        //     <div>
        //         <p className="text-center pb-10 ">
        //             &copy; 2024 TubsAMY & Asriqul. All rights reserved.
        //         </p>
        //     </div>
        // </footer>
    );
};

export default Footer;
