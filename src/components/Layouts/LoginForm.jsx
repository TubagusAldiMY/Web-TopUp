import React from 'react'
import Label from '../Elements/Label'
import Input from '../Elements/Input'
import Button from '../Elements/Button'

const LoginPage = () => {
    return (
        <div className="p-4 h-screen flex justify-center items-center sm:flex sm:justify-center sm:items-center md:flex md:justify-center md:items-center md:w-full lg:w-full w-full ">
            <div className="md:w-1/2 md:rounded-2xl p-2 lg:w-[25%] w-[50%] sm:w-[50%] ">
                <Label children="Masuk" variant="font-bold text-black text-3xl md:text-4xl md:text-center lg:text-2xl" />
                <Label children="Masuk dengan akun yang sudah di daftarkan" variant="text-sm md:text-xl md:text-center lg:text-sm" />
                <ul className="mt-5 md:mt-3 lg:mt-10">
                    <li>Username</li>
                    <Input type="text" placeholder="Username" name="username" />
                    <li className="mt-5">Password</li>
                    <Input type="password" placeholder="**********" name="password" />
                </ul>
                <div className="mt-5">
                    <Button title="Masuk" variant="bg-slate-300 border rounded-2xl hover:bg-slate-400" />
                    <Label variant="flex justify-end mt-2" children="Lupa Password?" />
                    <div className="mt-10">
                        <Button title="Daftar" variant="bg-slate-300 border rounded-2xl hover:bg-slate-400" />
                        <Label variant="flex justify-center mt-2" children="Belum punya akun?" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage