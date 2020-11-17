export interface QuackBehavior {
  quack(): void
}

export class Quack implements QuackBehavior {
  quack() {
    console.log('ガーガー')
  }
}

export class MuteQuack implements QuackBehavior {
  quack() {
    console.log('<<沈黙>>')
  }
}

export class Squeak implements QuackBehavior {
  quack() {
    console.log('キューキュー')
  }
}
