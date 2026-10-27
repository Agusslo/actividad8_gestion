function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

function esPositivo(a) {
  return a > 0;
}

function promedio(a, b) {
  return (a + b) / 2;
}

function mayor(a, b) {
  return a > b ? a : b;
}

function menor(a, b) {
  return a < b ? a : b;
}

function cuadrado(a) {
  return a * a;
}

function cubo(a) {
  return a * a * a;
}

function valorAbsoluto(a) {
  return Math.abs(a);
}

module.exports = {
  sumar,
  restar,
  multiplicar,
  dividir,
  esPositivo,
  promedio,
  mayor,
  menor,
  cuadrado,
  cubo,
  valorAbsoluto
};

