import React from 'react'
import Label from '../Elements/Label'
import Button from '../Elements/Button'
const Cards = (props) => {
    const { developer, title, img, alt } = props
    return (
        <div className='flex justify-center gap-4'>
            <div className='w-72 p-3 shadow-2xl rounded-xl transform transition-all hover:-translate-y-2'>
                <img className='h-60 object-cover rounded-xl' src={img} alt={alt} />
                <div className='p-2'>
                    <Label children={developer} variant="mt-0 flex justify-center font-semibold text-[14px] text-slate-500" />
                    <Label children={title} variant="flex justify-center font-bold text-[17px] text-red-500" />
                </div>
                <div className='mb-2' >
                    <Button title="Beli" variant="w-24 h-9 text-[15px] bg-white border border-black" />
                </div>
            </div>
        </div>
    )
}

export default Cards