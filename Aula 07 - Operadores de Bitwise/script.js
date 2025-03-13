// Operador Bitwise & (AND)
let n1 = 24;
let n2 = 5;
// Retorna um número com base na combinação binária de 24 e 5
let res = n1 & n2; // O resultado aqui será 0
console.log(res);

/* Explicação:
Em binário, os números 24 e 5 são representados assim:
24 = 00011000
 5 = 00000101
O operador & compara bit a bit e retorna 1 somente se ambos os bits forem 1:
00011000
00000101
---------
00000000 (resultado: 0)
*/

// Operador Bitwise | (OR)
n1 = 10;
n2 = 11;
res = n1 | n2; // Resultado: 11
console.log(res);

/* Explicação:
Em binário, os números 10 e 11 são representados assim:
10 = 00001010
11 = 00001011
O operador | compara bit a bit e retorna 1 se pelo menos um dos bits for 1:
00001010
00001011
---------
00001011 (resultado: 11)
*/

// Operador Bitwise ^ (XOR)
n1 = 12;
n2 = 5;
res = n1 ^ n2; // Resultado: 9
console.log(res);

/* Explicação:
Em binário, os números 12 e 5 são representados assim:
12 = 00001100
 5 = 00000101
O operador ^ compara bit a bit e retorna 1 se os bits forem diferentes:
00001100
00000101
---------
00001001 (resultado: 9)
*/

// Operador Bitwise ~ (NOT)
n1 = 5;
res = ~n1; // Resultado: -6
console.log(res);

/* Explicação:
Em binário, o número 5 é representado assim:
5 = 00000101
O operador ~ inverte os bits:
~5 = 11111010 (resultado em complemento de 2: -6)
*/

// Operador Bitwise << (Shift à esquerda)
n1 = 3;
res = n1 << 2; // Resultado: 12
console.log(res);

/* Explicação:
Em binário, o número 3 é representado assim:
3 = 00000011
O operador << desloca os bits para a esquerda, preenchendo com 0 à direita:
00000011 << 2 = 00001100 (resultado: 12)
*/

// Operador Bitwise >> (Shift à direita)
n1 = 16;
res = n1 >> 2; // Resultado: 4
console.log(res);
/* Explicação:
Em binário, o número 16 é representado assim:
16 = 00010000
O operador >> desloca os bits para a direita, preservando o sinal:
00010000 >> 2 = 00000100 (resultado: 4)
*/

// Operador Bitwise >>> (Shift à direita sem sinal)
n1 = -16;
res = n1 >>> 2; // Resultado: 1073741820
console.log(res);

/* Explicação:
Em binário, -16 é representado em complemento de 2:
-16 = 11111111111111111111111111110000
O operador >>> desloca os bits para a direita, preenchendo com 0 (ignora o sinal):
11111111111111111111111111110000 >>> 2 = 00111111111111111111111111111100
(resultado: 1073741820)
*/
