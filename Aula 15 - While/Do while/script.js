// Estrutura do do...while com explicação
console.log("Exemplo 1: Estrutura Básica");

let contador = 0;

do {
    console.log(`Contador: ${contador}`);
    contador++;
} while (contador < 5);

// Explicação:
// 1. O código dentro do 'do' é executado antes da verificação.
// 2. A cada iteração, o contador é incrementado.
// 3. O laço para quando a condição contador < 5 é falsa.

console.log("\nExemplo 2: Condição Inicialmente Falsa");

let numero = 10;

do {
    console.log(`O número é: ${numero}`);
    numero++;
} while (numero < 5);

// Explicação:
// Mesmo que a condição numero < 5 seja falsa desde o início,
// o bloco de código será executado uma vez, exibindo o número 10.

console.log("\nExemplo 3: Aplicação Prática");

// Uso típico do do...while para solicitar uma ação ao menos uma vez:
let senha;
do {
    senha = prompt("Digite sua senha:");
} while (senha !== "12345");

console.log("Acesso concedido!");

// Explicação:
// 1. A senha será solicitada ao menos uma vez.
// 2. O laço continuará até que o usuário digite "12345".

// Diferença entre while e do...while com exemplo prático:
console.log("\nDiferença entre while e do...while:");

let whileNumero = 10;
console.log("Exemplo com while:");
while (whileNumero < 5) {
    console.log(`Número é: ${whileNumero}`); // Não será exibido, pois a condição é falsa.
}

let doWhileNumero = 10;
console.log("Exemplo com do...while:");
do {
    console.log(`Número é: ${doWhileNumero}`); // Será exibido uma vez, mesmo com a condição falsa.
} while (doWhileNumero < 5);

// Vantagem do do...while:
// É útil quando você precisa que o código seja executado pelo menos uma vez
// antes de verificar qualquer condição.

console.log("\nFim do script!");


