// searchFunctions.js
import axios from "axios";
import WeatherCard from "./WeatherCard";

export const handleSearch = (city, setCity, setIsSearched, setForecastDiv) => {
  if (city === "") {
    alert("No city entered, please try again");
  } else {
    const LonLatURL =
      "https://api.openweathermap.org/geo/1.0/direct?q=" +
      city +
      "&limit=1&appid=11a6edf7f55109a8876a082e0f89437e";

    axios
      .get(LonLatURL)
      .then(function (response) {
        if (response.data.length === 0) {
          alert("No match found for " + city + ", please try again ");
          setCity("");
        } else {
          const lat = response.data[0].lat;
          const lon = response.data[0].lon;
          const forecastURL = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&units=metric&cnt=6&appid=11a6edf7f55109a8876a082e0f89437e`;

          axios
            .get(forecastURL)
            .then(function (response) {
              if (response.data.length === 0) {
                console.log("NO CITY FOUND");
              } else {
                console.log(response);
                setIsSearched(true);

                const forecastContent = response.data.list.map(
                  (dayForecast, index) => {
                    const date = new Date(dayForecast.dt * 1000);
                    const tempIcon =
                      "http://openweathermap.org/img/wn/" +
                      dayForecast.weather[0].icon +
                      "@2x.png";
                    const formattedDate = date.toLocaleDateString();

                    let dayLabel = index === 0 ? "Today" : formattedDate;

                    return (
                      <WeatherCard
                        key={index}
                        day={dayLabel}
                        icon={tempIcon}
                        maxTemp={dayForecast.temp.max}
                        minTemp={dayForecast.temp.min}
                        main={dayForecast.weather[0].main}
                        countryName={
                          response.data.city.name +
                          ", " +
                          response.data.city.country
                        }
                      />
                    );
                  }
                );

                setForecastDiv(
                  <div className="flex flex-col">
                    <h1 className="mx-auto pb-6 text-2xl underline">{ `${response.data.city.name}, ${response.data.city.country}`}</h1>
                    <div className="grid grid-cols-3 lg:flex lg:flex-row">{forecastContent}</div>
                  </div>
                );
              }
            })
            .catch(function (error) {
              console.error(error);
            });
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }
};
