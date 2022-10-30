import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Kuba' })
  firstName: string;

  @ApiProperty({ example: 'Kowalski' })
  lastName: string;

  @ApiProperty({ example: 'email@email.com' })
  email: string;

  @ApiProperty({ example: new Date() })
  eventDate: Date;
}
