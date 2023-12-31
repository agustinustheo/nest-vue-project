import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  @Get()
  getHelloWorld(@Res() res: Response): void {
    res.send('Hello World');
  }
}
