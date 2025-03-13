// Laço for básico
console.log("Contagem de 1 a 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i); // Exibe os números de 1 a 5
}

/* Explicação do funcionamento:
1. Inicialização: `let i = 1` — Define a variável inicial do contador.
2. Condição: `i <= 5` — O loop continuará enquanto essa condição for verdadeira.
3. Incremento: `i++` — Incrementa o valor de `i` em 1 a cada iteração.
4. Corpo do loop: `console.log(i)` — Executa o código em cada iteração.
*/

// Exemplo com array
const frutas = ["maçã", "banana", "laranja", "uva"];

console.log("\nLista de frutas:");
for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta ${i+1}: ${frutas[i]}`);
}

/* Explicação:
1. Iteração sobre índices: `i` começa em 0 e vai até o comprimento do array menos 1.
2. Acessamos elementos do array usando `frutas[i]`.
*/

// Laço for com condições
console.log("\nNúmeros pares de 1 a 10:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) { // Verifica se o número é par
        console.log(i);
    }
}

/* Explicação:
1. O `if (i % 2 === 0)` verifica se o resto da divisão de `i` por 2 é zero.
2. Apenas números pares são exibidos.
*/

// Loop reverso
console.log("\nContagem regressiva de 5 a 1:");
for (let i = 5; i >= 1; i--) {
    console.log(i); // Exibe números em ordem decrescente
}

/* Explicação:
1. Inicializamos `i` com 5.
2. A condição `i >= 1` mantém o loop enquanto `i` for maior ou igual a 1.
3. O decremento `i--` reduz `i` em 1 a cada iteração.
*/

// Uso de `break` no loop
console.log("\nInterrompendo ao encontrar o número 3:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Número 3 encontrado! Interrompendo...");
        break; // Sai do loop
    }
    console.log(i);
}

/* Explicação:
1. O `if (i === 3)` verifica se o valor de `i` é 3.
2. O `break` encerra o loop imediatamente.
*/

// Uso de `continue` no loop
console.log("\nIgnorando o número 3:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Pulando o número 3...");
        continue; // Pula para a próxima iteração
    }
    console.log(i);
}

/* Explicação:
1. O `if (i === 3)` verifica se o valor de `i` é 3.
2. O `continue` pula o restante da iteração atual e vai para a próxima.
*/


