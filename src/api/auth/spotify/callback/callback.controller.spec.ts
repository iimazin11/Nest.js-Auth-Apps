import { Test, TestingModule } from '@nestjs/testing';
import { SpotifyCallbackController } from './callback.controller';

describe('SpotifyCallbackController', () => {
  let controller: SpotifyCallbackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpotifyCallbackController],
    }).compile();

    controller = module.get<SpotifyCallbackController>(SpotifyCallbackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
