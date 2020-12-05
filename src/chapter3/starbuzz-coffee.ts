import { DarkRoast } from './dark-roast'
import { Espresso } from './espresso'
import { HouseBlend } from './house-blend'
import { Mocha } from './mocha'
import { Soy } from './soy'
import { Whip } from './whip'

const beverage = new Espresso()
console.log(beverage.getDescription(), beverage.cost())

let beverage2 = new DarkRoast()
beverage2 = new Mocha(beverage2)
beverage2 = new Mocha(beverage2)
beverage2 = new Whip(beverage2)
console.log(beverage2.getDescription(), beverage2.cost())

let beverage3 = new HouseBlend()
beverage3 = new Soy(beverage3)
beverage3 = new Mocha(beverage3)
beverage3 = new Whip(beverage3)
console.log(beverage3.getDescription(), beverage3.cost())
