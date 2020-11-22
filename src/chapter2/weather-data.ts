import { Observer } from './observer'
import { Subject } from './subject'

export class WeatherData implements Subject {
  private observers: Observer[]
  private temperature: number | undefined
  private humidity: number | undefined
  private pressure: number | undefined

  constructor() {
    this.observers = []
  }

  registerObserver(o: Observer) {
    this.observers.push(o)
  }
  removeObserver(o: Observer) {
    const i = this.observers.indexOf(o)
    if (i > -1) {
      this.observers.splice(i, 1)
    }
  }
  notifyObservers() {
    const a = this.temperature
    this.observers.forEach((o) => {
      if (!this.temperature || !this.humidity || !this.pressure)
        throw new Error()
      o.update(this.temperature, this.humidity, this.pressure)
    })
  }
  measurementsChanged() {
    this.notifyObservers()
  }
  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature
    this.humidity = humidity
    this.pressure = pressure
    this.measurementsChanged()
  }
}
