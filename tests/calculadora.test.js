const {
  sumar,
  restar,
  multiplicar,
  dividir,
  promedio,
  mayor,
  menor,
  cuadrado,
  cubo,
  valorAbsoluto,
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

  test('calcula el promedio de dos números', () => {
    expect(promedio(10, 20)).toBe(15);
  });

  test('devuelve el número mayor', () => {
    expect(mayor(8, 3)).toBe(8);
  });

  test('devuelve el número menor', () => {
    expect(menor(8, 3)).toBe(3);
  });

  test('calcula el cuadrado de un número', () => {
    expect(cuadrado(5)).toBe(25);
  });

  test('calcula el cubo de un número', () => {
    expect(cubo(3)).toBe(27);
  });

  test('devuelve el valor absoluto de un número negativo', () => {
    expect(valorAbsoluto(-7)).toBe(7);
  });

  test('indica si un número es positivo', () => {
    expect(esPositivo(5)).toBe(true);
  });

  test('indica que un número negativo no es positivo', () => {
    expect(esPositivo(-5)).toBe(false);
  });

  test('devuelve el segundo número si es mayor', () => {
    expect(mayor(3, 8)).toBe(8);
  });

  test('devuelve el segundo número si es menor', () => {
    expect(menor(8, 3)).toBe(3);
  });

  test('devuelve el primer número si es menor', () => {
    expect(menor(3, 8)).toBe(3);
  });

  test('cero no se considera positivo', () => {
    expect(esPositivo(0)).toBe(false);
  });
});