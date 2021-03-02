import { Color, Cut, Clarity } from '../entities/diamond.entity';
import { IsEnum, IsNumber, Min } from 'class-validator';

export class CreateDiamondDto {
  @IsEnum(Color)
  public readonly color: Color;
  @IsEnum(Cut)
  public readonly cut: Cut;
  @IsEnum(Clarity)
  public readonly clarity: Clarity;
  @IsNumber()
  @Min(0)
  public readonly caratWeight: number;
}
