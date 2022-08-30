const ul = document.querySelector('.produtos')

const popup = document.querySelector('.popup');
const msgPopup = document.querySelector('.msg-popup');
const botaoFechar = document.querySelector('.fechar');
const botaoOkPopup = document.querySelector('.ok-popup');

const botaoCriaProduto = document.querySelector('.botao-cria-produto')
const nomeProduto = document.querySelector('#nome')
const valorProduto = document.querySelector('#valor')
const descricaoProduto = document.querySelector('#descricao')
const imagemProduto = document.querySelector('#imagem')
const radioInverno = document.querySelector('#radio-tipo-inverno')
const radioVerao = document.querySelector('#radio-tipo-verao')
const radioSustentavelSim = document.querySelector('#radio-sustentavel-sim')
const radioSustentavelNao = document.querySelector('#radio-sustentavel-nao')

// async function criaProduto() {
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
    console.log('antes fetch')
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
    // console.log('itensConvertidos.mensagem')
    alertaPopup(itensConvertidos.mensagem)

    // nomeProduto.value = ''
    // valorProduto.value = ''
    // descricaoProduto.value = ''
    // radioInverno.checked = false
    // radioVerao.checked = false
    // radioSustentavelSim.checked = false
    // radioSustentavelNao.checked = false
    // imagemProduto.value = ''
}

function alertaPopup(msg) {
    popup.classList.remove('hide-popup')
    msgPopup.innerHTML = `<p class="texto-popup"> ${msg}</p>`;
};

botaoCriaProduto.addEventListener('click', function () {
    let tipo = 'verao'
    let sustentavel = 'nao'
    if (radioInverno.checked)
        tipo = 'inverno'
    
    if (radioSustentavelSim.checked)
        sustentavel = 'sim'
    
    criaProduto(nomeProduto.value, tipo, valorProduto.value, descricaoProduto.value, sustentavel, imagemProduto.value)
    
});

botaoOkPopup.addEventListener('click', function () {
    popup.classList.add('hide-popup')
});


// evento disparado ao clicar no botão "x" do popup. Como resultado, o pop desaparece da tela
botaoFechar.addEventListener('click', function () {
    popup.classList.add('hide-popup')
});