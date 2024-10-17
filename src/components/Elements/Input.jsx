const Input = (props) => {
    const { type, placeholder, name } = props;
    return (
        <input
            type={type}
            className='text-sm border border-black rounded-md w-full py-2 px-3 text-slate-700'
            placeholder={placeholder}
            name={name}
        />
    )
}

export default Input