import { SoftwareQualityModule } from './software-quality.module';

describe('SoftwareQualityModule', () => {
  let softwareQualityModule: SoftwareQualityModule;

  beforeEach(() => {
    softwareQualityModule = new SoftwareQualityModule();
  });

  it('should create an instance', () => {
    expect(softwareQualityModule).toBeTruthy();
  });
});
