import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";


  const API_KEY = "92a771cd3b39012e0fae821434798b3e";


class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    humidity: undefined,
    wind: undefined,
    sunset: undefined,
    clouds: undefined,
    latitude:undefined,
    longitude:undefined,
    //precipitation:undefined,
    eror: undefined

  }

  gettingWeather = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;

    if(city){
      const api_url = await
      fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
      console.log(data);

      var sunset = data.sys.sunset;
      var date = new Date();
      date.setTime(sunset);
      var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
      temp: data.main.temp,
      city: data.name,
      latitude: data.coord.lat,
      longitude:data.coord.lon,
      country: data.sys.country,
      pressure: data.main.pressure,
      humidity:data.main.humidity,
      wind: data.wind.speed,
      sunset: sunset_date,
      clouds: data.clouds.all,
      //precipitationr:data.weather.main,
      error: undefined
    });
  } else {
    this.setState({
      temp: undefined,
      city: undefined,
      country: undefined,
      pressure: undefined,
      humidity: undefined,
      wind: undefined,
      sunset: undefined,
      clouds:undefined,
      latitude:undefined,
      longitude:undefined,
      //precipitation:undefined,
      error: "Введите название города"
    });
   }
  }

  render(){
    return (
    <div className="wrapper">
    <div className = "main">
     <div className = "container">
       <div className = "row">
       <div className = "col-sm-5 info">
        <Info />
       </div>
       <div className = "col-sm-7 form">
       <Form weatherWethod={this.gettingWeather} />
       <Weather
         temp={this.state.temp}
         city={this.state.city}
         country={this.state.country}
         pressure={this.state.pressure}
         humidity={this.state.humidity}
         wind={this.state.wind}
         sunset={this.state.sunset}
         clouds={this.state.clouds}
         latitude={this.state.latitude}
         longitude={this.state.longitude}
         //precipitation={this.state.precipitation}
         error={this.state.error}
       />
       </div>
      </div>
    </div>
    </div>
  </div>
    );
  }
}

export default App;
