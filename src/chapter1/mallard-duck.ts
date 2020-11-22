import { Duck } from './duck'
import { FlyWithWings } from './fly-behavior'
import { Quack } from './quack-behavior'

export class MallardDuck extends Duck {
  constructor() {
    super(new Quack(), new FlyWithWings())
  }

  display() {
    console.log('本物のマガモです。')
  }
}
