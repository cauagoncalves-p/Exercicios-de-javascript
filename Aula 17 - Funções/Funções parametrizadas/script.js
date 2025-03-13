// // O que são funções parametrizadas?
// // Funções parametrizadas são funções que recebem parâmetros como entrada.
// // Esses parâmetros são usados dentro da função para realizar operações ou retornar resultados.
// // Elas tornam o código mais dinâmico e reutilizável.

// // Exemplo básico: Função parametrizada com dois números
// function somar(a, b) {
//     return a + b; // Retorna a soma de 'a' e 'b'
//   }
  
//   // Chamando a função com diferentes valores
//   console.log("Soma 1:", somar(5, 3)); // Saída: 8
//   console.log("Soma 2:", somar(10, 20)); // Saída: 30
  
//   // Função com um parâmetro
//   function saudacao(nome) {
//     return `Olá, ${nome}! Seja bem-vindo.`; // Personaliza a mensagem com o nome
//   }
  
//   console.log(saudacao("Cauã")); // Saída: Olá, Cauã! Seja bem-vindo.
//   console.log(saudacao("Maria")); // Saída: Olá, Maria! Seja bem-vindo.
  
//   // Funções com múltiplos parâmetros
//   function calcularMedia(nota1, nota2, nota3) {
//     let media = (nota1 + nota2 + nota3) / 3;
//     return `A média é ${media.toFixed(2)}.`; // Calcula e retorna a média formatada
//   }
  
//   console.log(calcularMedia(7, 8, 9)); // Saída: A média é 8.00.
//   console.log(calcularMedia(6, 5, 4)); // Saída: A média é 5.00.
  
//   // Parâmetros padrão
//   // Você pode definir valores padrão para os parâmetros caso eles não sejam fornecidos
//   function saudacaoComHora(nome = "Visitante", hora = "dia") {
//     return `Bom ${hora}, ${nome}!`;
//   }
  
//   console.log(saudacaoComHora()); // Saída: Bom dia, Visitante!
//   console.log(saudacaoComHora("Cauã", "tarde")); // Saída: Bom tarde, Cauã!
//   console.log(saudacaoComHora("Ana")); // Saída: Bom dia, Ana!
  
//   // Funções com tipos de parâmetros diferentes
//   function detalhesPessoa(nome, idade, estudante) {
//     if (estudante) {
//       return `${nome}, ${idade} anos, é estudante.`;
//     } else {
//       return `${nome}, ${idade} anos, não é estudante.`;
//     }
//   }
  
//   console.log(detalhesPessoa("João", 22, true)); // Saída: João, 22 anos, é estudante.
//   console.log(detalhesPessoa("Paula", 30, false)); // Saída: Paula, 30 anos, não é estudante.
  
//   // Funções como parâmetros
//   // Você pode passar funções como parâmetros para criar comportamentos dinâmicos
//   function executarOperacao(a, b, operacao) {
//     return operacao(a, b);
//   }
  
//   let soma = (x, y) => x + y; // Define uma função de soma
//   let multiplicacao = (x, y) => x * y; // Define uma função de multiplicação
  
//   console.log(executarOperacao(5, 3, soma)); // Saída: 8
//   console.log(executarOperacao(5, 3, multiplicacao)); // Saída: 15
  
//   // Conclusão
//   // Funções parametrizadas são essenciais para tornar o código mais reutilizável,
//   // permitindo passar dados diferentes para a mesma lógica.
 

// function converterCelsiusParaFahrenheit(celcius){
//     let fah = (celcius *9/5) + 32
//     return `A converção de celcius para fah fica ${fah}` 
// }

// console.log(converterCelsiusParaFahrenheit(45))

// function calculadora(a, b,operacao){
//     return operacao(a,b)
// }

// let multip = (a,b) => a * b
// let dividir = (a,b) => a / b
// let soma= (a,b) => a + b
// let subtracao = (a,b) => a - b

// console.log(calculadora(10,5,subtracao))


// function ehpalindormo(palavra){
//    let array = palavra.split("").reverse().join("")
//     if (array === palavra){
//         return `A sua palavra: ${palavra} é palíndromo`
//     } else{
//         return `A sua palavra: ${palavra} não é palíndromo`
//     }
// }
// console.log(ehpalindormo("arara"))
// console.log(ehpalindormo("javascript"))
// console.log(ehpalindormo("ana"))