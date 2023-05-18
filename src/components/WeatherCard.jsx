import React from "react";

const WeatherCard = (props) => {
  return (
    <div>
        <div className="bg-black rounded-xl p-2 md:px-4 mb-3 flex border text-white border-white justify-center mx-2 flex-col w-35 lg:w-40 shadow-gray-400 shadow-md ">
          <h2 className=" justify-start text-sm font-light mt-1 ">{props.day}</h2>
          <p className=" justify-start text-2xl py-2 md:pb-2"> { props.main}</p>
          <p className="text-xs font-semibold "> {props.maxTemp + " °C"}</p>
          <p className="text-xs font-light">{  props.minTemp + " °C"}</p>
          <img src={props.icon} alt="" className=" w-36 h-18 mx-auto"/>
        </div>
      </div>
  );
};

export default WeatherCard;
 