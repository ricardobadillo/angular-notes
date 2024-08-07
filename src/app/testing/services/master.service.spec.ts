// Servicios.
import { ExampleService } from './example.service';
import { FakeService } from './fake.service';
import { MasterService } from './master.service';

fdescribe('MasterService', () => {
  it('Debe de retornar "Mi valor" desde el Example Service', () => {
    let exampleService = new ExampleService();
    let masterService = new MasterService(exampleService);

    expect(masterService.getValue()).toBe('Mi valor');
  });

  it('Debe de retornar "Otro valor" desde un fake service', () => {
    let fakeService = new FakeService();
    let masterService = new MasterService(fakeService as unknown as ExampleService);

    expect(masterService.getValue()).toBe('Fake value');
  });

  it('Debe retornar "Fake desde object" desde un fake object', () => {
    const fake = { getValue: () => 'Fake desde object' };
    const masterService = new MasterService(fake as ExampleService);
    expect(masterService.getValue()).toBe('Fake desde object');
  });
});
