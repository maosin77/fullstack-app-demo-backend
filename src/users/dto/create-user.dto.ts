import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Kuba' })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Kubacki' })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({ example: 'kubakubacki@email.com' })
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

  @ApiProperty({ example: new Date() })
  @IsNotEmpty()
  eventDate: Date;
}
