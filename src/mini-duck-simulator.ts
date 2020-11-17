import { FlyRocketPowered } from './fly-behavior'
import { MallardDuck } from './mallard-duck'
import { ModelDuck } from './model-duck'

const mallard = new MallardDuck()
mallard.performQuack()
mallard.performFly()

const model = new ModelDuck()
model.performFly()
model.setFlyBehavior(new FlyRocketPowered())
model.performFly()
