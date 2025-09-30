import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('register') // http://localhost:3000/auth/register
    register(@Body() user:RegisterAuthDto){
        return this.authService.register(user);
    }

    @Post('login') // http://localhost:3000/auth/login
    login(@Body() LoginAuthDto: LoginAuthDto){
        return this.authService.login(LoginAuthDto);
    }
}
