import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {

 
  constructor(private prismaService: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prismaService.usuarios.create({
      data: createUserDto
    })
  }

  findAll() {
    return this.prismaService.usuarios.findMany();
  }

  findOne(id: number) {
    return this.prismaService.usuarios.findUnique(
      {where: {id
        : id
      }}
    );
  }
 
  // update(id: number, updateUserDto: UpdateUserDto) {
  //   const user = this.findOne(id)

  //   if(user){
  //     const newUser = {...user, ...updateUserDto}
  //     users = users.map(u => (u.id === id ? newUser : u))

      
  //   }

  //   return this.findOne(id)
  // }

  remove(id: number){
    return this.prismaService.usuarios.delete({where: {
      id,
    }})
  }
}
