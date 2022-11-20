import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppService } from './app.service';
import { Comunidade } from './config/entities/Comunidade';

describe('AppService', () => {
  let appService: AppService;
  let mockComunidadeRepository: Repository<Comunidade>

  const COMUNIDADE_TOKEN = getRepositoryToken(Comunidade)
    
  beforeEach(async () => {
      const app: TestingModule = await Test.createTestingModule({
        providers: [
            AppService,
            {
                provide: COMUNIDADE_TOKEN,
                useValue: {
                    find: jest.fn().mockImplementation(() => Promise.resolve([{
                        id: 'some-id',
                        nome: 'nome-comunidade',
                        link: 'link-comunidade',
                        email: 'comunidade@email.com',
                        descricao: 'Descricao da comunidade'
                    }]))
                }
            }
        ],
      }).compile();

      appService = app.get<AppService>(AppService);
    });

  it('deve retornar a lista de comunidades', async () => {
    const comunidades = await appService.listarComunidades()
    expect(comunidades).toMatchObject([{
        id: 'some-id',
        nome: 'nome-comunidade',
        link: 'link-comunidade',
        email: 'comunidade@email.com',
        descricao: 'Descricao da comunidade'
    }]);
  });
});
