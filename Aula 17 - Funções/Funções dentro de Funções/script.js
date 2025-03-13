// // Função principal para calcular o preço final com desconto
// function calcularPrecoFinal(preco, desconto) {
//     // Função interna para calcular o valor do desconto
//     function calcularValorDesconto(preco, desconto) {
//         return (preco  * desconto) / 100; // Calcula o desconto em porcentagem
//     }

//     // Chama a função interna para obter o valor do desconto
//     const valorDesconto = calcularValorDesconto(preco, desconto);

//     // Subtrai o desconto do preço original
//     const precoFinal = preco - valorDesconto;

//     // Retorna o preço final
//     return {
//         precoOriginal: preco,
//         desconto: desconto,
//         valorDesconto: valorDesconto,
//         precoFinal: precoFinal
//     };
// }

// // Exemplo de uso
// const resultado = calcularPrecoFinal(200, 15);
// console.log("Detalhes do cálculo:", resultado);
// Saída:
// Detalhes do cálculo: {
//   precoOriginal: 200,
//   desconto: 15,
//   valorDesconto: 30,
//   precoFinal: 170
//}

// const calcularEstatisticas = (...array) => {
//     const calcularMedia = () =>{
//         let res = array.reduce((acumulador, valorAtual) => (acumulador + valorAtual) / array.length)
//         return res
//     }

//     const calcularMenor = () =>{
//         let menor = Math.min(...array)
//         return menor
//     } 

//     const calcularMaior = () =>{
//         let maior = Math.max(...array)
//         return maior
//     } 

//     return {
//         media: calcularMedia(),
//         maior: calcularMaior(), 
//         menor: calcularMenor()
//     }

// }

// console.log(calcularEstatisticas(14,45,72,418,8141,161,15,4,947,50,18,41,1))


// const operacaoes = (a,b, operacao) =>{

//     const soma = () =>{
//         return (a + b)
//     }
//     const divisao = () =>{
//         return  (a / b)
//     }
//     const multiplicar = () =>{
//         return (a * b)
//     }
//     const subtrair = () =>{
//         return (a - b)
//     }

//     if (operacao == "soma"){
//         return soma()
//     } else if (operacao == "divisao"){
//         return divisao()
//     } else if (operacao == "multiplicar"){
//         return multiplicar()
//     } else if (operacao == "subtrair"){
//         return subtrair()
//     }

// }

// console.log(operacaoes(15,41,"multiplicar"))



