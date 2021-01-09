import { ProxyState } from "../AppState.js";
import weatherService from "../Services/WeatherService.js";
import weather from "../models/weather.js"

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function _drawWeather() {
  console.log("THE WEATHER MAN SAYS:", ProxyState.weather);
  // let weather = ProxyState.weather
  let template = ''
  if (ProxyState.weather) {
    template = ProxyState.weather.Template

    document.getElementById("weather").innerHTML = template;
  }
  _drawTemp()
}

function _drawTemp() {
  let template = ''
  if (ProxyState.weather) {
    template = ProxyState.weather.CurrentWeatherTemplate
    console.log("look here ple234sd", template)

    document.getElementById("currentTemp").innerHTML = template;

  }
}

var tempy = true
// NOTE This is to draw your button
export default class WeatherController {
  constructor() {
    ProxyState.on("weather", _drawWeather);
    ProxyState.on("currentTemp", _drawTemp);
    this.getWeather()
  }

  getWeather() {
    try {
      weatherService.getWeather()
    }
    catch (e) {
      console.error(e)
    }
  }

  // toggleUnit() {
  //   let celsius = ProxyState.weather.celsius
  //   let farenheit = ProxyState.weather.farenheit
  //   console.log(celsius)


  // }

  displayUnit() {
    // NOTE this is for your one that targets the property off of the model and updates.
    console.log("before if statement", tempy)
    if (tempy == true) {
      ProxyState.weather.currentTemp = ProxyState.weather.farenheit,
        console.log("Initial tempy is true", ProxyState.weather.currentTemp)
      tempy = false
      console.log("tempy var if", tempy)
    } else {
      ProxyState.weather.currentTemp = ProxyState.weather.celsius,
        tempy = true
      console.log("Else should change it to C", ProxyState.weather.currentTemp)
      console.log("tempy var else", tempy)
    }

    // NOTE this is your statement that works. This is targeting the div
    // console.log("before if statement", tempy)
    // let todaysWeather = document.getElementById('currentTemp')
    // if (tempy == true) {
    //   todaysWeather = ProxyState.weather.farenheit,
    //     tempy = false
    //   console.log("tempy var if", tempy)
    // } else {
    //   todaysWeather = ProxyState.weather.celsius,
    //     tempy = true
    //   console.log("tempy var else", tempy)
    // }

    _drawTemp()
  }

}
