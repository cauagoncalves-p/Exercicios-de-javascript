// Operador Spread - Aplicação em Arrays

// Mesclando dois arrays
let numeros1 = [1, 2, 3];
let numeros2 = [4, 5, 6];
let todosNumeros = [...numeros1, ...numeros2];
console.log(todosNumeros); // [1, 2, 3, 4, 5, 6]

/* Explicação:
 * O operador spread `...` expande os elementos de um array ou objeto.
 * Aqui, os elementos de `numeros1` e `numeros2` foram combinados em um único array.
 */

// Criando uma cópia de um array
let copiaArray = [...numeros1];
console.log(copiaArray); // [1, 2, 3]

/* Nota:
 * Isso cria uma cópia "rasa" (shallow copy) do array original.
 */

// Operador Spread - Aplicação em Objetos

const jogador1 = { nome: "Lucas", energia: 100, vida: 80 };
const jogador2 = { nome: "matheus", magia: 120, velocidade: 90 };

// Mesclando objetos
const jogadorCompleto = { ...jogador1, ...jogador2 };
console.log(jogadorCompleto);

/* Explicação:
 * Ao mesclar objetos, as propriedades são combinadas. Se houver propriedades com o mesmo nome, a última substitui a anterior.
 */

// Aplicação com funções

const soma = (a, b, c) => a + b + c;
let valores = [10, 20, 30];

// Usando spread para passar os valores do array como argumentos
console.log(soma(...valores)); // 60

/* Explicação:
 * O operador spread permite "descompactar" um array em argumentos individuais para uma função.
 */

// Operador Spread com NodeList

const divs = document.getElementsByTagName("div");

// Convertendo NodeList para array
const divsArray = [...divs];

divsArray.forEach(Element => {
    console.log(Element)
    Element.innerText = "ola mundo"
});
console.log(divs);       // NodeList
console.log(divsArray);  // Array

/* Explicação:
 * `document.getElementsByTagName` retorna um NodeList, que não possui métodos de array como `.forEach()`.
 * Usando o spread, você converte o NodeList em um array verdadeiro.
 */
