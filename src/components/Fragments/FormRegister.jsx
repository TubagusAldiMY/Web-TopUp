import React from 'react'
import Button from '../Elements/Button'
import InputForm from '../Elements/InputForm'

const FormRegister = () => {
    return (
        <form action="" className='flex flex-col w-[300px]'>
            <InputForm label="Email" type="email" placeholder="example@mail.com" name="email" />
            <InputForm label="Password" type="password" placeholder="**********" name="password" />
            <Button title="Register" />
        </form>
    )
}

export default FormRegister