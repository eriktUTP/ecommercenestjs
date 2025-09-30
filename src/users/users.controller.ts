import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private UserService:UsersService){
    }

    @Post() // http://localhost:3000/users
    create(@Body() user:CreateUserDto){
        return this.UserService.create(user);
    }
}
