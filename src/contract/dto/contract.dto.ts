import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateContractDto {
  order: number;

  @IsString()
  @IsNotEmpty()
  company: string;

  @IsString()
  @IsNotEmpty()
  bidding: string;

  @IsString()
  @IsNotEmpty()
  object: string;

  @IsInt()
  @IsNotEmpty()
  value: number;

  @IsString()
  @IsNotEmpty()
  deadline: string;

  @IsString()
  @IsNotEmpty()
  tokenId: string;
}

export class UpdateContractDto {}
