import {
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import {
  Request,
  Response,
  NextFunction,
} from 'express';

interface RequestUser extends Request {
  user: any
}

@Injectable()
export class RedirectIfNotAuthenticatedMiddleware implements NestMiddleware {
  use(req: RequestUser, res: Response, next: NextFunction) {
    if (!req.user) {
      return res.redirect('/auth/login');
    }
    next();
  }
}
