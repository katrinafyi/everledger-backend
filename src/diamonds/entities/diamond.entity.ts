export enum Color {
  D,
  G,
  J,
  K,
  N,
  S,
  Z,
}

export enum Cut {
  GD,
}

export enum Clarity {
  IF,
  VVS1,
  VVS2,
  VS1,
  VS2,
  SI1,
  SI2,
  I1,
  I2,
}

export class Diamond {
  public color: Color;
  public cut: Cut;
  public clarity: Clarity;
  public caratWeight: number;
}
