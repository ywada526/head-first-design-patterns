import { CurrentConditionsDisplay } from './current-conditions-display'
import { WeatherData } from './weather-data'

const weatherData = new WeatherData()
const currentDisplay = new CurrentConditionsDisplay(weatherData)

weatherData.setMeasurements(27, 65, 30.4)
weatherData.setMeasurements(28, 70, 29.2)
weatherData.setMeasurements(26, 90, 29.2)
