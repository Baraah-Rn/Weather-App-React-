import React from "react";
import { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city !== "") {
      setQuery({ q: city });
    
    }else{
      toast.error('Fetching users location failed...')
    }
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      toast.info('Fetching users Location...')
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched! ")
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }else{
      toast.error('Fetching users location failed...')
    }
  };

  const handleUnits = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
          placeholder="search for city.."
        />

        <UilSearch
          onClick={handleSearch}
          size={30}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />

        <UilLocationPoint
          onClick={handleLocation}
          size={30}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          onClick={handleUnits}
          name="metric"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
        >
          ??C
        </button>

        <p className="text-xl text-white mx-1">|</p>

        <button
          onClick={handleUnits}
          name="imperial"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
        >
          ??F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
