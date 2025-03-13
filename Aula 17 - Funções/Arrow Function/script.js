// 1. Função simples para somar dois números
// Com Arrow Function, usamos uma sintaxe mais curta e direta.
const somar = (a, b) => a + b;

console.log(somar(5, 10)); // Saída: 15

// 2. Arrow Function com uma única variável
// Quando há apenas um parâmetro, os parênteses podem ser omitidos.
const dobrar = numero => numero * 2;

console.log(dobrar(6)); // Saída: 12

// 3. Arrow Function sem parâmetros
// Se a função não recebe parâmetros, usamos parênteses vazios.
const cumprimentar = () => "Olá, mundo!";

console.log(cumprimentar()); // Saída: "Olá, mundo!"

// 4. Função que retorna um objeto
// Quando precisamos retornar um objeto literal, envolvemos o objeto entre parênteses.
const criarPessoa = (nome, idade) => ({
    nome: nome,
    idade: idade
});

console.log(criarPessoa("Cauã", 18)); 
// Saída: { nome: "Cauã", idade: 18 }

// 5. Arrow Function em métodos como "map", "filter" e "reduce"

// 5.1. Exemplo com "map"
// Multiplica cada número por 2
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(numero => numero * 2);

console.log(dobrados); // Saída: [2, 4, 6, 8, 10]

// 5.2. Exemplo com "filter"
// Retorna apenas os números pares
const pares = numeros.filter(numero => numero % 2 === 0);

console.log(pares); // Saída: [2, 4]

// 5.3. Exemplo com "reduce"
// Soma todos os números do array
const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(soma); // Saída: 15

// 6. Arrow Function com várias linhas
// Se a lógica for mais complexa, usamos chaves e "return".
const verificarMaior = (a, b) => {
    if (a > b) {
        return `${a} é maior que ${b}`;
    } else if (a < b) {
        return `${b} é maior que ${a}`;
    } else {
        return `${a} e ${b} são iguais`;
    }
};

console.log(verificarMaior(10, 5)); // Saída: "10 é maior que 5"
console.log(verificarMaior(3, 8));  // Saída: "8 é maior que 3"
console.log(verificarMaior(7, 7));  // Saída: "7 e 7 são iguais"


const abobora = (...comida) =>{
    return comida
}

console.log(abobora("maca", "ola"))