import { Children } from "react";

const Label = (props) => {
    const { htmlFor, children } = props;
    return (
        <label htmlFor={htmlFor}
            className="block text-slate-600 
        font-bold mb-2">
            {children}</label>
    );
};

export default Label;