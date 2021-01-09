export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try
    this.icon = data.weather['0'].icon
    this.city = data.name
    this.kelvin = data.main.temp
    this.farenheit = Math.floor(((this.kelvin - 273.15) * 1.8) + 32)
    this.celsius = Math.floor((this.kelvin - 273.15))
    this.currentTemp = this.farenheit
  }

  get Template() {
    return /**html */ `
                      <div>
                          <div class="container">
                            <p><img src="http://openweathermap.org/img/wn/${this.icon}@2x.png" alt="Girl in a jacket">
                            </p><br></br>
                            <p>${this.city}</p>
                            <b>Celsius or Farenheit</b>
                            <label class="switch text-center">
                                <input type="checkbox" id="switch" class="checkbox text-center justify-content-between"
                                    onclick="app.weatherController.displayUnit()" />
                                <label for="switch" class="toggle" onclick=""></span>
                                    <p class="justify-content-between">F C</p>
                                </label>
                          </div>
                        </div>
   

    `
  }

  get CurrentWeatherTemplate() {
    let template = ''
    template += `
    <p class="text-bold"> Current Temperature Outside: ${this.currentTemp} </p>

    `

    return template



  }

  // NOTE This is your original working template for the weather
  //  <div class="card">
  // <div class="container">
  //   <div id="temp" class="text-bold"></div>
  //   <p> ${this.currentTemp} <img src="http://openweathermap.org/img/wn/${this.icon}@2x.png" alt="Girl in a jacket"> </p><br></br>
  //     <p>${this.city}</p>
  //     <b>Toggle between Celsius and Farenheit</b>
  //     <label class="switch text-center">
  //       <input type="checkbox" id="switch" class="checkbox text-center justify-content-between" onclick="app.weatherController.displayUnit()" />
  //       <label for="switch" class="toggle" onclick=""></span>
  //       <p class="justify-content-between">C                         F</p>
  //     </label >

  //   </div>
  // </div>
}