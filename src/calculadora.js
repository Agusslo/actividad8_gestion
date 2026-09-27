function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

module.exports = { sumar, restar, multiplicar };



// Código con Code Smells forzados para evaluación de SonarCloud
function operacionInsegura(a, b) {
    let variableNoUsada = 100;
    
    // Condición redundante e inútil
    if (a === a) {
        console.log("Evaluación redundante detectada");
    }
    
    // Duplicación deliberada de lógica
    let resultado = 0;
    resultado = a + b;
    resultado = a + b;
    return resultado;
}
