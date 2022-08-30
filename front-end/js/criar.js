const ul = document.querySelector('.produtos')

const botaoCriaProduto = document.querySelector('.botao-cria-produto')
const nomeProduto = document.querySelector('#nome')
const valorProduto = document.querySelector('#valor')
const descricaoProduto = document.querySelector('#descricao')
const imagemProduto = document.querySelector('#imagem')

async function criaProduto(nome, tipo, valor, descricao, sustentavel, img) {
    const url = 'http://localhost:3300';

    const dado = {
        "nome": nome,
        "tipo": tipo,
        "valor": valor,
        "descricao": descricao,
        "sustentavel": sustentavel,
        "img": img
    }

    const itens = await fetch(`${url}/criar`, {

        method: "POST",
        
        body: JSON.stringify(dado),

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
    // console.log('ok')
    console.log(nomeProduto.value)
    criaProduto(nomeProduto.value, 'verao', valorProduto.value, descricaoProduto.value, 'nao', imagemProduto.value)
});