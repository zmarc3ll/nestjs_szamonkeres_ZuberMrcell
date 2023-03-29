import { Body, Delete, Get, HttpException, HttpStatus, Injectable, Param, Patch, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateAccountDto from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>
  ) {}
  @Post()
  async create(@Body() accountData: CreateAccountDto) {
    const newAccount = await this.accountRepository.create(accountData);
    await this.accountRepository.save(newAccount)
    return newAccount;
  }

  @Get('/accont/:id')
  async getById(id: number) {
    const account = await this.accountRepository.findOne({where: { id }});
    if (account) {
      return account;
    }
    throw new HttpException('Nem létezik számla ezzel az azonosítóval', HttpStatus.NOT_FOUND);
  }

  @Patch('/account/:id')
  update(@Param('id') id: number, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountRepository.update(+id, updateAccountDto);
  }

  @Delete('/account/:id')
  remove(@Param('id') id: number) {
    return this.accountRepository.remove(Account[+id])
  }
}
