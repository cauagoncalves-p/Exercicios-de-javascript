// // O que é getElementsByTagName?
// // O método getElementsByTagName é usado para selecionar todos os elementos HTML com uma determinada tag.
// // Ele retorna uma coleção de todos os elementos que possuem a tag especificada.

// // Exemplo básico
// function alterarTextoParagrafos() {
//     // Seleciona todos os elementos <p> (parágrafos)
//     let paragrafos = document.getElementsByTagName('p');
    
//     // Itera sobre a coleção de parágrafos e altera o texto de cada um
//     for (let i = 0; i < paragrafos.length; i++) {
//         paragrafos[i].innerText = `Parágrafo ${i + 1} alterado!`;
//     }
// }

// // Chamando a função para alterar o texto dos parágrafos
// alterarTextoParagrafos();

// // Importante: getElementsByTagName retorna uma coleção ao vivo de elementos.
// // Isso significa que a coleção é automaticamente atualizada se novos elementos com a mesma tag forem adicionados ou removidos.

// // Manipulando atributos de múltiplos elementos
// function alterarAtributoImagens() {
//     // Seleciona todos os elementos <img> (imagens)
//     let imagens = document.getElementsByTagName('img');
    
//     // Itera sobre a coleção de imagens e altera o atributo src de cada uma
//     for (let i = 0; i < imagens.length; i++) {
//         imagens[i].src = `novaImagem${i + 1}.jpg`;
//     }
// }

// alterarAtributoImagens();

// // Conclusão:
// // O método getElementsByTagName é uma ferramenta poderosa para selecionar e manipular múltiplos elementos HTML
// // com base na sua tag. Ele permite acessar e modificar o conteúdo e atributos de todos os elementos correspondentes de forma eficiente.



// Exercicios 
const estoque = [];

// Função para adicionar produtos ao estoque
function adicionarProduto(nome, quantidade, preco) {
    const codigo = estoque.length + 1; // Gera um código único

    const produto = {
        codigo: codigo,
        nome: nome,
        quantidade: quantidade,
        preco: preco
    };

    estoque.push(produto);
    console.log(`Produto adicionado: ${nome}, Código: ${codigo}`);
}

// Função para listar os produtos no estoque
function listarProdutos() {
    if (estoque.length === 0) {
        console.log("O estoque está vazio.");
        return;
    }

    estoque.forEach((produto) => {
        console.log(`Código: ${produto.codigo} | Nome: ${produto.nome} | Quantidade: ${produto.quantidade} | Preço: R$ ${produto.preco.toFixed(2)}`);
    });
}

// Função para atualizar o estoque
function atualizarEstoque(codigo, quantidade, atualizar) {
    // Verifica se o produto existe
    const produto = estoque.find((e) => e.codigo === codigo);
    if (!produto) {
        console.log(`Erro: Produto com código ${codigo} não encontrado.`);
        return;
    }

    if (atualizar === "adicionar") {
        produto.quantidade += quantidade;
        const palavra = produto.quantidade > 1 ? "unidades" : "unidade";
        console.log(`Estoque atualizado! ${produto.nome} agora tem ${produto.quantidade} ${palavra}.`);
    } else if (atualizar === "remover") {
        if (quantidade > produto.quantidade) {
            console.log(`Erro: Estoque insuficiente para ${produto.nome}.`);
            return;
        }

        produto.quantidade -= quantidade;
        const palavra = produto.quantidade > 1 ? "unidades" : "unidade";
        console.log(`Estoque atualizado! ${produto.nome} agora tem ${produto.quantidade} ${palavra}.`);
    } else {
        console.log("Erro: Ação inválida. Use 'adicionar' ou 'remover'.");
    }
}

// Testando as funções
adicionarProduto("Camiseta", 50, 29.99);
adicionarProduto("Tênis", 20, 199.90);
adicionarProduto("Boné", 30, 49.90);

console.log("\n--- Listando Produtos ---");
listarProdutos();

console.log("\n--- Atualizando Estoque ---");
atualizarEstoque(1, 100, "remover"); // Erro: Estoque insuficiente
atualizarEstoque(1, 5, "remover");   // Estoque atualizado
atualizarEstoque(2, 10, "adicionar"); // Estoque atualizado
atualizarEstoque(3, 10, "adicionar"); // Estoque atualizado
atualizarEstoque(99, 5, "remover");   // Erro: Produto com código 99 não encontrado

function buscarProduto(codigo){
    const produto = estoque.find((e) => e.codigo === codigo);
        if (produto){
            console.log(`Código: ${produto.codigo} | Nome: ${produto.nome} | Quantidade: ${produto.quantidade} | Preço: R$ ${produto.preco.toFixed(2)}`);
        } else{
            console.log(`Erro: Produto com o código ${codigo} não encontrado.`)
        }
    }

console.log("\n--- Buscando produto pelo codigo ---");
buscarProduto(1)
buscarProduto(3)
buscarProduto(4)

console.log("\n--- Calcular total do estoque ---");
function calcularValorEstoque(){
    let valor = 0
    for (i of estoque){
    valor += i.preco * i.quantidade
    }
    console.log(`O valor atual do estoque é R$ ${valor.toFixed(2)}`)
}

calcularValorEstoque()

console.log("\n--- Filtrar produtos  ---");
function filtrarProdutos(precoMinimo, precoMaximo, quantidadeMinima){
    estoque.forEach((produto) =>{
        if (produto.preco >= precoMinimo && produto.preco <= precoMaximo && produto.quantidade >= quantidadeMinima ){
            console.log(`Código: ${produto.codigo} | Nome: ${produto.nome} | Quantidade: ${produto.quantidade} | Preço: R$ ${produto.preco.toFixed(2)}`);
        }else{
            console.log('Não a produtos com os critérios informados')
        }
    })
}

filtrarProdutos(30,100,10)


