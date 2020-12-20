import { ChicagoStyleCheesePizza, NYStyleCheesePizza, Pizza } from './pizza'

type PizzaType = 'チーズ' // | 'ペパロニ' | 'クラム' | '野菜'

abstract class PizzaStore {
  orderPizza(type: PizzaType): Pizza {
    const pizza = this.createPizza(type)

    pizza.prepare()
    pizza.bake()
    pizza.cut()
    pizza.box()

    return pizza
  }

  abstract createPizza(type: PizzaType): Pizza
}

export class NYPizzaStore extends PizzaStore {
  createPizza(type: PizzaType) {
    if (type === 'チーズ') {
      return new NYStyleCheesePizza()
      // } else if (type === '野菜') {
      //   return new NYStyleVeggiePizza()
      // } else if (type === 'クラム') {
      //   return new NYStyleClamPizza()
      // } else if (type === 'ペパロニ') {
      //   return new NYStylePepperoniPizza()
    } else {
      const _: never = type
      throw new Error(`Unreachable with ${_}`)
    }
  }
}

export class ChicagoPizzaStore extends PizzaStore {
  createPizza(type: PizzaType) {
    if (type === 'チーズ') {
      return new ChicagoStyleCheesePizza()
    } else {
      const _: never = type
      throw new Error(`Unreachable with ${_}`)
    }
  }
}
