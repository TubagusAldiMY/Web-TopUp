import React from 'react'
import Button from '../Elements/Button'
import InputForm from '../Elements/InputForm'

const FormLogin = () => {
    return (
        <form action="" className='flex flex-col w-[300px]'>
            <InputForm label="Email" type="email" placeholder="example@mail.com" name="email" />
            <InputForm label="Password" type="password" placeholder="**********" name="password" />
            <Button title="Login" />
        </form>
    )
}

export default FormLogin;