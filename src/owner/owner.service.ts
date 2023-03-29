import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateOwnerDto from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(Owner)
    private ownerRepository: Repository<Owner>
  ) {}
  async create(ownerData: CreateOwnerDto) {
    const newOwner = await this.ownerRepository.create(ownerData);
    await this.ownerRepository.save(newOwner);
    return newOwner;
  }

  async getById(id: number) {
    const owner = await this.ownerRepository.findOne({where: { id }});
    if (owner) {
      return owner;
    }
    throw new HttpException('Nem létezik tulajdonos ezzel az azonosítóval', HttpStatus.NOT_FOUND);
  }

  update(id: number, updateOwnerDto: UpdateOwnerDto) {
    return `This action updates a #${id} owner`;
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }
}