import { FuntionalityModule } from './functionality.module';

describe('FuntionalityModule', () => {
  let funtionalityModule: FuntionalityModule;

  beforeEach(() => {
    funtionalityModule = new FuntionalityModule();
  });

  it('should create an instance', () => {
    expect(funtionalityModule).toBeTruthy();
  });
});
