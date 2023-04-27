import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, BadRequestException, Put } from '@nestjs/common';
import { CatService } from './cat.service';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CreateCatDto } from './dto/create-cat.dto';
import { response } from 'express';

@ApiTags('APIRest')
@Controller('api/cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post('create')
  async create(@Body() createCatDto: CreateCatDto) {
    try {
      return await this.catService.create(createCatDto);
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  @Get('find/all')
  async findAll() {
    try {
      const response = await this.catService.findAll();
      return {
        message: "Lista de gatos",
        data: response
      }
      
    } catch (err) {
      throw new NotFoundException("No es posible crear el gato",err.message);
    }
  }

  @Get('find/:id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.catService.findOne(id);
    } catch (err) {
      throw new NotFoundException("El gato no existe", err.message);
    }
  }

  @Put('edit/:id')
  async update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    try {
      const response = await this.catService.update(id, updateCatDto);
      return {
        message: "Datos actualizados",
        data: response,
      };
    } catch (err) {
      throw new BadRequestException("No es posible actualizar", err.message);
    }
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    try {
      const response = await this.catService.remove(id);
      return{
        message: "Gato eliminado",
        data: response,
      }
    } catch (err) {
      throw new NotFoundException("El gato ya fue eliminado o no se encuentra en la base de datos", err.message);
    }
  }
}