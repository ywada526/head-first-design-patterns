import { Beverage } from './beverage'

export class HouseBlend extends Beverage {
  constructor() {
    super()
    this.description = 'ハウスブレンドコーヒー'
  }

  cost() {
    return 0.89
  }
}
