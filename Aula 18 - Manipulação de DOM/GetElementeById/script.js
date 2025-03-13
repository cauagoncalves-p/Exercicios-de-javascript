// O que é getElementById?
// O método getElementById é usado para selecionar um elemento HTML com base no seu atributo id.
// Ele retorna o elemento que possui o id especificado ou null se não encontrar nenhum elemento.

// Exemplo básico
function alterarTexto() {
    // Seleciona o elemento com o id 'meuElemento'
    let elemento = document.getElementById('meuElemento');
    
    // Verifica se o elemento foi encontrado
    if (elemento) {
        // Altera o texto do elemento
        elemento.innerText = 'Texto alterado!';
    } else {
        console.log('Elemento não encontrado.');
    }
}

// Chamando a função para alterar o texto do elemento
alterarTexto();

// Importante: Se o id não existir no documento, getElementById retorna null.
function exemploGetElementById() {
    let elemento = document.getElementById('elementoInexistente');
    if (elemento) {
        console.log('Elemento encontrado.');
    } else {
        console.log('Elemento não encontrado.'); // Isso será executado se o id não existir
    }
}

exemploGetElementById();

// Manipulando atributos de um elemento
function alterarAtributo() {
    let imagem = document.getElementById('minhaImagem');
    if (imagem) {
        // Altera o atributo src da imagem
        imagem.src = './imagem/ben 10 2.jpg';
    } else {
        console.log('Imagem não encontrada.');
    }
}

alterarAtributo();

// Conclusão:
// O método getElementById é uma ferramenta poderosa para selecionar e manipular elementos HTML
// com base no seu id. Ele permite acessar e modificar o conteúdo e atributos dos elementos de forma eficiente.
