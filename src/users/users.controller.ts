import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update.user.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private UserService:UsersService){
    }

    @Get() // http://localhost:3000/users
    findAll(){
        return this.UserService.findAll();
    }

    @Get(':id') // http://localhost:3000/users/1
    findById(@Param('id', ParseIntPipe) id: number) {
        return this.UserService.findAll_id(id);
    }

    @Post() // http://localhost:3000/users
    create(@Body() user:CreateUserDto){
        return this.UserService.create(user);
    }

    @Put(':id') // http://localhost:3000/users/1
    async update(@Param('id', ParseIntPipe) id: number, @Body() user: UpdateUserDto) {
        const updatedUser = await this.UserService.update(id, user);
        if (!updatedUser) {
            return { message: 'Usuario no encontrado', statusCode: 404 };
        }
        return updatedUser;
    }
}
