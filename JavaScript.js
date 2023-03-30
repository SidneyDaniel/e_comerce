import { registrarProduto } from "./assets/JS/registraProduto.js"
// import { adicionarProdutos, carregaProdutos } from "./assets/JS/criaTeste.js"


const button = document.querySelector('[data-type="adicionar"]')


button.addEventListener('click',registrarProduto)




