import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DatabaseModule } from 'src/infra/database/database.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtRefreshStrategy, JwtStrategy } from './strategy';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';

@Module({
  imports: [DatabaseModule, JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, JwtStrategy, JwtRefreshStrategy],
})
export class AuthModule {}
