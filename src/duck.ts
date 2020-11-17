import { FlyBehavior } from './fly-behavior'
import { QuackBehavior } from './quack-behavior'

export abstract class Duck {
  quackBehavior: QuackBehavior
  flyBehavior: FlyBehavior

  constructor(quackBehavior: QuackBehavior, flyBehavior: FlyBehavior) {
    this.quackBehavior = quackBehavior
    this.flyBehavior = flyBehavior
  }

  abstract display(): void
  performFly() {
    this.flyBehavior.fly()
  }
  performQuack() {
    this.quackBehavior.quack()
  }
  swim() {
    console.log('すべての鴨は浮かびます。おとりの鴨でも！')
  }
}
