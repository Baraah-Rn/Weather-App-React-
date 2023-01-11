import React from "react";

const Forecast = () => {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">title</p>
      </div>
      
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">title2</p>
          <img src="#" className="w-12 my-1" alt="" />
          <p className="font-medium">49°</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">item</p>
          <img src="#" className="w-12 my-1" alt="" />
          <p className="font-medium">77°</p>
        </div>

      </div>
    </div>
  );
};

export default Forecast;
