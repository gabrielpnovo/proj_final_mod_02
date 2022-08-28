const tabelaRoupa = [
    { id: 1, nome: 'CalcaLinho', tipo: 'basico', valor: 299.90 , sustentavel: 'sim' },
    { id: 2, nome: 'CalcaAlfaiataria', tipo: 'basico', valor: 219.90 , sustentavel: 'nao' },
    { id: 3, nome: 'CalcaJeans', tipo: 'basico', valor: 179.90 , sustentavel: 'sim' },
    { id: 4, nome: 'CalcaJogger', tipo: 'verao', valor: 159.90 , sustentavel: 'sim' },
    { id: 5, nome: 'CalcaCargo', tipo: 'verao', valor: 179.90 , sustentavel: 'sim' },
    { id: 6, nome: 'CalcaWide', tipo: 'verao', valor: 259.90 , sustentavel: 'sim' },
    { id: 7, nome: 'BermudaLinho', tipo: 'verao', valor: 159.90 , sustentavel: 'sim' },
    { id: 8, nome: 'ShortAlfaiataria', tipo: 'verao', valor: 139.90 , sustentavel: 'nao' },
    { id: 9, nome: 'BermudaJeans', tipo: 'verao', valor: 159.90 , sustentavel: 'sim' },
    { id: 10, nome: 'ShortJeans', tipo: 'verao', valor: 139.90 , sustentavel: 'sim' },
    { id: 11, nome: 'CamisaLinho', tipo: 'basico', valor: 199.90 , sustentavel: 'sim' },
    { id: 12, nome: 'CamisaEstampada', tipo: 'verao', valor: 159.90 , sustentavel: 'nao' },
    { id: 13, nome: 'CamisaLisa', tipo: 'basico', valor: 129.90 , sustentavel: 'nao' },
    { id: 14, nome: 'BlusaSm', tipo: 'verao', valor: 119.90 , sustentavel: 'nao' },
    { id: 15, nome: 'BlusaMc', tipo: 'verao', valor: 139.90 , sustentavel: 'nao' },
    { id: 16, nome: 'CalcaMoletomJogger', tipo: 'inverno', valor: 179.90 , sustentavel: 'nao' },
    { id: 17, nome: 'CalcaMoletomCargo', tipo: 'inverno', valor: 179.90 , sustentavel: 'nao' },
    { id: 18, nome: 'CalcaMoletomWide', tipo: 'inverno', valor: 199.90 , sustentavel: 'nao' },
    { id: 19, nome: 'MoletomMl', tipo: 'inverno', valor: 179.90 , sustentavel: 'nao' },
    { id: 20, nome: 'JaquetaJeans', tipo: 'basico', valor: 219.90 , sustentavel: 'sim' },
    { id: 21, nome: 'JaquetaPu', tipo: 'inverno', valor: 299.90 , sustentavel: 'nao' },
    { id: 22, nome: 'JaquetaParka', tipo: 'inverno', valor: 359.90 , sustentavel: 'nao' },
    { id: 23, nome: 'JaquetaPuffer', tipo: 'inverno', valor: 319.90 , sustentavel: 'nao' },
    { id: 24, nome: 'CamisaFlanela', tipo: 'inverno', valor: 159.90 , sustentavel: 'nao' },
    { id: 25, nome: 'CasacoLongo', tipo: 'inverno', valor: 259.90 , sustentavel: 'nao' },
    { id: 26, nome: 'CasacoBlazer', tipo: 'inverno', valor: 279.90 , sustentavel: 'nao' },
    { id: 27, nome: 'BlusaoLa', tipo: 'inverno', valor: 179.90 , sustentavel: 'nao' },
    { id: 28, nome: 'BlusaGolaAlta', tipo: 'inverno', valor: 139.90 , sustentavel: 'nao' },
    { id: 29, nome: 'BlusaMl', tipo: 'inverno', valor: 139.90 , sustentavel: 'nao' },
    { id: 30, nome: 'BlusaoEtinico', tipo: 'inverno', valor: 179.90 , sustentavel: 'nao' },
    { id: 31, nome: 'CamisetaMc', tipo: 'basico', valor: 59.90 , sustentavel: 'sim' },
    { id: 32, nome: 'CamisetaMl', tipo: 'basico', valor: 79.90 , sustentavel: 'sim' },
    { id: 33, nome: 'CamisetaCropped', tipo: 'basico', valor: 59.90 , sustentavel: 'sim' },
]

let id = 1
if (tabelaRoupa.length != 0) {
    id = Math.max.apply(null, tabelaRoupa.map(e => e.id)) + 1
}

export {tabelaRoupa, id}