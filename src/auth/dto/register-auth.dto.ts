import { IsNotEmpty, IsString, IsEmail, MinLength, IsOptional, IsNumberString } from "class-validator";

export class RegisterAuthDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    lastname: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsNumberString()
    phone: string;

    @IsOptional()
    @IsString()
    image?: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;

    @IsOptional()
    @IsString()
    notification_token?: string;
}
