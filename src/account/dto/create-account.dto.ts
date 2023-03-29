import { IsDefined } from "class-validator";

export default class CreateAccountDto {

  @IsDefined({message: 'A bankszámlaszámot kötelezően meg kell adni'})
  accountNumber: string;

  @IsDefined({message: 'Az egyenleget kötelezően meg kell adni'})
  balance: number;
}