import { Module } from '@nestjs/common';
import { ContractModule } from './contract/contract.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ContractModule, PrismaModule],
})
export class AppModule {}
