import { tabelaRoupa } from "../database.js"

class Roupa {
    static proximoId = 1

    static findById(id) {
        return (tabelaRoupa.find(e => e.id == id))
    }

    static verificaBody(reqBody) {
        for (let i =0;i<reqBody.length;i++) {
            if
            (reqBody[i] == 'nome' || 
            reqBody[i] == 'tipo' || 
            reqBody[i] == 'valor') 
            {
                
            } else {
                return false
            }
        }
        return true
        reqBody.forEach(e => {
            console.log(e)
            if (e == 'nome' || e == 'tipo' || e == 'valor') {
                return true
            } else {
                console.log('erro')
                return false
            }
        })
        console.log('depois for')
        return true
    }

    constructor(nome, tipo, valor) {
        this.id = Roupa.proximoId++,
        this.nome = nome,
        this.tipo = tipo,
        this.valor = valor
    }

    save() {
        const posItem = tabelaRoupa.findIndex(e => e.id == this.id)
        if (posItem == -1) {
            tabelaRoupa.push(this)
        } else {
            console.log("já existe")
        }
    }

    static delete() {
        return "teste"
    }

    // getTipo() {
    //     return this._tipo
    // }

    // setTipo(novoTipo) {
    //     this._tipo = novoTipo
    // }

}

export default Roupa