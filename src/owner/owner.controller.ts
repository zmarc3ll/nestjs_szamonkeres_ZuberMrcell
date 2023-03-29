import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import  CreateOwnerDto  from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { Repository } from 'typeorm';

@Controller('owner')
export class OwnerController {
  constructor(
    @InjectRepository(Owner)
    private ownerRepository: Repository<Owner>
  ) {}
  @Post('')
  async create(@Body() ownerData: CreateOwnerDto) {
    const newOwner = await this.ownerRepository.create(ownerData);
    await this.ownerRepository.save(newOwner)
    return newOwner;
  }

  @Get('/:id')
  async getById(id: number) {
    const owner = await this.ownerRepository.findOne({where: { id }});
    if (owner) {
      return owner;
    }
    throw new HttpException('Nem létezik tulajdonos ezzel az azonosítóval', HttpStatus.NOT_FOUND);
  }

  @Patch('/:id')
  update(@Param('id') id: number, @Body() updateOwnerDto: UpdateOwnerDto) {
    return this.ownerRepository.update(+id, updateOwnerDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.ownerRepository.remove(Owner[id])
  }
}