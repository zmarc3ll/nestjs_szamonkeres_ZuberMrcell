import { IsBoolean, IsDefined, IsString } from "class-validator";

export default class CreateOwnerDto {

  @IsString()
  @IsDefined({message: 'A név megadása kötelező'})
  fullName: string;

  @IsBoolean()
  @IsDefined({message: 'A fiók tipúsának megadása kötelező'})
  business: boolean;

}