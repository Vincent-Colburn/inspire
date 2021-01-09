import ImageController from "./Controllers/ImageController.js";
import QuoteController from "./Controllers/QuoteController.js";
import TodoController from "./Controllers/TodoController.js";
import WeatherController from "./Controllers/WeatherController.js";
import ClockController from "./Controllers/ClockController.js"
// import { loadState } from "./Utils/LocalStorage.js"


//TODO Dont forget to register all your controllers	
class App {

  weatherController = new WeatherController();
  todoController = new TodoController();
  imageController = new ImageController();
  quoteController = new QuoteController();
  clockController = new ClockController();

}


window["app"] = new App();
// loadState()