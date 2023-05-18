import React from "react";

const WeatherCard = (props) => {
  return (
    <div>
        <div className="bg-black rounded-md p-2 md:px-4 mb-3 flex border text-white border-white justify-center mx-2 flex-col w-35 lg:w-40 shadow-gray-400 shadow-md ">
          <h2 className=" mx-auto text-lg md:text-2xl font-bold">{props.day}</h2>
          <img src={props.icon} alt="" className=" max-w-12 h-18 mx-auto"/>
          <p className=" mx-auto md:pb-2"> { props.main}</p>
          <p className="mx-auto "> {"Max: " +  props.maxTemp + " C"}</p>
          <p className="mx-auto ">{ "Min: " + props.minTemp + " C"}</p>
        </div>
      </div>
  );
};

export default WeatherCard;
 