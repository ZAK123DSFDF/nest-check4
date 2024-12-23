import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    console.log('request');
    return this.appService.getHello();
  }
  @Post('fetchData')
  fetchData(@Body() body: any, @Res() res: Response): any {
    console.log('Received body:', body);
    const response = this.appService.processBody(body);
    res.status(200).json(response);
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
