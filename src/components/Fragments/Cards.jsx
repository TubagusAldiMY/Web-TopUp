import React from "react";
import Label from "../Elements/Label";
import Button from "../Elements/Button";
const Cards = (props) => {
  const { title, img, alt } = props;
  return (
    <div className="flex justify-center gap-2">
      <div className="h-80 w-60 p-8 shadow-2xl rounded-xl transform transition-all hover:-translate-y-2 mt-10">
        <img className="h-60 object-cover rounded-xl" src={img} alt={alt} />
        <div className="p-2">
          <Label
            children={title}
            variant="flex justify-center font-bold text-[17px] text-red-500"
          />
        </div>
        <div className="mb-1">
          <Button
            title="Beli"
            variant="w-24 h-9 text-[15px] bg-white border border-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
