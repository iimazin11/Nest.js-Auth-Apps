import { Test, TestingModule } from '@nestjs/testing';
import { SpotifyUserController } from './spotify.controller';

describe('SpotifyController', () => {
  let controller: SpotifyUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpotifyUserController],
    }).compile();

    controller = module.get<SpotifyUserController>(SpotifyUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
