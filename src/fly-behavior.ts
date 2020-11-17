export interface FlyBehavior {
  fly(): void
}

export class FlyWithWings implements FlyBehavior {
  fly() {
    console.log('飛んでいます！！')
  }
}

export class FlyNoWay implements FlyBehavior {
  fly() {
    console.log('飛べません')
  }
}

export class FlyRocketPowered implements FlyBehavior {
  fly() {
    console.log('ロケットで飛んでいます!')
  }
}
