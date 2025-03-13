// Script: Demonstrando operadores relacionais em JavaScript

// Introdução
console.log("Operadores Relacionais em JavaScript");
console.log("-----------------------------------");

// 1. Igualdade (==) e Estritamente Igual (===)
let a = 5;
let b = "5";
console.log("1. Igualdade (==):", a == b); // true - compara apenas o valor
console.log("2. Estritamente Igual (===):", a === b); // false - compara valor e tipo

// 2. Diferença (!=) e Estritamente Diferente (!==)
console.log("3. Diferença (!=):", a != b); // false - compara apenas o valor
console.log("4. Estritamente Diferente (!==):", a !== b); // true - compara valor e tipo

// 3. Maior que (>) e Maior ou Igual (>=)
let c = 10;
console.log("5. Maior que (>):", c > a); // true
console.log("6. Maior ou Igual (>=):", c >= 10); // true

// 4. Menor que (<) e Menor ou Igual (<=)
console.log("7. Menor que (<):", a < c); // true
console.log("8. Menor ou Igual (<=):", c <= 10); // true

// 5. Comparação com tipos diferentes
let d = "10";
console.log("9. Comparação com tipos diferentes (==):", c == d); // true
console.log("10. Comparação com tipos diferentes (===):", c === d); // false

// Observação sobre NaN (Not-a-Number)
let e = NaN;
console.log("11. Comparação com NaN:", e == NaN); // false
console.log("12. Comparação com NaN usando isNaN():", isNaN(e)); // true

console.log()
// Conclusão
console.log("-----------------------------------");
console.log("Fim do script. Esses são os operadores relacionais básicos.");
