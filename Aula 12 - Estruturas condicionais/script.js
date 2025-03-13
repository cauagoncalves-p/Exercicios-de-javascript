// Verificando se um número é positivo, negativo ou zero
let numero = -5;
 
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

// Verificando a faixa etária de uma pessoa
let idade = 17;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// Verificando se uma pessoa pode votar
let possuiTituloEleitor = true;

if (idade >= 18 && possuiTituloEleitor) {
    console.log("Você pode votar.");
} else {
    console.log("Você não pode votar.");
}

// Verificando um login
let usuarioAutenticado = false;

if (usuarioAutenticado) {
    console.log("Bem-vindo, usuário!");
} else {
    console.log("Por favor, faça login.");
}
