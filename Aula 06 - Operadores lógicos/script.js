// Script: Demonstrando operadores lógicos em JavaScript

// Introdução
console.log("Operadores Lógicos em JavaScript");
console.log("--------------------------------");

// 1. Operador AND (&&)
// Retorna true somente se ambas as condições forem verdadeiras
let a = true;
let b = false;
console.log("1. AND (&&):", a && b); // false

// Exemplo prático com números
let idade = 25;
console.log("2. AND com números:", idade > 18 && idade < 30); // true

// 2. Operador OR (||)
// Retorna true se pelo menos uma das condições for verdadeira
console.log("3. OR (||):", a || b); // true

// Exemplo prático com strings
let cidade = "São Paulo";
console.log("4. OR com strings:", cidade === "Rio" || cidade === "São Paulo"); // true

// 3. Operador NOT (!)
// Inverte o valor booleano
console.log("5. NOT (!):", !a); // false

// Exemplo prático com negação
let acessoPermitido = false;
console.log("6. NOT com variável:", !acessoPermitido); // true

// 4. Operadores combinados
// Combinação de AND, OR e NOT
let resultado = (idade > 18 && cidade === "São Paulo") || !b;
console.log("7. Operadores combinados:", resultado); // true

// 5. Curto-circuito
// AND (&&) retorna o primeiro valor falso ou o último verdadeiro
console.log("8. Curto-circuito com AND:", "texto" && 0 && true); // 0

// OR (||) retorna o primeiro valor verdadeiro ou o último falso
console.log("9. Curto-circuito com OR:", null || "Texto" || false); // "Texto"

/*Valores qeu são considerados falsos em um contexto booleano

false
0
"" (string vazia)
null
undefined
NaN

*/


// Conclusão
console.log("--------------------------------");
console.log("Fim do script. Esses são os operadores lógicos básicos.");
