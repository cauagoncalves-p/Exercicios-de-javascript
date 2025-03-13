// Exemplo com for...in
console.log("Exemplo com for...in:");
const pessoa = {
    nome: "Cauã",
    idade: 18,
    profissão: "Estudante",
};

for (let chave in pessoa) {
    console.log(`Propriedade: ${chave} - Valor: ${pessoa[chave]}`);
}

/* Explicação do for...in:
1. O laço `for...in` itera sobre as propriedades de um objeto.
2. A variável `chave` armazena o nome de cada propriedade do objeto.
3. O valor de cada propriedade é acessado com `pessoa[chave]`.
*/

// Exemplo com for...of
console.log("\nExemplo com for...of:");
const frutas = ["Maçã", "Banana", "Laranja"];

for (let fruta of frutas) {
    console.log(`Fruta: ${fruta}`);
}

/* Explicação do for...of:
1. O laço `for...of` itera diretamente sobre os valores de uma coleção iterável (como arrays ou strings).
2. A variável `fruta` armazena o valor de cada elemento no array `frutas`.
*/

// Diferença entre for...in e for...of
console.log("\nDiferença entre for...in e for...of:");
const arrayTeste = ["A", "B", "C"];

console.log("Usando for...in:");
for (let indice in arrayTeste) {
    console.log(`Índice: ${indice} - Valor: ${arrayTeste[indice]}`);
}

console.log("\nUsando for...of:");
for (let valor of arrayTeste) {
    console.log(`Valor: ${valor}`);
}

/* Explicação da diferença:
1. O `for...in` itera sobre os índices (ou chaves no caso de objetos).
2. O `for...of` itera diretamente sobre os valores da coleção.
*/

// Exemplo avançado com strings e Map
console.log("\nIterando sobre uma string com for...of:");
const texto = "JavaScript";
for (let letra of texto) {
    console.log(letra);
}

console.log("\nIterando sobre um Map com for...of:");
const mapa = new Map([
    ["chave1", "valor1"],
    ["chave2", "valor2"],
]);

for (let [chave, valor] of mapa) {
    console.log(`Chave: ${chave} - Valor: ${valor}`);
}

/*
Resumo:

for...in: Ideal para iterar sobre as propriedades de objetos ou os índices de arrays.

for...of: Perfeito para iterar diretamente sobre os valores de objetos iteráveis, como arrays, strings, Maps, Sets, etc.
*/