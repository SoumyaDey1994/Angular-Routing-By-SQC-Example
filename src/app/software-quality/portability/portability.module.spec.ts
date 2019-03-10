import { PortabilityModule } from './portability.module';

describe('PortabilityModule', () => {
  let portabilityModule: PortabilityModule;

  beforeEach(() => {
    portabilityModule = new PortabilityModule();
  });

  it('should create an instance', () => {
    expect(portabilityModule).toBeTruthy();
  });
});
