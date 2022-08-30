const popup = document.querySelector('.popup');
const msgPopup = document.querySelector('.msg-popup');
const botaoFechar = document.querySelector('.fechar');
const botaoOkPopup = document.querySelector('.ok-popup');

const comboboxSelecaoId = document.querySelector('.combobox-selecao-id')

const nomeProduto = document.querySelector('#nome')
const valorProduto = document.querySelector('#valor')
const descricaoProduto = document.querySelector('#descricao')
const imagemProduto = document.querySelector('#imagem')
const radioInverno = document.querySelector('#radio-tipo-inverno')
const radioVerao = document.querySelector('#radio-tipo-verao')
const radioSustentavelSim = document.querySelector('#radio-sustentavel-sim')
const radioSustentavelNao = document.querySelector('#radio-sustentavel-nao')

const botaoDeletaProduto = document.querySelector('.botao-cria-produto')

pegaTodos()

async function pegaTodos() {
    const url = 'http://localhost:3300';

    comboboxSelecaoId.innerHTML = `<option selected disabled hiddn>Escolha o ID do Item</option>`

    const itens = await fetch(`${url}/listar`)
    const itensConvertidos = await itens.json()

    itensConvertidos.tabelaRoupa.forEach(e => {
        comboboxSelecaoId.innerHTML = comboboxSelecaoId.innerHTML + `
        <option>${e.id}</option>
        `
    })
}

async function selecionaItem (id) {
    const url = 'http://localhost:3300';

    const itens = await fetch(`${url}/listar/${id}`)
    const itensConvertidos = await itens.json()

    nomeProduto.value = itensConvertidos.produto.nome
    valorProduto.value = itensConvertidos.produto.valor
    descricaoProduto.value = itensConvertidos.produto.descricao
    imagemProduto.value = itensConvertidos.produto.img

    if (itensConvertidos.produto.tipo == 'verao') {
        radioVerao.checked = true
    } else {
        radioInverno.checked = true
    }

    if (itensConvertidos.produto.sustentavel == 'sim') {
        radioSustentavelSim.checked = true
    } else {
        radioSustentavelNao.checked = true
    }
}

async function deletarItem(id) {
    const url = 'http://localhost:3300';

    const itens = await fetch(`${url}/deletar/${id}`,{
        method: 'PUT'
    })
    const itensConvertidos = await itens.json()

    alertaPopup(itensConvertidos.mensagem)

    pegaTodos()

    nomeProduto.value = ''
    valorProduto.value = ''
    descricaoProduto.value = ''
}

function alertaPopup(msg) {
    popup.classList.remove('hide-popup')
    msgPopup.innerHTML = `<p class="texto-popup"> ${msg}</p>`;
};

comboboxSelecaoId.addEventListener('change', () => {
    selecionaItem(comboboxSelecaoId.value)
})

botaoDeletaProduto.addEventListener('click', () => {
    deletarItem(comboboxSelecaoId.value)
})

botaoOkPopup.addEventListener('click', function () {
    popup.classList.add('hide-popup')
});


// evento disparado ao clicar no botão "x" do popup. Como resultado, o pop desaparece da tela
botaoFechar.addEventListener('click', function () {
    popup.classList.add('hide-popup')
});