// Operador Ternário - Verificando se o número é par ou ímpar
let num = 10;

// Usando o operador ternário
let res = (num % 2 == 0 ? "par" : "ímpar");
// Outra maneira de eu fazer essa comparação é negando o valor 

//res = ((num % 2) ? "par" : "ímpar"); // se rodarmos no console, aparece a comdição impar
// explicação
/* 10 % 2 = 0
em condicionais o valor 0 = false e o 1 = true / como 0 é false, a condição ira para a proxima saida que é impar
para arrumarmos essa condição, podemos negar o valor do 0 = false, basta usarmso o operador NOT

res = (!(num % 2) ? "par" : "ímpar"); */
console.log(res);

/* Explicação:
 * O operador ternário funciona como uma estrutura condicional simplificada.
 * A sintaxe é:
 * condição ? valor_se_verdadeiro : valor_se_falso
 *
 * Neste exemplo:
 * - condição: num % 2 === 0 (verifica se o resto da divisão de 'num' por 2 é igual a 0)
 * - valor_se_verdadeiro: "par"
 * - valor_se_falso: "ímpar"
 *
 * Como o número 10 dividido por 2 não tem resto (10 % 2 === 0), 
 * a condição é verdadeira e o resultado será "par".
 */

// Testando com outro número
num = 7;
res = (num % 2 === 0 ? "par" : "ímpar");
console.log(res);

/* Explicação adicional:
 * Quando num = 7:
 * - 7 % 2 resulta em 1 (verdadeiro).
 * - Então a condição retorna "ímpar".
 */

