import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { EntrenadoresService } from './entrenadores.service';
import { CreateEntrenadoreDto } from './dto/create-entrenadore.dto';
import { UpdateEntrenadoreDto } from './dto/update-entrenadore.dto';

@Controller('entrenadores')
export class EntrenadoresController {
  constructor(private readonly entrenadoresService: EntrenadoresService) {}

  @Post()
  create(@Body() createEntrenadoreDto: CreateEntrenadoreDto) {
    return this.entrenadoresService.create(createEntrenadoreDto);
  }

  @Get()
  findAll() {
    return this.entrenadoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.entrenadoresService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntrenadoreDto: UpdateEntrenadoreDto) {
    return this.entrenadoresService.update(+id, updateEntrenadoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entrenadoresService.remove(+id);
  }
}
