export function createCardClient(produto) {
    const { imagem, categoria, nome, preco } = produto;
    const list = document.querySelector("#lista_de_produtos");
    list.innerHTML += `
        <li id="item" class="${categoria}" data-type="${nome}">
            <img src="${imagem}" alt="${nome}">
            <h1 class="produtos__nome">${nome}</h1>
            <h2 class="produtos__preco">${preco}</h2>
            <a href="#" class="produtos__link">Ver produto</a>
        </li>
    `;
}

window.onload = function () {
    const produtos = JSON.parse(window.localStorage.getItem('itens'))?.produtos || [];
    produtos.forEach(createCardClient);
}
