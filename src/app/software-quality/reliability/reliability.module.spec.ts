import { ReliabilityModule } from './reliability.module';

describe('ReliabilityModule', () => {
  let reliabilityModule: ReliabilityModule;

  beforeEach(() => {
    reliabilityModule = new ReliabilityModule();
  });

  it('should create an instance', () => {
    expect(reliabilityModule).toBeTruthy();
  });
});
