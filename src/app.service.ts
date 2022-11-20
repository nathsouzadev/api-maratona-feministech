import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comunidade } from './config/entities/Comunidade';
import { CriarComunidade } from './dto/criarComunidade.dto';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Comunidade) private comunidadeRepository: Repository<Comunidade>
  ){}

  listarComunidades = async () => {
    return this.comunidadeRepository.find()
  }

  criarComunidade = async(criarComunidade: CriarComunidade) => {
    const comunidade = new Comunidade(
      criarComunidade.nome,
      criarComunidade.email,
      criarComunidade.descricao,
      criarComunidade.link
    )
    return this.comunidadeRepository.save(comunidade)
  }
}
