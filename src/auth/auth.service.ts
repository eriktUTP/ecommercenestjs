import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { register } from 'module';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { compare } from 'bcrypt';
//import { jwtConstants } from './jwt.constants';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(User) private usersRepository: Repository<User>,
    private jwtService:JwtService)
    { }

    async register(user: RegisterAuthDto) {

        const { email, phone, password, name, lastname } = user;

        // Validación de campos vacíos con mensajes personalizados
        if (!email) {
            throw new HttpException('El campo email es obligatorio', HttpStatus.BAD_REQUEST);
        }
        if (!lastname) {
            throw new HttpException('El campo lastname es obligatorio', HttpStatus.BAD_REQUEST);
        }
        if (!phone) {
            throw new HttpException('El campo teléfono es obligatorio', HttpStatus.BAD_REQUEST);
        }
        if (!password) {
            throw new HttpException('El campo contraseña es obligatorio', HttpStatus.BAD_REQUEST);
        }
        if (!name) {
            throw new HttpException('El campo nombre es obligatorio', HttpStatus.BAD_REQUEST);
        }

        const emailExist = await this.usersRepository.findOneBy({ email: email }) // para buscar un campo especifico
        if (emailExist) { // 409 CONFLICT
            return new HttpException('El email ya esta registrado', HttpStatus.CONFLICT);
        }

        const phoneExist = await this.usersRepository.findOneBy({ phone: phone })
        if (phoneExist) {
            return new HttpException('El teléfono ya existe', HttpStatus.CONFLICT);
        }
        const newUser = this.usersRepository.create(user);
        return this.usersRepository.save(newUser);

    }

    async login(loginData: LoginAuthDto) {
        const { email, password } = loginData;

        // Validación de campos vacíos
        if (!email || !password) {
            throw new HttpException('Email y contraseña son obligatorios', HttpStatus.BAD_REQUEST);
        }

        const userFound = await this.usersRepository.findOneBy({ email: email });
        if (!userFound) {
            throw new HttpException('El email no existe', HttpStatus.NOT_FOUND);
        }

        const isPasswordValid = await compare(password, userFound.password);
        if (!isPasswordValid) {
            throw new HttpException('La contraseña es incorrecta', HttpStatus.FORBIDDEN);
        }

        // Generar token JWT
        const payload = { id: userFound.id, name: userFound.name };
        const token = this.jwtService.sign(payload);

        // Respuesta de login exitoso
        return {
            message: 'Inicio de sesión exitoso',
            user: {
                id: userFound.id,
                name: userFound.name,
                email: userFound.email,
            },
            token,
        };
    }

}