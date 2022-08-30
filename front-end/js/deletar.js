const comboboxSelecaoId = document.querySelector('.combobox-selecao-id')

async function pegaTodos() {
    const url = 'http://localhost:3300';

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

    console.log(itensConvertidos.produto)

    // itensConvertidos.tabelaRoupa.forEach(e => {
    //     comboboxSelecaoId.innerHTML = comboboxSelecaoId.innerHTML + `
    //     <option>${e.id}</option>
    //     `
    // })
}

pegaTodos()

comboboxSelecaoId.addEventListener('change', () => {
    selecionaItem(2)
})

