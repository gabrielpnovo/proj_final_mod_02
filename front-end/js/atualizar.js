const popup = document.querySelector('.popup');
const msgPopup = document.querySelector('.msg-popup');
const botaoFechar = document.querySelector('.fechar');
const botaoOkPopup = document.querySelector('.ok-popup');

const comboboxSelecaoId = document.querySelector('.combobox-selecao-id')

const nomeProduto = document.querySelector('#nome')
const valorProduto = document.querySelector('#valor')
const descricaoProduto = document.querySelector('#descricao')
const imagemProduto = document.querySelector('#imagem')
const tiposArray = document.querySelectorAll('.radio-tipo')
const sustentaveisArray = document.querySelectorAll('.radio-sustentavel')

const botaoAtualizaProduto = document.querySelector('.botao-acao-produto')

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

    for (e of tiposArray) {
        if (e.value == itensConvertidos.produto.tipo) {
            e.checked=true
        }
    }

    for (e of sustentaveisArray) {
        if (e.value == itensConvertidos.produto.sustentavel) {
            e.checked=true
        }
    }
}

async function atualizarItem(id, nome, tipo, valor, descricao, sustentavel, img) {
    const url = 'http://localhost:3300';

    const dado = {
        "nome": nome,
        "tipo": tipo,
        "valor": valor,
        "descricao": descricao,
        "sustentavel": sustentavel,
        "img": img
    }

    const itens = await fetch(`${url}/atualizar/${id}`,{
        method: 'PUT',

        body: JSON.stringify(dado),

        headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        }
    })
    const itensConvertidos = await itens.json()
    console.log((itensConvertidos.dado))

    alertaPopup(itensConvertidos.mensagem)

    // pegaTodos()

    // nomeProduto.value = ''
    // valorProduto.value = ''
    // descricaoProduto.value = ''
}

comboboxSelecaoId.addEventListener('change', () => {
    selecionaItem(comboboxSelecaoId.value)
})

botaoAtualizaProduto.addEventListener('click', () => {
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
    
    atualizarItem(comboboxSelecaoId.value, nomeProduto.value, tipo, valorProduto.value, descricaoProduto.value, sustentavel, imagemProduto.value)
})

function alertaPopup(msg) {
    popup.classList.remove('hide-popup')
    msgPopup.innerHTML = `<p class="texto-popup"> ${msg}</p>`;
};

botaoOkPopup.addEventListener('click', function () {
    popup.classList.add('hide-popup')
});


// evento disparado ao clicar no botão "x" do popup. Como resultado, o pop desaparece da tela
botaoFechar.addEventListener('click', function () {
    popup.classList.add('hide-popup')
});