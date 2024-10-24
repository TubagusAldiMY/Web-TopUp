import React from "react";

const translaksi = () => {
  return (
    <div className="text-center  ">
      <div className="font-bold text-xl text-center mt-10 flex justify-center">
        Cek Pesanan
      </div>
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className=" spece-x-8 inset-y-0 left-0 flex items-center px-2">
          <Input
            type="text"
            placeholder="Cari Pesanan Kamu...."
            name="search"
          />
        </span>
      </label>
    </div>
  );
};

export default translaksi;
