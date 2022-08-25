import { tabelaRoupa } from "../database.js"

class Roupa {
    static proximoId = 1

    constructor(nome, tipo, valor) {
        this.id = Roupa.proximoId++,
        this.nome = nome,
        this.tipo = tipo,
        this.valor = valor
    }

    save() {
        tabelaRoupa.push(this)
    }

    findById() {
        console.log(this.id)
        console.log(tabelaRoupa.find(id => id == this.id))
    }

    // getTipo() {
    //     return this._tipo
    // }

    // setTipo(novoTipo) {
    //     this._tipo = novoTipo
    // }

}

export default Roupa