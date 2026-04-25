import { Type } from "class-transformer"
import { IsString } from "class-validator"
import { IsEmail, IsNumber} from "class-validator"

export class CreateUserDto {

    @IsString()
    nombre!: string
    @IsEmail()
    email!: string

    @Type(() => Number)
    @IsNumber()
    puntos!: number

    @IsString()
    ciudad!: string
}