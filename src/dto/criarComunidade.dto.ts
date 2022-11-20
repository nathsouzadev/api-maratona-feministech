import { IsNotEmpty } from "class-validator";

export class CriarComunidade {
    @IsNotEmpty({ message: 'Campo precisa ser preenchdio' })
    nome: string

    @IsNotEmpty({ message: 'Campo precisa ser preenchdio' })
    link: string

    @IsNotEmpty({ message: 'Campo precisa ser preenchdio' })
    descricao: string

    @IsNotEmpty({ message: 'Campo precisa ser preenchdio' })
    email: string
}
