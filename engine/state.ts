import { Player } from './player';

export interface IState {
  game_over: boolean,
  possible_moves: number[],
  winner: Player
}
