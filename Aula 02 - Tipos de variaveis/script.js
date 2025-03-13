"use strict"

// variavel do tipo Var
if (true){
    var nome = "caua"
// com o uso do tipo: var, eu consigo acessar a variavel em qualquer parte do meu codigo, idenpedente de onde ela estaja 
}
// mesmo com a variavel dentro do if, eu consigo acessar ela fora 
console.log(nome)


//variavel do tipo let

if (true){
    let nome1 = "caua"
    nome1 = "pedro"
    console.log(nome1)
}

//console.log(nome)
// ao criar uma variavel do tipo let, não é possivel acessa-la de qualquer lugar, apenas no escopo que ela foi declarada
// por isso que se eu tentar rodar o codigo da linha 19, apareça um erro de nome não declarado 

// varival do tipo const 

const curso = "javascript"
// não é possivel alterar o valor de uma const nunca
// curso = "ben 10" // se eu tentar mudar o nome da minha const, dara erro no meu terminal 
console.log(curso) 