export enum Color {
  D = 'D',
  G = 'G',
  J = 'J',
  K = 'K',
  N = 'N',
  S = 'S',
  Z = 'Z',
}

export enum Cut {
  GD = 'GD',
  D = 'D',
}

export enum Clarity {
  IF = 'IF',
  VVS1 = 'VVS1',
  VVS2 = 'VVS2',
  VS1 = 'VS1',
  VS2 = 'VS2',
  SI1 = 'SI1',
  SI2 = 'SI2',
  I1 = 'I1',
  I2 = 'I1',
}

export class Diamond {
  public color: Color;
  public cut: Cut;
  public clarity: Clarity;
  public caratWeight: number;
}
