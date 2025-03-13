// O método map é usado para criar um novo array transformando os elementos do array original.
// Ele não altera o array original, mas retorna um novo array.

// Exemplo 1: Dobrar os números de um array
const numeros = [1, 2, 3, 4, 5];

// Usamos map para aplicar uma transformação em cada número (dobrar o valor)
const numerosDobrados = numeros.map((numero) => numero * 2);

console.log("Exemplo 1: Dobrar os números");
console.log("Array original:", numeros); // [1, 2, 3, 4, 5]
console.log("Array dobrado:", numerosDobrados); // [2, 4, 6, 8, 10]
console.log("---------------------------------------");

// Exemplo 2: Converter para maiúsculas
const frutas = ["maçã", "banana", "uva", "laranja"];

// Usamos map para transformar cada fruta em letras maiúsculas
const frutasMaiusculas = frutas.map((fruta) => fruta.toUpperCase());

console.log("Exemplo 2: Converter para maiúsculas");
console.log("Array original:", frutas); // ["maçã", "banana", "uva", "laranja"]
console.log("Array em maiúsculas:", frutasMaiusculas); // ["MAÇÃ", "BANANA", "UVA", "LARANJA"]
console.log("---------------------------------------");

// Exemplo 3: Criar um array de mensagens personalizadas
const nomes = ["Ana", "Carlos", "Beatriz"];

// Usamos map para criar mensagens personalizadas
const mensagens = nomes.map((nome) => `Olá, ${nome}! Bem-vindo(a).`);

console.log("Exemplo 3: Mensagens personalizadas");
console.log("Array original:", nomes); // ["Ana", "Carlos", "Beatriz"]
console.log("Array de mensagens:", mensagens);
// ["Olá, Ana! Bem-vindo(a).", "Olá, Carlos! Bem-vindo(a).", "Olá, Beatriz! Bem-vindo(a)."]
console.log("---------------------------------------");

// Exemplo 4: Transformar objetos
const produtos = [
  { nome: "Camiseta", preco: 50 },
  { nome: "Calça", preco: 100 },
  { nome: "Tênis", preco: 200 },
];

// Usamos map para aplicar um desconto de 20% no preço de cada produto
const produtosComDesconto = produtos.map((produto) => {
  return {
    ...produto, // Mantém todas as propriedades originais
    preco: produto.preco * 0.8, // Aplica o desconto de 20%
  };
});

console.log("Exemplo 4: Aplicar desconto em produtos");
console.log("Array original de produtos:", produtos);
console.log("Produtos com desconto:", produtosComDesconto);
console.log("---------------------------------------");

// Exemplo 5: Extrair informações de objetos
const pessoas = [
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 30 },
  { nome: "Pedro", idade: 22 },
];

// Usamos map para extrair apenas os nomes
const nomesExtraidos = pessoas.map

// Exercicios


// const numero = [1,2,3,4,5]
// console.log(numero)

// let numerosDobrados = numero.map(numero => numero * 2)
// console.log(numerosDobrados)

// const frutas = ['apple', 'banana', 'cherry']
// console.log(frutas)
// const frutasM = frutas.map(maiuscula => maiuscula.toUpperCase())
// console.log(frutasM)

// const nome = ['Ana', 'Carlos', 'Beatriz']
// const saudacao = nome.map(saudacao => "Olá, " + saudacao)
// console.log(saudacao)

// const numero = [2, 4, 6, 8, 10]
// const numeroQuadrado = numero.map(numero => numero ** 2)
// console.log(numeroQuadrado)

// pessoas = 
// [
//   { id: 1, nome: "João" },
//   { id: 2, nome: "Maria" },
//   { id: 3, nome: "Pedro" }
// ]

// const apenasNomas = pessoas.map( nomes => nomes.nome)
// console.log(apenasNomas)

// const produtos =
// [
//   { produto: "Camiseta", preco: 50 },
//   { produto: "Calça", preco: 100 },
//   { produto: "Tênis", preco: 200 }
// ]

// const produtosDesconto = produtos.map(produto => {
//     return {
//         ...produto,
//         preco: produto.preco - (produto.preco * 0.2)
//     }
// }
// )
// console.log(produtosDesconto)



// const pessoas = 
// [
//   { nome: "João", idade: 25 },
//   { nome: "Maria", idade: 30 },
//   { nome: "Pedro", idade: 22 }
// ]

// const adicionar = pessoas.map((pessoa) => {
//       const categoria = pessoa.idade < 30 ? 'Jovem' : 'Adulto';
//     return {
//       ...pessoa, 
//         categoria
//     };
    
// });

// console.log(adicionar);






