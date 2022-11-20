import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { CriarComunidade } from './dto/criarComunidade.dto';

@Controller('comunidade')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  listarComunidades() {
    return this.appService.listarComunidades()
  }

  @Post()
  criarComunidade(@Body(new ValidationPipe()) request: CriarComunidade) {
    return this.appService.criarComunidade(request)
  }
}
