import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat, CatDocument } from './entities/cat.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CatService {
  constructor(@InjectModel(Cat.name) private CatModule: Model<CatDocument>) {

  }

  async create(createCatDto: CreateCatDto) {
    const createdCat = this.CatModule.create(createCatDto)
    return createdCat;
  }

  findAll() {
    return this.CatModule.find().exec();
  }

  findOne(id: string) {
    return this.CatModule.findById(id)
   
  }

  async update(id: string, updateCatDto: UpdateCatDto) {
    const updatedCat = await this.CatModule.findByIdAndUpdate(id, updateCatDto, {new: true});
    return updatedCat;
  }

  async remove(id: string) {
    const deletedCat = await this.CatModule.findByIdAndDelete(id);
    return deletedCat;
  }
}
