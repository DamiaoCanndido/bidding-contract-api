import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private config: ConfigService) {}
  canActivate(context: ExecutionContext): boolean {
    const { body } = context.switchToHttp().getRequest();
    if (
      !this.config.get('TOKEN_ID') ||
      !body.tokenId ||
      this.config.get('TOKEN_ID') !== body.tokenId
    ) {
      return false;
    }
    return true;
  }
}
