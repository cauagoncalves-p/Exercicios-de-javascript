// // 1. Função anônima atribuída a uma variável
// // Aqui, criamos uma função anônima e atribuímos à variável "saudacao".
// // Ela aceita um parâmetro "nome" e retorna uma saudação personalizada.
// const saudacao = function(nome) {
//     return `Olá, ${nome}!`; // Concatena "Olá" com o nome fornecido
// };

// console.log(saudacao("Cauã")); // Chamamos a função com o argumento "Cauã"
// // Saída: "Olá, Cauã!"


// // 2. Função anônima usada como callback
// // O método "map" cria um novo array aplicando uma função em cada elemento do array original.
// // Passamos uma função anônima como argumento para "map".
// const numeros = [1, 2, 3, 4, 5];

// const quadrados = numeros.map(function(numero) {
//     return numero * numero; // Multiplica cada número por ele mesmo
// });

// console.log(quadrados); // Resultado: [1, 4, 9, 16, 25]


// // 3. Função anônima imediatamente invocada (IIFE)
// // Uma IIFE é uma função anônima que é definida e executada imediatamente.
// // Útil para executar código isolado sem poluir o escopo global.
// (function() {
//     console.log("Essa função é executada automaticamente!"); // Executa ao ser definida
// })();
// // Saída: "Essa função é executada automaticamente!"


// // 4. Função anônima como parâmetro
// // Passamos uma função anônima como argumento para outra função.
// // Aqui, "executarOperacao" recebe dois números e uma função para definir a operação.
// const executarOperacao = function(a, b, operacao) {
//     return operacao(a, b); // Executa a função passada como argumento
// };

// // Exemplo de uso com uma função anônima para somar dois números
// const soma = executarOperacao(5, 10, function(x, y) {
//     return x + y; // Realiza a soma de "x" e "y"
// });

// console.log(soma); // Saída: 15


// // 5. Função anônima para filtrar elementos de um array
// // O método "filter" cria um novo array com elementos que passam em um teste.
// // Passamos uma função anônima que verifica se um número é par.
// const numerosFiltrados = numeros.filter(function(numero) {
//     return numero % 2 === 0; // Retorna "true" se o número for par
// });

// console.log(numerosFiltrados); // Resultado: [2, 4]


// Criando uma função anônima dinamicamente com "new Function"
// const calcular = new Function('a', 'b', 'return a + b;');







// // A função aceita dois parâmetros (a e b) e retorna a soma deles
// console.log(calcular(10, 20)); // Saída: 30
// // const filtrarPalavras = function(array){
// //     let palavras = []
// //     for (v of array ){
// //         if (v.includes("a")){
// //             palavras.push(v)
// //         }
        
// //     }
// //     return palavras
// // }

// console.log(filtrarPalavras(["gato", "cachorro", "peixe", "pássaro"]));
// // Saída: ["gato", "cachorro", "pássaro"]


// const ordenarNumeros = function(array){
//     // Crescente  
//     array.sort((a,b) => a - b)
//     console.log(array, "crescente")

//     // Decrescente
//     array.sort((a,b) => b -a)
//     console.log(array, "decrescente")
// }

// ordenarNumeros([5, 3, 8, 1, 2]); 
