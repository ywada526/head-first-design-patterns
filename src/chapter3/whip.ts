import { Beverage } from './beverage'
import { CondimentDecorator } from './condiment-decorator'

export class Whip extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage)
  }

  getDescription() {
    return this.beverage.getDescription() + '、ホイップ'
  }

  cost() {
    return 0.1 + this.beverage.cost()
  }
}
