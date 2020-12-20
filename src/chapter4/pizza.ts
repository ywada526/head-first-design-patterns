export abstract class Pizza {
  private _name: string
  private dough: string
  private sauce: string
  private toppings: string[]

  constructor(name: string, dough: string, sauce: string, toppings: string[]) {
    this._name = name
    this.dough = dough
    this.sauce = sauce
    this.toppings = toppings
  }

  get name() {
    return this._name
  }

  prepare() {
    console.log(`${this.name}を下処理`)
    console.log('生地をこねる...')
    console.log('ソースを追加...')
    console.log('トッピングを追加:')
    this.toppings.forEach((topping) => console.log(' ' + topping))
  }
  bake() {
    console.log('350度で25分間焼く')
  }
  cut() {
    console.log('ピザを扇形に切り分ける')
  }
  box() {
    console.log('PizzaStoreの正式な箱にピザを入れる')
  }
}

export class NYStyleCheesePizza extends Pizza {
  constructor() {
    super(
      'ニューヨークスタイルのソース&チーズピザ',
      '薄いクラフト生地',
      'マリナラソース',
      ['粉レッジャーノチーズ']
    )
  }
}

export class ChicagoStyleCheesePizza extends Pizza {
  constructor() {
    super(
      'シカゴスタイルのディープディッシュチーズピザ',
      '極厚クラフト生地',
      'プラムトマトソース',
      ['刻んだモッツァレラチーズチーズ']
    )
  }

  cut() {
    console.log('ピザを四角形に切り分ける')
  }
}
