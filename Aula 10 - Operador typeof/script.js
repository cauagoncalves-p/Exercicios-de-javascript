// Operador typeof - Determinando tipos de dados

// Exemplos com diferentes tipos de valores
let nome = "Cauã"; // String
let idade = 20;    // Number
let ativo = true;  // Boolean
let indefinido;    // Undefined
let vazio = null;  // Null (mas typeof retorna "object")
let simbolo = Symbol("simbolo"); // Symbol
let obj = { nome: "Cauã", idade: 20 }; // Object
let func = function () { return "Oi"; }; // Function

// Usando typeof para verificar os tipos
console.log(typeof nome);       // string
console.log(typeof idade);      // number
console.log(typeof ativo);      // boolean
console.log(typeof indefinido); // undefined
console.log(typeof vazio);      // object (curiosidade: isso é um comportamento do JavaScript)
console.log(typeof simbolo);    // symbol
console.log(typeof obj);        // object
console.log(typeof func);       // function

/* Explicação:
 * O operador `typeof` é usado para verificar o tipo de dado armazenado em uma variável.
 * Ele retorna uma string que representa o tipo de dado.
 *
 * Algumas observações importantes:
 * - `null` retorna "object". Isso é considerado um "bug" histórico do JavaScript.
 * - Arrays também retornam "object". Para verificar se algo é um array, você pode usar Array.isArray().
 */

// Testando com valores literais diretamente
console.log(typeof 42);           // number
console.log(typeof "Olá!");       // string
console.log(typeof true);         // boolean
console.log(typeof undefined);    // undefined
console.log(typeof null);         // object
console.log(typeof []);           // object
console.log(typeof {});           // object

/* Nota adicional:
 * - Para funções, typeof sempre retorna "function".
 * - Para valores primitivos como strings, números, e booleanos, retorna "string", "number", e "boolean", respectivamente.
 */
