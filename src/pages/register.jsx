import AuthLayout from "../components/Layout/AuthLayout";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";
const RegisterPage = () => {
    return (
        <AuthLayout title="Register">
            <FormRegister />
            <p className="mt-3">Already Have an Account? <Link to="/login" className="text-blue-500 font-bold">Login</Link></p>
        </AuthLayout>
    )
};

export default RegisterPage;