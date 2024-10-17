import React from 'react'
import Button from '../Elements/Button'

const Navbar = () => {
    return (
        <div className='w-full h-[100px] flex justify-between align-center shadow-md'>
            <img src="/logo.jpg" alt="logo" className='' />
            <ul className='flex justify-between gap-[5rem] items-center font-semibold text-xl'>
                <li>Beranda</li>
                <li>🚀 Sale</li>
                <li>Cek Pesanan</li>
                <li>Contact</li>
            </ul>
            <div className='flex items-center gap-2'>
                <input type="text" placeholder="Cari Game Anda" className='' />
                <img src="" alt="" />
                <Button title="Login" variant="bg-white text-black" />
            </div>
        </div>
    )
}

export default Navbar