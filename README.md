<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://github.com/feministech/feministech.github.io/blob/main/logo.png?raw=true" width="200" alt="Feministech Logo" /></a>
</p>

  <p align="center">Aplicação de backend desenvolvida na <strong>Maratona Feministech</strong></p>
    <p align="center">
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição

Aplicação de backend desenvolvida com [Nest](https://github.com/nestjs/nest) durante a Maratona Feministech no dia 20 de novembro de 2022

## Requisitos

1. [Node LTS](https://nodejs.org/en/);
2. [Docker Desktop](https://www.docker.com/);
3. [Visual Studio Code](https://code.visualstudio.com/) ou outra IDE de sua preferência;
3. [GitHub Desktop](https://desktop.github.com/) para clonar;

## Instalação

```bash
$ yarn install
```

## Rodando a aplicação local

1. Execute o [Docker Desktop](https://www.docker.com/)
2. Execute os comandos abaixo

```bash
# local database
$ yarn db
$ yarn migration:run

# watch mode
$ yarn start:dev
```

## Testes automatizados

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Licença

Esta aplicação usa a licença [MIT licensed](LICENSE).
