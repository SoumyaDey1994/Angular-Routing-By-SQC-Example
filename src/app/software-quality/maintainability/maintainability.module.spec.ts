import { MaintainabilityModule } from './maintainability.module';

describe('MaintainabilityModule', () => {
  let maintainabilityModule: MaintainabilityModule;

  beforeEach(() => {
    maintainabilityModule = new MaintainabilityModule();
  });

  it('should create an instance', () => {
    expect(maintainabilityModule).toBeTruthy();
  });
});
