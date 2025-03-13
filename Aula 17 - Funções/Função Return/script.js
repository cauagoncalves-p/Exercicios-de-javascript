// O que é o return?
// O comando return é usado para "retornar" um valor de uma função.
// Ele encerra a execução da função e envia um valor de volta para o local onde a função foi chamada.

// Exemplo básico
function somar(a, b) {
    return a + b; // Retorna a soma de 'a' e 'b'
  }
  
  // Chamando a função e armazenando o resultado
  let resultado = somar(5, 3);
  console.log("Resultado da soma:", resultado); // Saída: Resultado da soma: 8
  
  // Importante: Depois que o return é executado, nada mais na função será executado.
  function exemploReturn() {
    console.log("Essa linha será exibida.");
    return "Encerrando a função.";
    console.log("Essa linha nunca será exibida."); // Isso nunca será executado.
  }
  
  let teste = exemploReturn();
  console.log("Retorno da função:", teste); // Saída: Retorno da função: Encerrando a função.
  
  // Return sem valor
  // Você pode usar return sem especificar um valor. Nesse caso, a função retorna undefined por padrão.
  function semRetorno() {
    console.log("Essa função não retorna nada.");
    return; // Retorno vazio
  }
  
  let semResultado = semRetorno(); // undefined
  console.log("Resultado sem retorno:", semResultado); // Saída: Resultado sem retorno: undefined
  
  // Return em funções mais complexas
  // Usando return para encerrar a função com base em uma condição
  function verificarPar(numero) {
    if (numero % 2 === 0) {
      return "O número é par.";
    }
    return "O número é ímpar."; // Executado se a condição acima for falsa
  }
  
  console.log(verificarPar(4)); // Saída: O número é par.
  console.log(verificarPar(7)); // Saída: O número é ímpar.
  
  // Funções sem return explícito
  // Se você não usar return, a função retorna undefined automaticamente.
  function semExplicitReturn() {
    console.log("Sem return explícito.");
  }
  
  let retornoInexistente = semExplicitReturn(); // undefined
  console.log("Retorno inexistente:", retornoInexistente); // Saída: Retorno inexistente: undefined
  
  // Conclusão:
  // O return é uma ferramenta poderosa para controlar o fluxo das funções
  // e retornar valores importantes para outras partes do código.


// function InverterString(){
//     let palavra = "assalto";
//     let palavras = palavra.split("");
//     let inverter = palavras.reverse();
//     let transformar = inverter.join("");
//     return `A palavra é: ${palavra} e invertendo ela fica: ${transformar}`
// }

// console.log(InverterString())