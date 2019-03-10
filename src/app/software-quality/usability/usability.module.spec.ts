import { UsabilityModule } from './usability.module';

describe('UsabilityModule', () => {
  let usabilityModule: UsabilityModule;

  beforeEach(() => {
    usabilityModule = new UsabilityModule();
  });

  it('should create an instance', () => {
    expect(usabilityModule).toBeTruthy();
  });
});
