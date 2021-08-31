import { useEffect, useState } from "react";
import { useStateValue } from "../../Stateprovider";
import "./Sidebar.css";


const Sidebar = () => {
  const [weatherData, setWeatherData] = useState()
  const iconWeather = `http://openweathermap.org/img/wn/${weatherData?.list[0].weather[0].icon}@2x.png`

  useEffect(() => {
    const successCallback = (position) => {
      console.log(position.coords.longitude, position.coords.latitude);
      let URL = `https://community-open-weather-map.p.rapidapi.com/forecast?units=metric&lat=${position.coords.latitude}&lon=${position.coords.longitude}0&lang=es`
      fetch(URL, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "2bc8c3d12dmshac525b89a0afbf4p171889jsn1a38d344227c"
	}
})
.then(response => response.json()).then(data => setWeatherData(data))
    }
    const errorCallback = err => console.log(err)
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, [])

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h4>{weatherData?.city.name}</h4>
        <img src={iconWeather}/>
        <h1>{Math.round(weatherData?.list[0].main.temp)} ºC</h1>
      </div>
      <div className="sidebar__bottom">
        <h4>Welcome</h4>
        <h4>{user?.displayName} </h4>
      </div>
    </div>
  );
};

export default Sidebar;
