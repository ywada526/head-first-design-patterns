import { DisplayElement } from './display-element'
import { Observer } from './observer'
import { Subject } from './subject'

export class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature: number | undefined
  private humidity: number | undefined
  private weatherData: Subject

  constructor(weatherData: Subject) {
    this.weatherData = weatherData
    weatherData.registerObserver(this)
  }

  update(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature
    this.humidity = humidity
    this.display()
  }
  display() {
    if (!this.temperature || !this.humidity) throw new Error()
    console.log(
      `現在の気象状況: 温度${this.temperature}度 湿度${this.humidity}%`
    )
  }
}
