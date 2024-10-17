import React from 'react'

const Hero = (props) => {
    const { img } = props;
    return (
        <div className='flex justify-center items-center p-24'>
            <img src={img} alt="" className='w-[75rem] h-[30rem] object-cover rounded-[2rem]' />
        </div>
    )
}

export default Hero