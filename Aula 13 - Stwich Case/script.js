// Seu código original
let clima = "sol";
let idade = 18;

switch (clima, idade) { // Isso não funciona
    case clima = "sol", idade == 18: 
        console.log("cinema");
    case 2: 
        console.log("rua");
    default:
        console.log("ficar em casa");
}

/* Por que isso não funciona:
1. A expressão `(clima, idade)`:
   - O operador de vírgula avalia `clima` e `idade`, mas retorna apenas o último valor (`idade`), ignorando `clima`.
   - Isso faz com que o `switch` use apenas `idade` como valor principal para comparação.

2. Comparações e atribuições nos `case`:
   - No `case`, você está usando `clima = "sol"` (atribuição) e `idade == 18` (comparação). 
   - `switch` espera valores literais ou expressões simples, mas não múltiplas condições.

3. Falta de `break`:
   - Sem `break`, o `switch` executa todos os casos abaixo do que corresponder, o que pode levar a resultados indesejados.
*/

// Código corrigido usando switch
let clima2 = "sol";
let idade2 = 18;

switch (true) { // Avaliamos 'true' para usar condições nos 'case'
    case clima2 === "sol" && idade2 === 18:
        console.log("cinema");
        break; // Interrompe a execução após encontrar o caso correto
    case clima2 === "chuva":
        console.log("rua");
        break;
    default:
        console.log("ficar em casa");
        break;
}

/* Explicação da correção:
1. O `switch(true)`:
   - Avaliamos a expressão `true` no `switch`, permitindo usar condições lógicas nos `case`.

2. Condições nos `case`:
   - Agora os `case` verificam se as condições são verdadeiras. Exemplo: `clima2 === "sol" && idade2 === 18`.

3. Uso de `break`:
   - Garante que o programa saia do `switch` após executar o código do caso correspondente.
*/

// Código alternativo com if/else (para comparar as abordagens)
if (clima2 === "sol" && idade2 === 18) {
    console.log("cinema");
} else if (clima2 === "chuva") {
    console.log("rua");
} else {
    console.log("ficar em casa");
}
