import { randomUUID } from 'crypto';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Comunidade1668663561127 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'comunidade',
        columns: [
          {
            name: 'id',
            type: 'varchar(50)',
            isPrimary: true,
          },
          {
            name: 'nome',
            type: 'varchar(50)',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'link',
            type: 'varchar(50)',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar(255)',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'descricao',
            type: 'varchar(255)',
            isUnique: true,
            isNullable: false,
          },
        ],
      }),
    );

    await queryRunner.query(
      `INSERT INTO comunidade(id, nome, link, email , descricao) VALUES ('${randomUUID()}', 'feministech','https://feministech.github.io/' , 'oifeministech@gmail.com', 'A Feministech é um grupo de pessoas que se identificam no feminino e não-bináries que produzem, consomem e compartilham conteúdo sobre tecnologia, enquanto constroem uma comunidade diversa e inclusiva.');`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('comunidade');
  }
}
