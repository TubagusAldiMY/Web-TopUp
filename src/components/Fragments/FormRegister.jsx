import Button from '../Elements/Button'
import InputForm from '../Elements/Input'
const FormRegister = () => {
    return (
        <form action="">
            <InputForm label="Full Name" type="text" placeholder="Insert you fullname here" name="fullname" />
            <InputForm label="E-Mail" type="email" placeholder="example@mail.com" name="email" />
            <InputForm label="Password" type="password" placeholder="********" name="password" />
            <InputForm label="Confirm password" type="password" placeholder="********" name="confirmPassword" />
            <Button classname="bg-blue-600 w-full">Register</Button>
        </form>
    );
}

export default FormRegister;