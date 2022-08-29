const ul = document.querySelector('.produtos')

const botaoCriaProduto = document.querySelector('.botao-cria-produto')
const botaoTesteFormulario = document.querySelector('.teste-formulario')

async function criaProduto() {
    const url = 'http://localhost:3300';
    console.log('entrou')

    const itens = await fetch(`${url}/criar`, {

        method: "POST",
                
        body: JSON.stringify({
            "nome": "novo produto",
            "tipo": "tipo teste",
            "valor": 12456,
            "descricao": "descricao qualquer",
            "sustentavel": "sim"
        }),


        // mode: "cors",

        headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        }
    })
    // console.log('itensConvertidos antes')
    // console.log(req.headers.getAll('Content-Type'));
    const itensConvertidos = await itens.json()
    return itensConvertidos
    // console.log('itensConvertidos depois')

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

botaoTesteFormulario.addEventListener('click', function () {
    console.log('event listener')
    criaProduto()
});