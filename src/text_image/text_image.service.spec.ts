import { Test, TestingModule } from '@nestjs/testing';
import { GeminiTextImageService } from './text_image.service';

describe('TextImageService', () => {
  let service: GeminiTextImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeminiTextImageService],
    }).compile();

    service = module.get<GeminiTextImageService>(GeminiTextImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
