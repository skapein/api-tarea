import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class LibrosDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly nombre: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly nacionalidad: string;
  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  readonly anio_nacimiento;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly genero: string;
}