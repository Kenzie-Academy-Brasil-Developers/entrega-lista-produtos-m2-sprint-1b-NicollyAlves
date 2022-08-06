//FUNÇÃO DOS BOTÕES
const header = document.querySelector('header')
const main = document.querySelector('main')
function filtros(){
   const filtersDiv = document.createElement('div')
   filtersDiv.classList.add("filtersContainer")

   const todos = document.createElement('button')
   const hortifruit = document.createElement('button')
   const panificadora = document.createElement('button')
   const laticinios = document.createElement('button')

   todos.classList.add("estiloGeralBotoes--mostrarTodos")
   hortifruit.classList.add("estiloGeralBotoes--filtrarHortifruit")
   panificadora.classList.add("estiloGeralBotoes--filtrarPanificadora")
   laticinios.classList.add("estiloGeralBotoes--filtrarLaticinios")

   todos.id = "todos"
   hortifruit.id = "hortifruit"
   panificadora.id = "panificadora"
   laticinios.id = "laticinios"

   todos.classList.add("estiloGeralBotoes")
   hortifruit.classList.add("estiloGeralBotoes")
   panificadora.classList.add("estiloGeralBotoes")
   laticinios.classList.add("estiloGeralBotoes")

   todos.innerText = "Todos Produtos"
   hortifruit.innerText = "Hortifruit"
   panificadora.innerText = "Panificadora"
   laticinios.innerText = "Laticínios"

   todos.id = "todos"
   hortifruit.id = "hortifruit"
   panificadora.id = "panificadora"
   laticinios.id = "laticinios"

   header.append(filtersDiv)
   filtersDiv.append(todos, hortifruit, panificadora, laticinios)
   return filtersDiv
}



//FUNÇÃO PARA CRIAR O ESPAÇO DE PESQUISA
function pesquisa(){
   const containerBusca = document.createElement('div')
   containerBusca.classList.add("containerBuscaPorNome")

   const input = document.createElement('input')
   const button = document.createElement('button')
   const img = document.createElement('img')

   input.type = "text"
   input.id = "input"
   input.placeholder = "Pesquisar Por"
   input.classList.add("campoBuscaPorNome")

   button.classList.add("estiloGeralBotoes--botaoBuscaPorNome")
   button.classList.add("estiloGeralBotoes")

   img.classList.add("lupinha")
   img.src = "./src/img/search_FILL0_wght400_GRAD0_opsz48.png"
   img.alt = "lupinha"
   
   header.append(containerBusca)
   containerBusca.append(input, button)
   button.appendChild(img)
   return containerBusca
}
pesquisa()


//FUNÇÃO DA CAIXA DE PREÇO TOTAL
/*function caixaPreco(){
  const div = document.createElement('div')
  div.classList.add("caixaPreco")

  const descricao = document.createElement('p')
  const total = document.createElement('p')
  const span = document.createElement('span')

  descricao.classList.add("pDescricao")
  total.classList.add("total")
  span.classList.add("precoTotal")

  descricao.innerText = "Valor total dos produtos da sessão selecionada"
  total.innerText = "R$"
  span.innerText = "00.00"
  
  header.append(div)
  div.append(descricao, total)
  total.appendChild(span)
  return div
}
caixaPreco()*/

//CARRINHO CAIXA
const caixaCarrinho = document.querySelector("section")
function criarCarrinho(){
  const tituloCarrinho = document.createElement("p")
  const bolsaCarrinho = document.createElement("img")
  const carrinhoVazio = document.createElement("div")

  tituloCarrinho.classList.add("tituloCarrinho")
  bolsaCarrinho.classList.add("bolsaCompras")
  carrinhoVazio.classList.add("carrinhoVazio")

  tituloCarrinho.innerText = "Carrinho"
  bolsaCarrinho.src = "./src/img/shopping_bag_FILL0_wght400_GRAD0_opsz48.png"
  carrinhoVazio.innerText = "Por enquanto não temos produtos no carrinho"

  carrinhoVazio.appendChild(bolsaCarrinho)
  main.appendChild(caixaCarrinho)
  caixaCarrinho.append(tituloCarrinho, carrinhoVazio)
  return caixaCarrinho
}
criarCarrinho()

//FUNÇÃO DA LISTA DE PRODUTOS
  const ul = document.querySelector('.lista');
function criarProdutos (produto) {
  const li = document.createElement('li');
  const imagem = document.createElement('img');
  const h3 = document.createElement('h3');
  const span = document.createElement('span')
  
  const ol = document.createElement("ol")
  produto.componentes.forEach(function(str){
    const listaComponentes = document.createElement("li")
    listaComponentes.classList.add("listaComponentes")
    listaComponentes.innerText = str
    ol.appendChild(listaComponentes)
  })

  const preco = document.createElement('p');

  const button = document.createElement("button")
  button.classList.add("comprarProduto")
  button.innerText = "Comprar"
  button.id = produto.id
  button.addEventListener("click", () => {
     addCart(produto)
  })

  li.classList.add("product")
  imagem.classList.add("imagem")
  h3.classList.add("nomeProduto")
  span.classList.add("categoria")
  preco.classList.add("preco")
  
  imagem.src = produto.img;
  h3.innerText = produto.nome;
  span.innerText = produto.secao;
  preco.innerText = `R$ ${produto.preco}.00`;
  
  li.append(imagem, h3, span, ol, preco, button)
  return li
}

function listarProdutos(listaProdutos){
  const produtosFiltrados = filtrarPorObjeto(listaProdutos, 'produto')
    for (let i=0; i<produtosFiltrados.length; i++){
      const produtoCard = criarProdutos(produtosFiltrados[i])
      ul.append(produtoCard)
    }
}
listarProdutos(data)

//FILTROS DOS PRODUTOS

function listarHortifruit(listaProdutos){
  const hortifruitFiltrados = filtrarPorHortifruit(listaProdutos, 'Hortifruit')
    for (let i=0; i<hortifruitFiltrados.length; i++){
      const produtoCard = criarProdutos(hortifruitFiltrados[i])
      ul.appendChild(produtoCard)
    }
    /* let somaHortifruit = 0
      for(let i = 0; i<hortifruitFiltrados.length; i++){
      somaHortifruit+=hortifruitFiltrados[i].preco
      let total = document.querySelector(".total")
      total.innerText = `R$${somaHortifruit}.00`
      div.append(total)
      }*/
}
function listarPanificadora(listaProdutos){
  const panificadoraFiltrados = filtrarPorPanificadora(listaProdutos, 'Panificadora')
    for (let i=0; i<panificadoraFiltrados.length; i++){
      const produtoCard = criarProdutos(panificadoraFiltrados[i])
      ul.appendChild(produtoCard)
 }
  /*let somaPanificadora = 0
    for(let i = 0; i<panificadoraFiltrados.length; i++){
    somaPanificadora+=panificadoraFiltrados[i].preco
    let total = document.querySelector(".total")
    total.innerText = `R$${somaPanificadora}`
    div.append(total)
 }*/
}
function listarLaticinios(listaProdutos){
  const laticiniosFiltrados = filtrarPorLaticinios(listaProdutos, 'Laticínio')
    for (let i=0; i<laticiniosFiltrados.length; i++){
      const produtoCard = criarProdutos(laticiniosFiltrados[i])
      ul.appendChild(produtoCard)
 }
  /*let somaLaticinios = 0
  for(let i = 0; i<laticiniosFiltrados.length; i++){
  somaLaticinios+=laticiniosFiltrados[i].preco
  let total = document.querySelector(".total")
  total.innerText = `R$${somaLaticinios}`
  div.append(total)
}*/
}

function filtrarPorObjeto(listaProdutos, objeto){
  const produtosFiltrados = listaProdutos.filter((produto)=>{
    return produto.objeto === objeto
  })
  return produtosFiltrados
}

function filtrarPorHortifruit(listaProdutos, secao){
  const hortifruitFiltrados = listaProdutos.filter((produto)=>{
    return produto.secao === secao
  })
  return hortifruitFiltrados
}
function filtrarPorPanificadora(listaProdutos, secao){
  const panificadoraFiltrados = listaProdutos.filter((produto)=>{
    return produto.secao === secao
  })
  return panificadoraFiltrados
}
function filtrarPorLaticinios(listaProdutos, secao){
  const laticiniosFiltrados = listaProdutos.filter((produto)=>{
    return produto.secao === secao
  })
  return laticiniosFiltrados
}


//FILTRO POR CLICK
const buttonDiv = document.getElementById("filters") 
buttonDiv.addEventListener("click", event =>{
  let selecionarLista = document.querySelector(".lista").innerHTML = ""
  const clique = event.target
  if(clique.id === 'hortifruit'){
    selecionarLista
    listarHortifruit(data)
  }
  else if(clique.id === 'todos'){
    selecionarLista
    listarProdutos(data)
  }
  else if(clique.id === 'panificadora'){
    selecionarLista
    listarPanificadora(data)
  }
  else if(clique.id === 'laticinios'){
    selecionarLista
    listarLaticinios(data)
  }
})

/*let div = document.querySelector(".caixaPreco")
function valorTotal(){
let soma = 0
  for(let i = 0; i<data.length; i++){
    let total = document.querySelector(".total")
    soma+=data[i].preco
    totala.innerText = soma
    totalFinal = `R$ ${totala}`
    div.append(totalFinal)
    }
  } 
valorTotal()*/

//FILTRO DE PESQUISA
function montarDados(listaProdutos){
  const listaCards = document.querySelector(".lista");
  listaCards.innerHTML = "";
      listarProdutos(listaProdutos)
}

function filtrarPorCategoria(listaProdutos, secao) {
  const produtosFiltrados = listaProdutos.filter((produto) => {
      const produtoCategoria = produto.secao.toUpperCase().trim();
      secao = secao.toUpperCase().trim();

      return produtoCategoria.includes(secao)
  })
  return produtosFiltrados;
}
montarDados(data);


const inputPesquisa = document.getElementById("input")
  inputPesquisa.addEventListener("input", filtrarCards)

function filtrarCards(event){
  event.preventDefault()
  const value = document.getElementById("input").value
  const listaFiltrada = data.filter((produto)=>{
    return produto.nome.toLowerCase().includes(value.toLowerCase()) || 
           produto.secao.toLowerCase().includes(value.toLowerCase()) || 
           produto.categoria.toLowerCase().includes(value.toLowerCase()) 
  })
  montarDados(listaFiltrada)
}
//ADICIONAR E REMOVER DO CARRINHO
const carrinhoVazio = document.querySelector(".carrinhoVazio")
carrinhoVazio.addEventListener("click", addCart)
function emptyCart(){
  return carrinhoVazio.insertAdjacentHTML("beforeend",
  `
  <div class="pesquisa">
  <input class="espacoDigitar" type="text" placeholder="Digite aqui sua pesquisa">
  <button class="botaoPesquisar">Pesquisar</button>
</div>
<ul class="vazio">
  <h3 class="carrinhoCompras">Carrinho de compras</h3>
  `
) }

function cardCarrinho(item){
  const produtoPequeno = document.createElement("div")
  const imgPrinc = document.createElement("img")
  const descricao = document.createElement("div")
  const nome = document.createElement("h3")
  const secao = document.createElement("h3")
  const price = document.createElement("h3")
  const strong = document.createElement("strong")
  const botaoRemover = document.createElement("div")
  const button = document.createElement("button")
  const imgRemover = document.createElement("img")

  produtoPequeno.classList.add("produtoPequeno")
  imgPrinc.classList.add("imgPrinc")
  descricao.classList.add("descricaoProdutoPequeno")
  nome.classList.add("nameProduct")
  secao.classList.add("secaoProduct")
  price.classList.add("price")
  button.classList.add("remove")
  
  button.id = item.id
  imgPrinc.src = item.img
  nome.innerText = item.nome
  secao.innerText = item.secao
  price.innerText = item.preco
  button.innerText = "remover"

  price.append(strong)
  descricao.append(nome, secao, price)
  produtoPequeno.append(imgPrinc,descricao, button)
  carrinhoVazio.appendChild(produtoPequeno)

  button.addEventListener("click", () => {
    const id = data.indexOf(item)
    data.splice(id, 1)

    addCart(item)
})
}
function quantSoma(){
  return caixaCarrinho.insertAdjacentHTML("beforeend",
  `
  <div class="quantidade">
     <h2>Quantidade</h2>
     <span class="quant">0</span>
  </div>
  <div class="total">
     <h2>Total</h2>
     <span class="totalValor">00.00</span>
  </div>
  `
)}
quantSoma()

let span = document.querySelector(".totalValor")
let spanDois = document.querySelector(".quant")
let soma = 0
let quantProduto = 0

const car = []
function addCart(produto){
  car.push(produto)
  renderizaCarrinho()
}

function renderizaCarrinho(){
  carrinhoVazio.innerHTML = ""
  car.map((item)=> cardCarrinho(item))
     // if(clique.parentElement.parentElement.className === "comprarProduto"){
        quantProduto+=produto
        let quant = document.querySelector(".quant")
        quant.innerText = car.length


        soma+=produto.preco
        let total = document.querySelector(".totalValor")
        total.innerText = `R$${soma}.00`
        span.appendChild(total)
}

/*function removerProduto(item){
    carrinhoVazio.innerHTML = ""
    const produtoEncontrado = car.find((produto) => produto.id === item.id)
   car.splice(produtoEncontrado, 1)
   renderizaCarrinho()
   console.log(car);
  }*/
/*function removerProduto(item){
  if(item.className==="remove"){
    carrinhoVazio.innerHTML = ""
    const produtoEncontrado = car.find((produto)=>produto === item)
   car.splice(produtoEncontrado, 1)
}
}*/

/*const removerProduto = (product) =>{
  const index = car.indexOf(product)
  car = car.filter((el, i) => i !== index)
  cardCarrinho(product)
}*/