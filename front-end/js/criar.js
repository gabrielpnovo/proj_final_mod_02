const ul = document.querySelector('.produtos')

const popup = document.querySelector('.popup');
const msgPopup = document.querySelector('.msg-popup');
const botaoFechar = document.querySelector('.fechar');
const botaoOkPopup = document.querySelector('.ok-popup');

const botaoCriaProduto = document.querySelector('.botao-acao-produto')
const nomeProduto = document.querySelector('#nome')
const valorProduto = document.querySelector('#valor')
const descricaoProduto = document.querySelector('#descricao')
const imagemProduto = document.querySelector('#imagem')
const tiposArray = document.querySelectorAll('.radio-tipo')
const sustentaveisArray = document.querySelectorAll('.radio-sustentavel')

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

    const itensConvertidos = await itens.json()
    alertaPopup(itensConvertidos.mensagem)

    nomeProduto.value = ''
    valorProduto.value = ''
    descricaoProduto.value = ''
    imagemProduto.value = ''
}

function alertaPopup(msg) {
    popup.classList.remove('hide-popup')
    msgPopup.innerHTML = `<p class="texto-popup"> ${msg}</p>`;
};

botaoCriaProduto.addEventListener('click', function () {
    let tipo = ''
    for (e of tiposArray) {
        if (e.checked == true) {
            tipo = e.value
        }
    }

    let sustentavel = ''
    for (e of sustentaveisArray) {
        if (e.checked == true) {
            sustentavel = e.value
        }
    }
    
    criaProduto(nomeProduto.value, tipo, valorProduto.value, descricaoProduto.value, sustentavel, imagemProduto.value)
    
});

botaoOkPopup.addEventListener('click', function () {
    popup.classList.add('hide-popup')
});

botaoFechar.addEventListener('click', function () {
    popup.classList.add('hide-popup')
});