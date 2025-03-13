// // **Funções Geradoras em JavaScript**
// // Uma função geradora é definida com a palavra-chave `function*`. 
// // Ela permite pausar e retomar sua execução usando o método `yield`.

// // Exemplo básico de uma função geradora
// function* geradorBasico() {
//     yield "Primeiro valor"; // Pausa aqui e retorna "Primeiro valor"
//     yield "Segundo valor"; // Pausa aqui e retorna "Segundo valor"
//     yield "Terceiro valor"; // Pausa aqui e retorna "Terceiro valor"
//   }
  
//   Usando a função geradora
//   const exemploBasico = geradorBasico();
  
//   console.log(exemploBasico.next().value); // Output: Primeiro valor
//   console.log(exemploBasico.next().value); // Output: Segundo valor
//   console.log(exemploBasico.next().value); // Output: Terceiro valor
//   console.log(exemploBasico.next().done);  // Output: true (gerador terminou)
  
//   // **Explicação:**
//   // Cada vez que chamamos `.next()`, a execução do gerador avança até o próximo `yield`.
//   // Quando não há mais `yield`, o gerador retorna `{ value: undefined, done: true }`.
  
//   // =====================================================
  
//   // **Geradores com contadores**
//   // Um gerador que cria uma sequência de números
//   function* contador(inicio = 0, fim = 10) {
//     for (let i = inicio; i <= fim; i++) {
//       yield i; // Pausa e retorna o valor atual de `i`
//     }
//   }
  
//   Usando o gerador de contador
//   const numeros = contador(1, 5);
  
//   for (const numero of numeros) {
//     console.log(numero); // Output: 1, 2, 3, 4, 5
//   }
  
//   // =====================================================
  
//   // **Geradores infinitos**
//   // Um gerador que nunca para (útil para criar streams de dados)
//   function* geradorInfinito() {
//     let i = 0;
//     while (true) {
//       yield i++; // Retorna o valor de `i` e incrementa
//     }
//   }
  
//   // Usando o gerador infinito (com cautela)
//   const infinito = geradorInfinito();
//   console.log(infinito.next().value); // Output: 0
//   console.log(infinito.next().value); // Output: 1
//   console.log(infinito.next().value); // Output: 2
//   // Evite usar esse gerador em loops sem condições de parada.
  
//   // =====================================================
  
//   // **Geradores Delegados**
//   // Um gerador pode delegar para outro gerador usando `yield*`.
  
//   function* geradorA() {
//     yield "A1";
//     yield "A2";
//   }
  
//   function* geradorB() {
//     yield "B1";
//     yield* geradorA(); // Delegando para `geradorA`
//     yield "B2";
//   }
  
//   const exemploDelegado = geradorB();
  
//   console.log([...exemploDelegado]); 
//   // Output: ["B1", "A1", "A2", "B2"]
  
//   // =====================================================
  
//   // **Geradores como Iteradores**
//   // Geradores podem ser usados diretamente em estruturas que suportam iteradores.
  
//   function* nomes() {
//     yield "Alice";
//     yield "Bob";
//     yield "Carol";
//   }
  
//   for (const nome of nomes()) {
//     console.log(nome); 
//     // Output:
//     // Alice
//     // Bob
//     // Carol
//   }
  
//   // =====================================================
  
//   // **Passando valores para geradores**
//   // Podemos enviar dados de volta para o gerador usando o método `.next(valor)`.
  
  // function* conversorDeTemperatura() {
  //   const celsius = yield "Informe a temperatura em Celsius:";
  //   const fahrenheit = (celsius * 9) / 5 + 32;
  //   yield `Temperatura em Fahrenheit: ${fahrenheit}`;
  // }
  
  // const conversor = conversorDeTemperatura();
  
  // console.log(conversor.next().value); // Output: Informe a temperatura em Celsius:
  // console.log(conversor.next(25).value); 
  // Output: Temperatura em Fahrenheit: 77
  
//   // =====================================================
  
//   // **Resumo:**
//   // 1. Funções geradoras são úteis para criar iteradores personalizados.
//   // 2. Elas permitem a pausa (`yield`) e o envio de valores para dentro (`next(valor)`).
//   // 3. Aplicações incluem iteração personalizada, criação de streams e delegação de geradores.
  
  
// function* fibonacciGenerator(){
//    yield a = 0
//    yield b = 1

//     while (true){
//      yield a;
//      let soma = a + b
//      a = b
//      b = soma
//    }
// }

// const gerador = fibonacciGenerator()
// for (let i = 0; i <=10; i++){
//     console.log(gerador.next().value)
// }


// function* randomNumberGenerator(){
//   let limite = 5
//   while (limite > 0){
//     yield numero = parseInt(Math.random() * 100 + 1)
//     limite --
//   }
// }

// const gerarNumero = randomNumberGenerator()
// console.log(gerarNumero.next().value)
// console.log(gerarNumero.next().value)
// console.log(gerarNumero.next().value)
// console.log(gerarNumero.next().value)
// console.log(gerarNumero.next().value)
// console.log(gerarNumero.next().value)
// console.log(gerarNumero.next().value)
// console.log(gerarNumero.next().value)
// console.log(gerarNumero.next().value)
// console.log(gerarNumero.next().value)


// function* countdown(){
//   let numeroInicial = 5
//   for (let i = numeroInicial; i > 0; i--){
//     yield i
//   }
// }

// function* countUp(){
//   let numberInicial = 5
//   for (let i = 1; i <= numberInicial; i++){
    
//     yield i
    
//   }
//   yield* countdown()
// }


// const combinacao = countUp()
// console.log(...combinacao)

function* fatorial(){
  n = 5
  fat = 1
  yield fat

  while (n > 0){
    fat *= n
    n--
    yield fat
  }
  return fat
 
}

const numero = fatorial()
console.log(numero.next().value)
console.log(numero.next().value)
console.log(numero.next().value)
console.log(numero.next().value)
console.log(numero.next().value)


