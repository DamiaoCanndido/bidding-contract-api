import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ContractModule } from './contract/contract.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ContractModule,
    PrismaModule,
  ],
})
export class AppModule {}
