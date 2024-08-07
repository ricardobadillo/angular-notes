export class FakeService {
  constructor() {}

  getValue(): string {
    return 'Fake value';
  }

  setValue(value: string): void {}

  getPromiseValue(): Promise<string> {
    return Promise.resolve('Valor fake en promesa');
  }
}
