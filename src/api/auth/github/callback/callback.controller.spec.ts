import { Test, TestingModule } from '@nestjs/testing';
import { GithubCallbackController } from './callback.controller';

describe('GithubCallbackController', () => {
  let controller: GithubCallbackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GithubCallbackController],
    }).compile();

    controller = module.get<GithubCallbackController>(GithubCallbackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
