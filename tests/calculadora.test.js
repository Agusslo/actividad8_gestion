const {
  sumar,
  restar,
  multiplicar,
  dividir,
  esPositivo
} = require('../src/calculadora');

describe('Calculadora', () => {

  test('suma dos números', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test('resta dos números', () => {
    expect(restar(5, 2)).toBe(3);
  });

  test('multiplica dos números', () => {
    expect(multiplicar(3, 4)).toBe(12);
  });

  test('divide dos números', () => {
    expect(dividir(10, 2)).toBe(5);
  });

  test('indica si un número es positivo', () => {
    expect(esPositivo(5)).toBe(true);
  });

  test('indica que un número negativo no es positivo', () => {
    expect(esPositivo(-5)).toBe(false);
  });

  test('cero no se considera positivo', () => {
    expect(esPositivo(0)).toBe(false);
  });
});
