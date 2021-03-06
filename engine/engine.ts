const LENGTH = 9;

export class Board {
  private winning_combinations: number[][] = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]];

  constructor(private fields?: Field[]) {
    if (!fields || fields.length !== LENGTH) {
      this.fields = [];
      for (let i = 0; i < LENGTH; i++) {
        this.fields.push(Field.None);
      }
    }
  }

  public set(position: number, field: Field = Field.Cross): Board {
    const fields = this.fields.slice();
    fields[position] = field;
    return new Board(fields);
  }

  public line(combination: number[]) {
    const [i1, i2, i3] = combination;
    return [
      this.fields[i1],
      this.fields[i2],
      this.fields[i3],
    ]
  }

  public get state(): IState {
    const state: IState = {
      game_over: false,
      winner: Player.None,
      possible_moves: []
    };

    for (let combination of this.winning_combinations) {
      let line = this.line(combination);
      if (line.every(f => f === Field.Cross)) {
        state.game_over = true;
        state.winner = Player.Human;
        break;
      }
      if (line.every(f => f === Field.Nought)) {
        state.game_over = true;
        state.winner = Player.CPU;
        break;
      }
    }

    // calculate possible moves and possible draw
    if (!state.game_over) {
      this.fields.forEach((field, index) => {
        if (field === Field.None) {
          state.possible_moves.push(index);
        }
      });
      state.game_over = !state.possible_moves.length;
    }

    return state;
  }

  public static minimax(board: Board, field: Field, depth: number = 1): Eval {
    const { state } = board;
    switch (state.game_over) {
      case true: {
        const score = state.winner === Player.CPU ? (10 - depth) : (depth - 10);
        return new Eval(score);
      }
      case false: {
        const evaluated_moves: Eval[] = [];
        state.possible_moves.forEach((possible_move) => {
          const cloned_board = board.set(possible_move, field);
          const { score } = Board.minimax(cloned_board, FieldUtils.reverse(field), (depth + 1));
          evaluated_moves.push(new Eval(score, possible_move));
        });
        const [first, ...rest] = evaluated_moves.sort(Eval.sorter);
        const [last] = rest.reverse();

        switch (field) {
          case Field.Cross:
            return first;
          case Field.Nought:
            return last;
          default:
            throw new Error("should set either x or o");
        }
      }
    }
  }

  public cpu(): Board {
    const evl = Board.minimax(this, Field.Nought);
    return this.set(evl.position, Field.Nought);
  }

  toString(): string {
    let str = '';
    this.fields.forEach((field, index) => {
      str += FieldUtils.format(field);
      if ((index + 1) % 3 === 0) str += '\n';
    });
    return str;
  }
}

export class Eval {
  constructor(public score: number, public position: number = 0) {
  }

  static sorter(e1: Eval, e2: Eval): number {
    if (e1.score < e2.score) return -1;
    if (e1.score > e2.score) return 1;
    return 0;
  }
}

export enum Field {
  None = 0,
  Nought,
  Cross
}

export class FieldUtils {
  static reverse(field: Field): Field {
    if (field === Field.Nought) return Field.Cross;
    if (field === Field.Cross) return Field.Nought;
    throw new Error("cant reverse none");
  }

  static format(field: Field): string {
    if (field === Field.Nought) return '[x]';
    if (field === Field.Cross) return '[o]';
    return '[ ]';
  }
}

export enum Player {
  None = 0,
  CPU,
  Human
}

export class PlayerUtils {
  static format(player: Player): string {
    switch (player) {
      case Player.CPU:
        return 'CPU';
      case Player.Human:
        return 'Human';
      default:
        return 'None';
    }
  }
}

export interface IState {
  game_over: boolean,
  possible_moves: number[],
  winner: Player
}
