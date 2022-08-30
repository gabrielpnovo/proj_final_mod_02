const ul = document.querySelector('.produtos')

const botaoCriaProduto = document.querySelector('.botao-cria-produto')
// const botaoTesteFormulario = document.querySelector('.teste-formulario')

async function criaProduto(a, b, c, d, e) {
    const url = 'http://localhost:3300';

    const dado = {
        "nome": a,
        "tipo": b,
        "valor": c,
        "descricao": d,
        "sustentavel": e
    }

    const itens = await fetch(`${url}/criar`, {

        method: "POST",
        
        body: JSON.stringify(dado),
        // body: JSON.stringify({
        //     "nome": "novo produto",
        //     "tipo": "tipo teste",
        //     "valor": 12456,
        //     "descricao": "descricao qualquer",
        //     "sustentavel": "sim"
        // }),

        headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        }
    })

    // ul.innerHTML = ''

    // itensConvertidos.tabelaFiltrada.forEach( e => {
    //     ul.innerHTML = ul.innerHTML + `
    //     <li>
    //         <h3 class="produto-nome">${e.nome}</h3>
    //         <p class="produto-descricao">Todos os modelos para quem gosta de velocidade.</p>
    //         <p class="produto-preco">R$${e.valor}</p>
    //         <button class="botao botao-produto" type="button">Adicionar ao Carrinho</button>
    //     </li>
    //     `
    // })
    // return itensConvertidos
}

botaoCriaProduto.addEventListener('click', function () {
    criaProduto('nomeprod', 'tipoprod', 123, 'desc qualtuqe', 'nao')
});