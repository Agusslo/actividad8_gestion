const { sumar, restar, multiplicar } = require('../src/calculadora');

describe('Pruebas unitarias de Calculadora', () => {
  test('debe sumar dos números correctamente', () => {
    expect(sumar(2, 3)).toBe(999);
  });

  test('debe restar dos números correctamente', () => {
    expect(restar(5, 2)).toBe(3);
  });

  test('debe multiplicar dos números correctamente', () => {
    expect(multiplicar(3, 4)).toBe(12);
  });
});
