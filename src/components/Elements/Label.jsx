const Label = (props) => {
    const { htmlFor, children, variant } = props;
    return (
        <label
            htmlFor={htmlFor}
            className={`block text-slate-700 text-sm m-2 ${variant}`}
        >
            {children}
        </label>
    )
}

export default Label