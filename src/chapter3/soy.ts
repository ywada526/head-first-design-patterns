import { CondimentDecorator } from './condiment-decorator'
import { Beverage } from './beverage'

export class Soy extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage)
  }

  getDescription() {
    return this.beverage.getDescription() + '、豆乳'
  }

  cost() {
    return 0.15 + this.beverage.cost()
  }
}
