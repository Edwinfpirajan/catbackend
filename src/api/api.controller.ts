import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('APICAT')
@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('get/all/random')
  async getRandomCats() {
    return this.apiService.getRandomCats();
  }
}
