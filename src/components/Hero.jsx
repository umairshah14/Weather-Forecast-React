import React, {useState } from "react";
import { handleSearch as performSearch } from "./searchFunc";


const Hero = () => {
  const [city, setCity] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [forecastDiv, setForecastDiv] = useState(null);

  const handleSearch = () => {
    performSearch(city, setCity, setIsSearched, setForecastDiv);
  };

  return (
    <div className="bg-black w-full h-screen text-white flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className=" text-4xl md:text-5xl lg:text-7xl mx-auto pb-2">
          Weather Forecaster
        </h1>
        <div className="flex justify-center flex-col">
          <input
            className=" bg-transparent text-yellow-500 text-center w-full text-2xl md:text-4xl outline-none my-3"
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="mb-8 text-orange-200" onClick={handleSearch}>
            {isSearched ? "Search again" : "Search"}
          </button>
        </div>
        {forecastDiv && <div>{forecastDiv}</div>}
      </div>
    </div>
  );
};
export default Hero;
