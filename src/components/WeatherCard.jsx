import React from "react";

const WeatherCard = (props) => {
  return (
    <div>
        <div className="bg-black rounded-md px-2 pt-2 md:px-4 my-2 flex border text-white border-white justify-center mx-2 flex-col w-35 lg:w-40 shadow-gray-400 shadow-lg ">
          <h2 className=" mx-auto  text-lg md:text-2xl font-bold">{props.day}</h2>
          <img src={props.icon} alt="" />

          <p className=" mx-auto md:py-1"> { props.main}</p>
          <p className="mx-auto md:py-1 "> {"Max: " +  props.maxTemp + " C"}</p>
          <p className="mx-auto py-1 ">{ "Min: " + props.minTemp + " C"}</p>
        </div>
      </div>
  );
};

export default WeatherCard;
 