import React from 'react'
import Label from '../Elements/Label'
import Input from '../Elements/Input'
import Button from '../Elements/Button'

const RegisterPage = () => {
    return (
        <div className="p-4 h-screen flex justify-center items-center sm:flex sm:justify-center sm:items-center md:flex md:justify-center md:items-center md:w-full lg:w-full w-full ">
            <div className="md:w-1/2 md:rounded-2xl p-2 lg:w-[25%] w-[50%] sm:w-[50%] ">
                <Label children="Daftar" variant="font-bold text-black text-3xl md:text-4xl md:text-center lg:text-2xl" />
                <Label children="Masukan informasi yang dibutuhkan" variant="text-sm md:text-xl md:text-center lg:text-sm" />
                <ul className="mt-5 md:mt-3 lg:mt-10">
                    <li>Nama Lengkap</li>
                    <Input type="text" placeholder="Masukan Nama Lengkap" name="fullname" />
                    <li className="mt-5">E-mail</li>
                    <Input type="email" placeholder="Masukan E-mail" name="email" />
                    <li className="mt-5">Password</li>
                    <Input type="password" placeholder="**********" name="password" />
                    <li className="mt-5">Confirm Password</li>
                    <Input type="password" placeholder="**********" name="confirmPassword" />
                </ul>
                <div className="mt-5">
                    <Button title="Daftar" variant="bg-slate-300 border rounded-2xl hover:bg-slate-400" />
                    <Label variant="flex justify-end mt-2" children="Lupa Password?" />
                    <div className="mt-10">
                        <Label variant="flex justify-center mt-2" children="Sudah punya akun?" />
                        <Button title="Masuk" variant="bg-slate-300 border rounded-2xl hover:bg-slate-400" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage