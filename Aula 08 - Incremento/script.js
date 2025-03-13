// Exemplo de incremento com explicação

// Inicializando a variável
let contador = 0;

// // Pós-incremento
// console.log("Valor inicial de contador: " + contador);
// let resultadoPosIncremento = contador++; // Usa o valor atual de contador, depois incrementa
// console.log("Pós-incremento:");
// console.log("Resultado após contador++: " + resultadoPosIncremento);
// console.log("Valor atual de contador: " + contador);

// /* Explicação:
//  * No pós-incremento (contador++), o valor original da variável é usado primeiro,
//  * e só depois ela é incrementada.
//  */

//Reiniciando o contador
contador = 0;

// Pré-incremento
console.log("\nValor inicial de contador: " + contador);
let resultadoPreIncremento = ++contador; // Incrementa o valor antes de usá-lo
console.log("Pré-incremento:");
console.log("Resultado após ++contador: " + resultadoPreIncremento);
console.log("Valor atual de contador: " + contador);

/* Explicação:
 * No pré-incremento (++contador), o valor da variável é incrementado primeiro,
 * e o novo valor é usado imediatamente.
 */
