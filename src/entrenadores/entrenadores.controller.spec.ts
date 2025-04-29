import { Test, TestingModule } from '@nestjs/testing';
import { EntrenadoresController } from './entrenadores.controller';
import { EntrenadoresService } from './entrenadores.service';

describe('EntrenadoresController', () => {
  let controller: EntrenadoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntrenadoresController],
      providers: [EntrenadoresService],
    }).compile();

    controller = module.get<EntrenadoresController>(EntrenadoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
