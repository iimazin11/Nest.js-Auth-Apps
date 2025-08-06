import { Test, TestingModule } from '@nestjs/testing';
import { GoogleCallbackController } from './callback.controller';

describe('CallbackController', () => {
  let controller: GoogleCallbackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GoogleCallbackController],
    }).compile();

    controller = module.get<GoogleCallbackController>(GoogleCallbackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
