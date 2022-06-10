//FUNÇÃO DOS BOTÕES
const header = document.querySelector('header')
const main = document.querySelector('main')
function filtros(){
   const filtersDiv = document.createElement('div')
   filtersDiv.classList.add("filtersContainer")

   const todos = document.createElement('button')
   todos.classList.add("estiloGeralBotoes--mostrarTodos")
   todos.classList.add("estiloGeralBotoes")
   todos.innerText = "Todos Produtos"
   todos.id = "todos"

   const hortifruit = document.createElement('button')
   hortifruit.classList.add("estiloGeralBotoes--filtrarHortifruit")
   hortifruit.classList.add("estiloGeralBotoes")
   hortifruit.innerText = "Hortifruit"
   hortifruit.id = "hortifruit"

   const panificadora = document.createElement('button')
   panificadora.classList.add("estiloGeralBotoes--filtrarPanificadora")
   panificadora.classList.add("estiloGeralBotoes")
   panificadora.innerText = "Panificadora"
   panificadora.id = "panificadora"
   
   const laticinios = document.createElement('button')
   laticinios.classList.add("estiloGeralBotoes--filtrarLaticinios")
   laticinios.classList.add("estiloGeralBotoes")
   laticinios.innerText = "Laticínios"
   laticinios.id = "laticinios"

   header.append(filtersDiv)
   filtersDiv.append(todos, hortifruit, panificadora, laticinios)
   return filtersDiv
}



//FUNÇÃO DO ESPAÇO DE PESQUISA E DO BOTÃO DE PESQUISA


function pesquisa(){
   const containerBusca = document.createElement('div')
   containerBusca.classList.add("containerBuscaPorNome")

   const input = document.createElement('input')
   input.type = "text"
   input.id = "input"
   input.placeholder = "Pesquisar Por"
   input.classList.add("campoBuscaPorNome")

   const button = document.createElement('button')
   button.classList.add("estiloGeralBotoes--botaoBuscaPorNome")
   button.classList.add("estiloGeralBotoes")

   const img = document.createElement('img')
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
  descricao.classList.add("pDescricao")
  descricao.innerText = "Valor total dos produtos da sessão selecionada"
  
  const total = document.createElement('p')
  total.classList.add("total")
  total.innerText = "R$"

  const span = document.createElement('span')
  span.classList.add("precoTotal")
  span.innerText = "00.00"
  
  header.append(div)
  div.append(descricao, total)
  total.appendChild(span)
  return div
}
caixaPreco()*/

//CARRINHO
const caixaCarrinho = document.querySelector("section")
 function criarCarrinho(){

   const tituloCarrinho = document.createElement('p')
   tituloCarrinho.classList.add("tituloCarrinho")
   tituloCarrinho.innerText = "Carrinho"

   const bolsa = document.createElement('img')
   bolsa.classList.add("bolsaCompras")
   bolsa.src = "./src/img/shopping_bag_FILL0_wght400_GRAD0_opsz48.png"

   const carrinhoVazio = document.createElement('div')
   carrinhoVazio.classList.add("carrinhoVazio")
   carrinhoVazio.innerText = "Por enquanto não temos produtos no carrinho"
   
   carrinhoVazio.appendChild(bolsa)
   main.append(caixaCarrinho)
   caixaCarrinho.append(tituloCarrinho, carrinhoVazio)
   return caixaCarrinho
 }
 criarCarrinho()

//FUNÇÃO DA LISTA DE PRODUTOS
  const ul = document.querySelector('.lista');
function criarProdutos (produto) {

  const li = document.createElement('li');
  li.classList.add("product")
  
  const imagem = document.createElement('img');
  imagem.classList.add("imagem")

  const h3 = document.createElement('h3');
  h3.classList.add("nomeProduto")

  const span = document.createElement('span')
  span.classList.add("categoria")

  const ol = document.createElement('ol')
        produto.componentes.forEach(function(str){
            const listaComponentes = document.createElement('li')
            listaComponentes.classList.add("listaComponentes")
            listaComponentes.innerText = str
            ol.appendChild(listaComponentes)
  })

  const preco = document.createElement('p');
  preco.classList.add("preco")

  const button = document.createElement('button')
  button.classList.add("comprarProduto")
  button.innerText = "Comprar"
  button.id = produto.id
  button.addEventListener("click", (event)=>{
    addCart(produto, event)
  })

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
      const produto = produtosFiltrados[i]
      const produtoCard = criarProdutos(produto)
      ul.append(produtoCard)
 }
}
listarProdutos(data)

//FILTROS DOS PRODUTOS

function listarHortifruit(listaProdutos){
  const hortifruitFiltrados = filtrarPorHortifruit(listaProdutos, 'Hortifruit')
    for (let i=0; i<hortifruitFiltrados.length; i++){
      const produto = hortifruitFiltrados[i]
      const produtoCard = criarProdutos(produto)
      ul.appendChild(produtoCard)
    }
     /* let somaHortifruit = 0
      for(let i = 0; i<hortifruitFiltrados.length; i++){
   somaHortifruit+=hortifruitFiltrados[i].preco
    let total = document.querySelector(".total")
  total.innerText = `R$${somaHortifruit}.00`
  div.append(total)*/
      }
//adicioinar chave
function listarPanificadora(listaProdutos){
  const panificadoraFiltrados = filtrarPorPanificadora(listaProdutos, 'Panificadora')
    for (let i=0; i<panificadoraFiltrados.length; i++){
      const produto = panificadoraFiltrados[i]
      const produtoCard = criarProdutos(produto)
      ul.appendChild(produtoCard)
 }
   /*let somaPanificadora = 0
    for(let i = 0; i<panificadoraFiltrados.length; i++){
    somaPanificadora+=panificadoraFiltrados[i].preco
    let total = document.querySelector(".total")
    total.innerText = `R$${somaPanificadora}`
    div.append(total)*/
 }
//adicionar chaves
function listarLaticinios(listaProdutos){
  const laticiniosFiltrados = filtrarPorLaticinios(listaProdutos, 'Laticínio')
    for (let i=0; i<laticiniosFiltrados.length; i++){
      const produto = laticiniosFiltrados[i]
      const produtoCard = criarProdutos(produto)
      ul.appendChild(produtoCard)
 }
  /*let somaLaticinios = 0
  for(let i = 0; i<laticiniosFiltrados.length; i++){
  somaLaticinios+=laticiniosFiltrados[i].preco
  let total = document.querySelector(".total")
  total.innerText = `R$${somaLaticinios}`
  div.append(total)*/
}
//adicionar chave
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
  const clique = event.target
  if(clique.id === 'hortifruit'){
    document.querySelector(".lista").innerHTML = ""
    listarHortifruit(data)

  }
  else if(clique.id === 'todos'){
    document.querySelector(".lista").innerHTML = ""
    listarProdutos(data)
  }
  else if(clique.id === 'panificadora'){
    document.querySelector(".lista").innerHTML = ""
    listarPanificadora(data)
  }
  else if(clique.id === 'laticinios'){
    document.querySelector(".lista").innerHTML = ""
    listarLaticinios(data)
    
  }
})

/*let div = document.querySelector(".caixaPreco")

function valorTotal(){
let soma = 0
  for(let i = 0; i<data.length; i++){
    soma+=data[i].preco
      let total = document.querySelector(".total")
    total.innerText = `R$${soma}.00`
    div.append(total)
    }
  } 
valorTotal()*/

/*buttonDiv.addEventListener("click", event =>{
  const clique = event.target
  let soma = 0
  for(let i = 0; i<data.length; i++){
    soma+=data[i].preco
    if(clique.id === 'todos'){
      let total = document.querySelector(".quantidade")
    total.innerText = `R$${soma}.00`
    div.append(total)
    }
  }
})*/

function montarDados(listaProdutos) {
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



function space(item){
  return carrinhoVazio.insertAdjacentHTML("beforeend",
  `
  <div class="produtoPequeno">
  <img class="imgPrinc" src=${item.img}>
      <div class="descricaoProdutoPequeno">
        <h3 class="nameProduct">${item.nome}</h3>
        <h3 class="secaoProduct">${item.secao}</h3>
        <h3 class="price"><strong>R$${item.preco}.00</strong></h3>
      </div class="botaoRemover">
      <button class="remove" id="produto"><img class="remove" src="./src/img/icons8-waste-16.png" alt="Lixeira"></button>
      </div>
  `
)}

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

let span = document.querySelector(".total")
let spanDois = document.querySelector(".quant")
let soma = 0
let quantProduto = 0
let car = []



function addCart(produto){
  const clique = event.target
  car.push(produto)
      if(clique.parentElement.parentElement.className === "comprarProduto"){
        carrinhoVazio.innerHTML = ""
        car.map((produto)=>space(produto))

        quantProduto+=produto
        let quant = document.querySelector(".quant")
        quant.innerText = car.length
      

        soma+=produto.preco
        let total = document.querySelector(".totalValor")
        total.innerText = `R$${soma}.00`
        span.append(total)

      }
      else if(clique.className==="remove"){
        car.splice(caixaCarrinho, 1)
        carrinhoVazio.innerHTML = ""
        car.map(space)

        quantProduto-=produto
      let quant = document.querySelector(".quant")
      quant.innerText = car.length

      soma-=produto.preco
      let total = document.querySelector(".totalValor")
      total.innerText = `R$${soma}.00`
      span.append(total)
      }

}

/*addEventListener("click", (event)=>{
  const clique = event.target
  if(clique.className==="remove"){
    car.splice(clique.id)
    carrinhoVazio.innerHTML = ""
    car.map(space)
  }
})
 /* car.push(E432W)
      soma-=produto.preco
      let total = document.querySelector(".totalValor")
      total.innerText = `R$${soma}.00`
      span.append(total)
      console.log(car)
  

  const clique = event.target
  if(clique.className==="remove"){
    car.splice(clique.id)
    carrinhoVazio.innerHTML = ""
    car.map(space)
  }
}
/*if(clique.className==="remove"){
  car.splice(clique.id, 1)
  carrinhoVazio.innerHTML = ""
  car.map(space)

  soma-=data[i].preco.parentElement.parentElement
   let total = document.querySelector(".totalValor")
   total.innerText = `R$${soma}.00`
   span.append(total)

}*/

