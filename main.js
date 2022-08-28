const ul = document.querySelector('.produtos')
const botaoMostraTodos = document.querySelector('.mostra-todos')
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
            <p class="produto-preco">R$${e.valor}</p>
            <button class="botao botao-produto" type="button">Adicionar ao Carrinho</button>
        </li>
        `
    })
    return itensConvertidos
}

async function pegaVerao() {
    const url = 'http://localhost:3300';

    const itens = await fetch(`${url}/buscar?tipo=verao`)
    const itensConvertidos = await itens.json()

    ul.innerHTML = ''

    itensConvertidos.tabelaFiltrada.forEach( e => {
        ul.innerHTML = ul.innerHTML + `
        <li>
            <h3 class="produto-nome">${e.nome}</h3>
            <p class="produto-descricao">Todos os modelos para quem gosta de velocidade.</p>
            <p class="produto-preco">R$${e.valor}</p>
            <button class="botao" type="button">Adicionar ao Carrinho</button>
        </li>
        `
    })
    return itensConvertidos
}

async function pegaInverno() {
    const url = 'http://localhost:3300';

    const itens = await fetch(`${url}/buscar?tipo=inverno`)
    const itensConvertidos = await itens.json()

    ul.innerHTML = ''

    itensConvertidos.tabelaFiltrada.forEach( e => {
        ul.innerHTML = ul.innerHTML + `
        <li>
            <h3 class="produto-nome">${e.nome}</h3>
            <p class="produto-descricao">Todos os modelos para quem gosta de velocidade.</p>
            <p class="produto-preco">R$${e.valor}</p>
            <button class="botao" type="button">Adicionar ao Carrinho</button>
        </li>
        `
    })
    return itensConvertidos
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
            <p class="produto-preco">R$${e.valor}</p>
            <button class="botao" type="button">Adicionar ao Carrinho</button>
        </li>
        `
    })
    return itensConvertidos
}

botaoMostraTodos.addEventListener('click', function () {
    pegaTodos()
});

botaoMostraVerao.addEventListener('click', function () {
    pegaVerao()

});

botaoMostraInverno.addEventListener('click', function () {
    pegaInverno()
});

botaoMostraSustentavel.addEventListener('click', function () {
    pegaSustentavel()
});