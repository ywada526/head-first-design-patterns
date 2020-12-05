export abstract class Beverage {
  protected description: string = '不明な飲み物'

  getDescription() {
    return this.description
  }
  abstract cost(): number
}
