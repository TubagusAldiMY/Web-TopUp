const Label = (props) => {
    const { htmlFor, children, variant } = props;
    return (
        <label
            htmlFor={htmlFor}
            className={`block text-sm ${variant}`}
        >
            {children}
        </label>
    )
}

export default Label