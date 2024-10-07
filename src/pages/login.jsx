import AuthLayout from "../components/Layout/AuthLayout";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";
const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <FormLogin />
            <p className="mt-3">Don't Have an Account? <Link to="/register" className="text-blue-500 font-bold">Sign Up</Link></p>
        </AuthLayout>
    )
};

export default LoginPage;