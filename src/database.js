const tabelaRoupa = [
    { id: 6, nome: 'Calca1', tipo: 'verao', valor: 300 },
    { id: 7, nome: 'Calca2', tipo: 'verao', valor: 699 },
    { id: 3, nome: 'Calca3', tipo: 'verao', valor: 599 },
    { id: 4, nome: 'Camiseta1', tipo: 'inverno', valor: 675 },
    { id: 5, nome: 'Camiseta2', tipo: 'inverno', valor: 599 },
    { id: 8, nome: 'Camiseta3', tipo: 'inverno', valor: 675 },
    { id: 8, nome: 'Camiseta3', tipo: 'inverno', valor: 675 }
]

let id = 1
if (tabelaRoupa.length != 0) {
    id = Math.max.apply(null, tabelaRoupa.map(e => e.id)) + 1
}
// teste comit
console.log (nome)
export {tabelaRoupa, id}