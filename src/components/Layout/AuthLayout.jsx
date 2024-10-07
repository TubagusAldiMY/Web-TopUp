const AuthLayout = (props) => {
    const { children, title } = props;
    return (
        <div className="flex justify-center gap-x-3 min-h-screen items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-blue-500 text-3xl font-bold mb-2">{title}</h1>
                <p className="font-medium text-slate-400">
                    Welcome back Chief! Please enter your details
                </p>
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
