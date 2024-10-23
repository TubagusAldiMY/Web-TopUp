import React from "react";
import Label from "../Elements/Label";
const Cards = (props) => {
  const { title, img, alt } = props;
  return (
    <div className='mx-auto px-6 flex flex-wrap justify-center gap-2 sm:flex sm:flex-wrap sm:gap-2 sm:justify-center'>
      <div className='rounded-2xl shadow-md w-24 sm:w-32 md:w-64'>
        <img src={img} alt={alt} className='rounded-2xl' />
        <div className='px-3 py-2'>
          <Label children={title} variant="font-bold text-[1rem] text-center sm:text-md sm:text-center md-text-2xl md:text-center" />
        </div>
      </div>
    </div>
  )
};

export default Cards;
