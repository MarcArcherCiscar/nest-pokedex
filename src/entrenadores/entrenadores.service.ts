import { Injectable } from '@nestjs/common';
import { CreateEntrenadoreDto } from './dto/create-entrenadore.dto';
import { UpdateEntrenadoreDto } from './dto/update-entrenadore.dto';

@Injectable()
export class EntrenadoresService {
  create(createEntrenadoreDto: CreateEntrenadoreDto) {
    return 'This action adds a new entrenadore';
  }

  findAll() {
    return `This action returns all entrenadores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entrenadore`;
  }

  update(id: number, updateEntrenadoreDto: UpdateEntrenadoreDto) {
    return `This action updates a #${id} entrenadore`;
  }

  remove(id: number) {
    return `This action removes a #${id} entrenadore`;
  }
}
