export class Eval {
  constructor(public score: number, public position: number = 0) {
  }

  static sorter(e1: Eval, e2: Eval): number {
    if (e1.score < e2.score) return -1;
    if (e1.score > e2.score) return 1;
    return 0;
  }

  // equal(evl: Eval): boolean {
  //   return (this.position === evl.position)
  //     && (this.score === evl.score);
  // }
}