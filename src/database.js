const tabelaRoupa = [
    { id: 6, nome: 'Calca1', tipo: 'verao', valor: 300 },
    { id: 7, nome: 'Calca2', tipo: 'verao', valor: 699 },
    { id: 3, nome: 'Calca3', tipo: 'verao', valor: 599 },
    { id: 4, nome: 'Camiseta1', tipo: 'inverno', valor: 675 },
    { id: 5, nome: 'Camiseta2', tipo: 'inverno', valor: 599 },
    { id: 8, nome: 'Camiseta3', tipo: 'inverno', valor: 675 }
]

/**
 * Busca o array de produtos de uma determinada tabela
 * @param {string} tabela 
 * @returns {{ id: number; nome: string; valor: number }[]}
 */
// export function busca( tabela ) {
//     if ( tabela in tabelas ) {
//         return tabelas[tabela]
//     } else {
//         throw new Error(`A tabela ${tabela} não existe! As tabelas existentes são: ${Object.keys(tabelas)}`)
//     }
// }

function ultimoId( tabelaRoupa ) {
    return tabelaRoupa[produtos.length - 1].id
}

/**
 * Insere um item em uma tabela especificada e devolve o novo elemento criado 
 * @param {string} tabela 
 * @param {any} item 
 * @returns {{ id: number; nome: string; valor: number }}
 */
export function insere( tabela, item ) {
    if ( !item['nome'] || !item['valor'] ) {
        throw new Error(
            'Você precisa informar os campos "nome" e "valor" e eles precisam ter dados! ' +
            'Os valores informados foram: ' + Object.keys(item) +
            ' e seus valores são: ' + Object.values(item)
        )
    }
    const produto = {
        id: ultimoId( tabela ) + 1,
        nome: item.nome,
        valor: item.valor
    }    
    busca( tabela ).push( produto )
    return produto
}

export {tabelaRoupa}