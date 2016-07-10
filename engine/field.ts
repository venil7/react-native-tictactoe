export enum Field {
  None = 0,
  Nought,
  Cross
}

export class FieldUtils {
  static reverse(field: Field): Field {
    if (field === Field.Nought) return Field.Cross;
    if (field === Field.Cross) return Field.Nought;
    return Field.None;
  }
}