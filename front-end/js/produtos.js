const ul = document.querySelector('.produtos')
const botaoMostraTodos = document.querySelector('.mostra-todos')
const botaoMostraBasico = document.querySelector('.mostra-basico')
const botaoMostraVerao = document.querySelector('.mostra-verao')
const botaoMostraInverno = document.querySelector('.mostra-inverno')
const botaoMostraSustentavel = document.querySelector('.mostra-sustentaveis')


async function pegaTodos() {
    const url = 'http://localhost:3300';

    const itens = await fetch(`${url}/listar`)
    const itensConvertidos = await itens.json()

    ul.innerHTML = ''

    itensConvertidos.tabelaRoupa.forEach( e => {
        ul.innerHTML = ul.innerHTML + `
        <li>
            <h3 class="produto-nome">${e.nome}</h3>
            <p class="produto-descricao">Todos os modelos para quem gosta de velocidade.</p>
            <img src="${e.img}" class="imagens-produtos">
            <p class="produto-preco">R$${e.valor}</p>
            <button class="botao botao-produto" type="button">Adicionar ao Carrinho</button>
        </li>
        `
    })
    // return itensConvertidos
}

async function pegaItens(tipoItem) {
    const url = 'http://localhost:3300';

    const itens = await fetch(`${url}/buscar?${tipoItem}`)
    const itensConvertidos = await itens.json()

    ul.innerHTML = ''

    itensConvertidos.tabelaFiltrada.forEach( e => {
        ul.innerHTML = ul.innerHTML + `
        <li>
            <h3 class="produto-nome">${e.nome}</h3>
            <p class="produto-descricao">Todos os modelos para quem gosta de velocidade.</p>
            <img src="${e.img}" class="imagens-produtos">
            <p class="produto-preco">R$${e.valor}</p>
            <button class="botao botao-produto" type="button">Adicionar ao Carrinho</button>
        </li>
        `
    })
    // return itensConvertidos
}

async function pegaInverno(valor) {
    const url = 'http://localhost:3300';

    const itens = await fetch(`${url}/buscar?tipo=${valor}`)
    const itensConvertidos = await itens.json()

    ul.innerHTML = ''

    itensConvertidos.tabelaFiltrada.forEach( e => {
        ul.innerHTML = ul.innerHTML + `
        <li>
            <h3 class="produto-nome">${e.nome}</h3>
            <p class="produto-descricao">Todos os modelos para quem gosta de velocidade.</p>
            <img src="${e.img}" class="imagens-produtos">
            <p class="produto-preco">R$${e.valor}</p>
            <button class="botao botao-produto" type="button">Adicionar ao Carrinho</button>
        </li>
        `
    })
    // return itensConvertidos
}

async function pegaSustentavel() {
    const url = 'http://localhost:3300';

    const itens = await fetch(`${url}/buscar?sustentavel=sim`)
    const itensConvertidos = await itens.json()

    ul.innerHTML = ''

    itensConvertidos.tabelaFiltrada.forEach( e => {
        ul.innerHTML = ul.innerHTML + `
        <li>
            <h3 class="produto-nome">${e.nome}</h3>
            <p class="produto-descricao">Todos os modelos para quem gosta de velocidade.</p>
            <img src="${e.img}" class="imagens-produtos">
            <p class="produto-preco">R$${e.valor}</p>
            <button class="botao botao-produto" type="button">Adicionar ao Carrinho</button>
        </li>
        `
    })
    // return itensConvertidos
}

botaoMostraTodos.addEventListener('click', function () {
    pegaTodos()
});

botaoMostraBasico.addEventListener('click', function () {
    pegaItens(botaoMostraBasico.value)
});

botaoMostraVerao.addEventListener('click', function () {
    pegaItens(botaoMostraVerao.value)
});

botaoMostraInverno.addEventListener('click', function () {
    pegaItens(botaoMostraInverno.value)
});

botaoMostraSustentavel.addEventListener('click', function () {
    pegaItens(botaoMostraSustentavel.value)
});