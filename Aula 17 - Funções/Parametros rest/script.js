// // Exemplo básico de parâmetro rest
// function somar(...numeros) {
//     // 'numeros' será um array contendo todos os argumentos passados
//     return numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
// }

// console.log(somar(1, 2, 3, 4)); // Saída: 10
// console.log(somar(10, 20)); // Saída: 30
// console.log(somar()); // Saída: 0

// // Função para concatenar várias strings
// function concatenarStrings(separador, ...strings) {
//     return strings.join(separador);
// }

// console.log(concatenarStrings("-", "JavaScript", "é", "incrível")); // Saída: "JavaScript-é-incrível"
// console.log(concatenarStrings(" ", "Parâmetros", "rest", "são", "úteis")); // Saída: "Parâmetros rest são úteis"

// // Função para encontrar o maior número em uma lista de argumentos
// function encontrarMaior(...numeros) {
//     return Math.max(...numeros); // Usa o operador spread para passar os valores do array
// }

// console.log(encontrarMaior(10, 5, 20, 8)); // Saída: 20
// console.log(encontrarMaior(-5, -10, -2)); // Saída: -2

// // Parâmetro rest com argumentos fixos
// function mostrarDetalhes(nome, idade, ...hobbies) {
//     return `Nome: ${nome}, Idade: ${idade}, Hobbies: ${hobbies.join(", ")}`;
// }

// console.log(mostrarDetalhes("Cauã", 20, "programar", "jogar", "estudar")); 
// // Saída: "Nome: Cauã, Idade: 20, Hobbies: programar, jogar, estudar"

// console.log(mostrarDetalhes("Ana", 25, "correr", "viajar")); 
// // Saída: "Nome: Ana, Idade: 25, Hobbies: correr, viajar"

// // Criando uma função para multiplicar números
// function multiplicar(fator, ...numeros) {
//     return numeros.map(numero => numero * fator);
// }

// console.log(multiplicar(2, 1, 2, 3, 4)); // Saída: [2, 4, 6, 8]
// console.log(multiplicar(5, 10, 20, 30)); // Saída: [50, 100, 150]


// function soma(...valores){
//     let res = 0
//     for (let i of valores){
//             res = res + i
           
//     }
//     return res
// }
// console.log(soma(1,4,3,984))






// function filtrarPorTamanho(minLength, ...palavras) { // Corrigido o nome do parâmetro
//     let palavrasMin = []; // Nome da variável ajustado para seguir boas práticas
//     for (let palavra of palavras) { // Melhor usar 'let' para o escopo do laço
//         if (palavra.length >= minLength) { // Use >= se quiser incluir palavras do tamanho exato de minLength
//             palavrasMin.push(palavra);
//         }
//     }
//     return palavrasMin;
// }

// console.log(filtrarPorTamanho(5, "JavaScript", "é", "incrível", "JS")); 
// // Saída: ["JavaScript", "incrível"]

// function multiplicarNumeros(fator, ...numeros){
// return numeros.map(numero => numero * fator)
// }

// console.log(multiplicarNumeros(2, 1, 2, 3, 4)); // Saída: [2, 4, 6, 8]
// console.log(multiplicarNumeros(3, 5, 10, 15)); // Saída: [15, 30, 45]
// console.log(multiplicarNumeros(0, 100, 200)); // Saída: [0, 0]

// function combinarArray(array, array1, ...numeros){
//     let combinar = [...array, ...array1, ...numeros.flat()]
//     return combinar
// }

// console.log(combinarArray([1, 2], [3, 4], [5, 6], [7, 8]))