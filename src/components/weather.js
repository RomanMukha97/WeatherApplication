import React from "react";

const Weather = props =>(
  <div className="infoWeath">
    { props.city &&
      <div>
      <p>Температура: {props.temp}°</p>
      <p>Местоположение: {props.city}, {props.country}, Широта:{props.latitude} /  Долгота:{props.longitude}</p>
      <p>Давление: {props.pressure}</p>
      <p>Влажность: {props.humidity}%</p>
      <p>Скорость ветра: {props.wind}м/c</p>
      <p>Заход солнца: {props.sunset}</p>
      <p>Облачность: {props.clouds}%</p>
      </div>
        }
        <p className="error">{props.error}</p>
        </div>
    );

export default Weather;
