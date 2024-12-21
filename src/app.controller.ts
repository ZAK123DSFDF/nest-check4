import { Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    return this.appService.getHello();
  }
  @Post('setCookie')
  getCookie(@Res() res: Response): any {
    res.cookie('myCookie', 'rqwrewerew', {
      httpOnly: true,
      secure: false,
    });
    res.status(200).json('Cookie set');
  }
  @Post('deleteCookie')
  deleteCookie(@Res() res: Response): any {
    res.cookie('myCookie', '', {
      httpOnly: true,
      secure: false,
      maxAge: 0,
    });
    res.status(200).json('Cookie deleted');
  }
}
