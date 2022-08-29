import { tabelaRoupa, id } from "../database.js"

class Roupa {
    static proximoId = id

    static findById(id) {
        return (tabelaRoupa.find(e => e.id == id))
    }

    static findIndexById(id) {
        return tabelaRoupa.findIndex(e => e.id == id)
    }

    static findAndDelete(id) {
        const posItem = Roupa.findIndexById(id)

        if (posItem == -1) {
            return false
        }

        tabelaRoupa.splice(posItem,1)
        return true
    }

    static findAndUpdate(body, id) {
        Object.keys(body).forEach(e => {
            const posItem = tabelaRoupa.findIndex(e => e.id == id)
            tabelaRoupa[posItem][e] = body[e]
        })
    }

    static verificaBody(reqBody) {
        const listaPropriedades = Object.keys(reqBody)

        for (let i =0;i<listaPropriedades.length;i++) {
            if
            (listaPropriedades[i] == 'nome' || 
            listaPropriedades[i] == 'tipo' || 
            listaPropriedades[i] == 'valor' ||
            listaPropriedades[i] == 'descricao'||
            listaPropriedades[i] == 'sustentavel'
            ) 
            {
                
            } else {
                return false
            }
        }
        return true
    }

    constructor(nome, tipo, valor, descricao, sustentavel) {
        this.id = Roupa.proximoId++,
        this.nome = nome,
        this.tipo = tipo,
        this.valor = valor,
        this.descricao = descricao,
        this.sustentavel = sustentavel
    }

    save() {
        const posItem = tabelaRoupa.findIndex(e => e.id == this.id)
        if (posItem == -1) {
            tabelaRoupa.push(this)
        }
    }
}

export default Roupa