import { randomUUID } from "crypto";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('comunidade')
export class Comunidade {
    @PrimaryColumn()
    id: string

    @Column({ 
        nullable: false,
        unique: true
    })
    nome:string

    @Column({ nullable: false })
    email: string

    @Column({ nullable: false })
    descricao: string

    @Column({ nullable: false })
    link: string

    constructor(
        nome: string,
        email: string,
        descricao: string,
        link: string
    ){
        this.id = randomUUID(),
        this.nome = nome,
        this.email = email,
        this.descricao = descricao,
        this.link = link
    }
}