import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContractDto, UpdateContractDto } from './dto';

@Injectable()
export class ContractService {
  constructor(private prisma: PrismaService) {}

  async create(createContractDto: CreateContractDto) {
    const date = Date.now();
    const today = new Date(date);
    const contractValidation = await this.prisma.contract.findFirst({
      where: {
        year: today.getFullYear(),
      },
      orderBy: {
        order: 'desc',
      },
    });

    if (!contractValidation) {
      createContractDto.order = 1;
    } else {
      createContractDto.order = contractValidation.order + 1;
    }
    const contract = await this.prisma.contract.create({
      data: createContractDto,
    });
    return contract;
  }

  async findAll() {
    const contracts = await this.prisma.contract.findMany();
    return contracts;
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
