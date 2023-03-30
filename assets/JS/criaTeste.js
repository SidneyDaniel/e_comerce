let PRODUTOS = JSON.parse(window.localStorage.getItem('itens'))?.produtos || [];

export function registrarProduto() {
    const imagemProduto = document.querySelector('[data-type="imagemProduto"]').value;
    const Categoria = document.querySelector('[data-type="Categoria"]').value;
    const nomeProduto = document.querySelector('[data-type="nomeProduto"]').value;
    const precoProduto = document.querySelector('[data-type="precoProduto"]').value;
    const descricao = document.querySelector('[data-type="Descricao"]').value;

    event.preventDefault();

    PRODUTOS.push({
        imagem: imagemProduto,
        categoria: Categoria,
        nome: nomeProduto,
        preco: precoProduto,
        descricao: descricao
    });

    var itens = { produtos: PRODUTOS };
    window.localStorage.setItem('itens', JSON.stringify(itens));

    var listaProdutos = JSON.parse(window.localStorage.getItem('itens'));
    console.log(listaProdutos.produtos);

    for (let produto of PRODUTOS) {
        console.log(produto.imagem);
    }
    
    

    console.log(PRODUTOS);
    createCardAdmin(listaProdutos.produtos);
}

function createCardAdmin(produto) {
    const { imagem, categoria, nome, preco } = produto;
    const list = document.querySelector("#lista_de_produtos");
    const item = document.createElement('li');
    item.id = "item";
    item.className = categoria;
    item.dataset.type = nome;
    item.innerHTML = `
        <img src="${imagem}" alt="${nome}">
        <h1 class="produtos__nome">${nome}</h1>
        <h2 class="produtos__preco">${preco}</h2>
        <a href="#" class="produtos__link">Ver produto</a>
        <button class="produtos__excluir">Excluir</button>
    `;
    list.appendChild(item);

    const excluirButton = item.querySelector('.produtos__excluir');
    excluirButton.addEventListener('click', () => {
        PRODUTOS = PRODUTOS.filter(p => p.nome !== nome);
        window.localStorage.setItem('itens', JSON.stringify({ produtos: PRODUTOS }));
        item.remove();
    });
}

window.onload = function () {
    const produtos = JSON.parse(window.localStorage.getItem('itens'))?.produtos || [];
    produtos.forEach(createCardAdmin);
}

const button = document.querySelector('[data-type="adicionar"]')


button.addEventListener('click',registrarProduto)