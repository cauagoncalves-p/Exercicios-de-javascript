// // O comando 'this' no JavaScript refere-se ao contexto de execução atual de uma função.
// // Seu valor pode variar dependendo de como a função é chamada.

// // Exemplo 1: Em uma função simples, 'this' se refere ao objeto global (no navegador, o objeto global é o 'window').
// function mostrarContextoGlobal() {
//     console.log(this); // 'this' se refere ao objeto global (no navegador, será 'window').
//   }
  
//   mostrarContextoGlobal();
  
//   // Exemplo 2: Dentro de um objeto, 'this' se refere ao próprio objeto.
//   const pessoa = {
//     nome: 'Cauã',
//     idade: 20,
//     saudacao: function() {
//       console.log('Olá, meu nome é ' + this.nome + ' e eu tenho ' + this.idade + ' anos.');
//     }
//   };
  
//   pessoa.saudacao(); // 'this' se refere ao objeto 'pessoa' aqui, então imprime o nome e a idade.
  
//   // Exemplo 3: Em uma função de evento, 'this' se refere ao elemento que acionou o evento.
// //   const botao = document.createElement('button');
// //   botao.textContent = 'Clique aqui';
// //   botao.addEventListener('click', function() {
// //     console.log(this); // 'this' se refere ao elemento 'button' que acionou o evento de clique.
// //   });
  
// //   document.body.appendChild(botao);
  
//   // Exemplo 4: Em funções de seta, 'this' não é reatribuído dentro da função, e sim, é herdado do contexto onde a função foi definida.
//   const pessoa2 = {
//     nome: 'Maria',
//     saudacao: function() {
//       setTimeout(() => {
//         console.log('Oi, sou a ' + this.nome); // 'this' dentro da função de seta se refere ao objeto 'pessoa2'
//       }, 1000);
//     }
//   };
  
//   pessoa2.saudacao();
  

// const carro =  {
//     marca: "ferrari",
//     modelo: "sport", 
//     ano: 2025,
//     informacoes: function() 
    
//     {
//         console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`)
//     }
// }

// carro.informacoes()

// function Pessoa(nome, idade) {
//     this.nome = nome
//     this.idade = idade
//     this.apresentar = function() {
//         return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos` 
//     }   
// }

// const pessoa1 = new Pessoa("caua", 17)
// console.log(pessoa1.apresentar())


// function Numero(contar) {
//     this.contar = contar;
//     this.contar = 0;
  
//     this.adicionar = () => {
//       setTimeout(() => {
//         for ( i = 0; i < 10; i++) {
//           this.contar++;
//           console.log(this.contar)
//         }
//       }, 2000);
//     };
//   }
  
//   const numero1 = new Numero(); // Usando `new` para criar uma nova instância
//   numero1.adicionar();

// const numero = [1,2,3,4,5]
// numero.forEach(function(elemento, indice){
//     this.elemento = elemento
//     this.indice = indice
//     console.log(`${this.elemento} esta no indice ${this.indice}` )
// })

const Pessoa = {
    nome: "matheus",
    endereco: {
        rua: "senac osasco",
        numero: 14,
        cidade: "são paulo"
    },
    monstrarEndereco: function(){
            console.log(`O endereço completo é ${this.endereco.rua} ${this.endereco.numero} ${this.endereco.cidade}`)
        }
    
}

Pessoa.monstrarEndereco()