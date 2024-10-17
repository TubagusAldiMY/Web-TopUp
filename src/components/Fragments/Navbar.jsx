import React from 'react'
import Button from '../Elements/Button'
import Input from '../Elements/Input'
import Search from '../Elements/Search'
const Navbar = () => {
    return (
        <div className=' h-[95px] flex justify-between align-center shadow-lg sticky top-0 bg-white'>
            <img src="/logo.jpg" alt="logo" />
            <ul className='flex justify-between gap-[5rem] items-center font-semibold text-[1.1rem]'>
                <li>🏠 Beranda</li>
                <li>🚀 Sale</li>
                <li>🔎 Cek Pesanan</li>
                <li>🤙 Contact</li>
            </ul>
            <div className='flex items-center gap-2'>
                <Search className="w-[50px]" />
                <Button title="Login" variant="bg-slate-300 border border-black" />
            </div>
        </div>
    )
}

export default Navbar