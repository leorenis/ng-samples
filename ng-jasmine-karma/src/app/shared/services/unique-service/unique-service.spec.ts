import { getNumberOfCurrencyDigits } from '@angular/common';
import { UniqueService } from './unique-service';

describe(UniqueService.name, () => {

  let service: UniqueService;
  let prefix: string;

  beforeEach(() => {
    service = new UniqueService();
    prefix = 'app';
  });

  it(`${UniqueService.prototype.getUniqueIdWithPrefix.name}
    deveria gerar id quando chamado chamado com prefixo`, () => {
    const id = service.getUniqueIdWithPrefix(prefix);
    expect(id.startsWith(prefix)).toBeTrue();
  });

  it(`${UniqueService.prototype.getUniqueIdWithPrefix.name}
    não deveria gerar id duplicados quando chamado duas vezes`, () => {
    const ids = new Set();
    for (let i = 0; i < 30; i++) {
      ids.add(service.getUniqueIdWithPrefix(prefix));
    }
    expect(ids.size).toBe(30);
  });

  it(`${UniqueService.prototype.getNumberOfGeneratedUniqueIds.name}
    deveria retornar o numero de IDs gerados`, () => {
    service.getUniqueIdWithPrefix(prefix);
    service.getUniqueIdWithPrefix(prefix);
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`${UniqueService.prototype.getUniqueIdWithPrefix.name}
    deveria lancar excessao quando prefixo invalido`, () => {
    // Truque da chamada do metodo embrulhado por uma arrow function pra evitar explodir e falhar o teste
    ['', null, undefined, '0', '100'].forEach(it => expect(() => service.getUniqueIdWithPrefix(it))
      .withContext(`Valor inválido: ${it}`)
      .toThrow());
  });
});
