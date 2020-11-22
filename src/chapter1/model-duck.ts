import { Duck } from './duck'
import { FlyNoWay } from './fly-behavior'
import { Quack } from './quack-behavior'

export class ModelDuck extends Duck {
  constructor() {
    super(new Quack(), new FlyNoWay())
  }

  display() {
    console.log('模型の鴨です。')
  }
}
