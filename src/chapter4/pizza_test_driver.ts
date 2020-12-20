import { ChicagoPizzaStore, NYPizzaStore } from './pizza_store'

const nyStore = new NYPizzaStore()
const chicagoStore = new ChicagoPizzaStore()

const pizza1 = nyStore.orderPizza('チーズ')
console.log(`イーサンの注文は${pizza1.name}`)

const pizza2 = chicagoStore.orderPizza('チーズ')
console.log(`ジョエルの注文は${pizza2.name}`)
