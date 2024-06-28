import { Length, IsEmail } from '@/domain/validation';

export class User {
    @Length(6, 255, { message: 'O nome dever conter entre 6 e 255 caracteres' })
    name: string;

    @IsEmail({ message: 'Email inválido' })
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}
