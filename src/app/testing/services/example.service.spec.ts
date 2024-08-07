// Servicios.
import { ExampleService } from './example.service';

fdescribe('ExampleService', () => {
  let service: ExampleService;

  beforeEach(() => {
    service = new ExampleService();
  });

  it('El servicio debió ser creado', () => {
    expect(service).toBeTruthy();
  });

  describe('Tests para getValue()', () => {
    it('Debe retornar "Mi valor"', () => {
      expect(service.getValue()).toBe('Mi valor');
    });
  });

  describe('Tests para setValue()', () => {
    it('Debe cambiar el valor', () => {
      expect(service.getValue()).toBe('Mi valor');
      service.setValue('El valor ha cambiado');
      expect(service.getValue()).toBe('El valor ha cambiado');
    });
  });

  describe('Tests para getPromiseValue()', async () => {
    it('Debe retornar el valor servido desde una promesa', async () => {
      const respuesta: string = await service.getPromiseValue();
      expect(respuesta).toBe('Valor en promesa');
    });
  });

  describe('Tests para getObservableValue()', async () => {
    it('Debe retornar el valor servido desde un observable', async () => {
      let value: string;

      service.getObservableValue().subscribe((data) => {
        expect(data).toBe('Valor de un observable');
      });
    });
  });
});
