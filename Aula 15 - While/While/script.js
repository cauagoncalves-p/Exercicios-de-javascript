// Exemplo básico de while
let contador = 0;

while (contador < 5) {
    console.log(`O contador está em: ${contador}`);
    contador++;
}

/* Explicação:
1. O laço `while` verifica a condição antes de executar o bloco de código.
2. No exemplo, enquanto `contador` for menor que 5, o código dentro do `while` será executado.
3. O valor de `contador` é incrementado a cada iteração com `contador++`.
4. Quando `contador` atingir 5, a condição `contador < 5` será falsa, e o laço será encerrado.
*/

// Exemplo com entrada do usuário
// let senha = "";

// while (senha !== "12345") {
//     senha = prompt("Digite sua senha:"); // Solicita ao usuário uma senha
//     if (senha !== "12345") {
//         console.log("Senha incorreta, tente novamente.");
//     }
// }

// console.log("Acesso liberado!");

/* Explicação:
1. O laço continuará solicitando ao usuário que insira uma senha enquanto a senha digitada for diferente de "12345".
2. Se a senha estiver errada, uma mensagem será exibida no console, pedindo que tente novamente.
3. Quando a condição `senha !== "12345"` for falsa, o laço será encerrado e exibirá "Acesso liberado!".
*/

// let n = 5
// let fatorial = 1

// while (n>=1){
//     fatorial*=n
//     n--
// }

// console.log(fatorial)