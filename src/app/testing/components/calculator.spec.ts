import { Calculator } from './calculator';

describe('Test para Calculator', () => {
  it('#Multiplicar debe retornar un 25', () => {
    /*
            ! Arrange = Preparar. 
            ! Act = Actuar.
            ! Assert = Resolver.
        */

    const calculator = new Calculator();
    const respuesta = calculator.multiplicar(5, 5);

    expect(respuesta).toEqual(25);
  });

  it('#Dividir debe retornar un null', () => {
    const calculator = new Calculator();
    const respuesta = calculator.dividir(5, 0);

    expect(respuesta).toBeNull();
  });

  it('Testear matchers', () => {
    const name = 'Ricardo';
    let otherName;

    expect(name).toBeDefined();
    expect(otherName).toBeUndefined();
  });
});
