import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CatService } from './cat.service';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CreateCatDto } from './dto/create-cat.dto';

@ApiTags('APIRest')
@Controller('api/cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post('create')
  create(@Body() createCatDto: CreateCatDto) {
    return this.catService.create(createCatDto);
  }

  @Get('find/all')
  findAll() {
    return this.catService.findAll();
  }

  @Get('find/:id')
  findOne(@Param('id') id: string) {
    return this.catService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catService.remove(+id);
  }
}
