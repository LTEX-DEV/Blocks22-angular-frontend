import { AssesmentModule } from './assesment.module';

describe('AssesmentModule', () => {
  let assesmentModule: AssesmentModule;

  beforeEach(() => {
    assesmentModule = new AssesmentModule();
  });

  it('should create an instance', () => {
    expect(assesmentModule).toBeTruthy();
  });
});
