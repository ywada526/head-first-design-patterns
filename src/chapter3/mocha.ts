import { Beverage } from './beverage'
import { CondimentDecorator } from './condiment-decorator'

export class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage)
  }

  getDescription() {
    return this.beverage.getDescription() + '、モカ'
  }

  cost() {
    return 0.2 + this.beverage.cost()
  }
}
