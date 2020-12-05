import { Beverage } from './beverage'

export class DarkRoast extends Beverage {
  constructor() {
    super()
    this.description = 'ダークロースト'
  }

  cost() {
    return 0.99
  }
}
