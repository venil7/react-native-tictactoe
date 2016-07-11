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