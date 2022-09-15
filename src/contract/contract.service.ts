import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContractDto, UpdateContractDto } from './dto';

@Injectable()
export class ContractService {
  constructor(private prisma: PrismaService) {}

  async create(createContractDto: CreateContractDto) {
    const date = Date.now();
    const today = new Date(date);
    today.getFullYear();
    const contractValidation = await this.prisma.contract.findMany({
      where: {
        year: today.getFullYear(),
      },
    });
    if (contractValidation.length == 0) {
      createContractDto.order = 1;
    }
    const contract = await this.prisma.contract.create({
      data: createContractDto,
    });
    return contract;
  }

  findAll() {
    return `This action returns all contract`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contract`;
  }

  update(id: number, updateContractDto: UpdateContractDto) {
    return `This action updates a #${id} contract`;
  }

  remove(id: number) {
    return `This action removes a #${id} contract`;
  }
}
