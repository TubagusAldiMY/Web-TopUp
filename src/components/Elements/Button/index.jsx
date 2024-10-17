import React from 'react'

const Button = (props) => {
    const { title, variant } = props;
    return (
        <button className={`h-10 px-1 py-1 mr-3 w-full font-semibold rounded-xl text-black bg-blue-500 ${variant}`}>
            {title}
        </button>
    )
}

export default Button