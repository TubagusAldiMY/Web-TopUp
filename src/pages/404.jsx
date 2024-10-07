import { Link, useRouteError } from "react-router-dom";
import Button from "../components/Elements/Button/";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex justify-center gap-x-3 min-h-screen items-center flex-col">
            <h1 className="text-3xl font-bold">Oops!</h1>
            <p className="font-bold my-3">Sorry, an unexpected error has occurred.</p>
            <i className="font-bold">{error.statusText || error.message}</i>
            <Link to="/">
                <Button classname="text-black border rounded-full w-full mt-2">Back to Home</Button>
            </Link>
        </div>

    );
};

export default ErrorPage;