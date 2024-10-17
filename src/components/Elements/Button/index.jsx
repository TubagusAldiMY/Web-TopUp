import React from 'react'

const Button = (props) => {
    const { title, variant } = props;
    return (
        <button className={`h-10 px-6 py-1 w-full font-semibold rounded-xl text-white bg-blue-500 ${variant}`}>
            {title}
        </button>
    )
}

export default Button