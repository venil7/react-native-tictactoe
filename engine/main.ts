import { Board } from './board';
// const readline = require('readline');

let game = new Board();
//console.log(game.toString());

game = game.set(4);
// console.log(game.toString());

game = game.cpu();
console.log(game.toString());

game = game.set(7);
game = game.cpu();
console.log(game.toString());


// while (true) {
//   console.log("Your move: [0-8]: ");
// }