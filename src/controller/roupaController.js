import Roupa from "../models/Roupa.js"
import {tabelaRoupa} from "../database.js"


class RoupaController {

    static listar = (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.status(200).json({
            tabelaRoupa
        })
    }   

    static buscar = (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        const keys = Object.keys(req.query)
        let tabelaFiltrada = tabelaRoupa.concat()

        for (let chave of keys) {
            tabelaFiltrada = tabelaFiltrada.filter(e => {
                if ( e[chave] == req.query[chave]) {
                    return e
                }
            })
        }

        res.status(200).json({
            tabelaFiltrada
        })
    }

    static listarPorID = (req, res) => {
        const id = Number(req.params.id)

        const produto = Roupa.findById(id)

        if (produto == null) {
            return res.status(400).json({
                message: "Não foi encontrado nenhum item"
            })
        }

        res.status(200).json({
            produto
        })
    }

    static criar = (req, res) => {
    
        const listaPropriedades = Object.keys(req.body)

        if (!Roupa.verificaBody(req.body)) {
            return res.status(400).json({
                mensagem: 'Campos incorretos! Verifique documentação!'
            })
        }

        if (!Roupa.verificaValoresBody(req.body)) {
            return res.status(400).json({
                mensagem: 'Preencha todos os campos corretamente!'
            })
        }

        if (
            listaPropriedades.includes('nome') &&
            listaPropriedades.includes('tipo') &&
            listaPropriedades.includes('valor') &&
            listaPropriedades.includes('descricao') &&
            listaPropriedades.includes('sustentavel') &&
            listaPropriedades.includes('img')
        ) {
            const nome = req.body.nome
            const tipo = req.body.tipo
            const valor = req.body.valor
            const descricao = req.body.descricao
            const sustentavel = req.body.sustentavel
            const img = req.body.img

            const produto = new Roupa( nome, tipo, valor, descricao, sustentavel, img)
            produto.save()
            
            return res.status(200).json({
                mensagem: 'Produto criado com sucesso!'
            })
        } else {
            return res.status(400).json({
                mensagem: 'Os campos "nome", "tipo", "valor" , "descricao", "sustentavel" e "img" são obrigatórios"'
            })
        }
    }

    static atualizar = (req, res) => {
        const id = Number(req.params.id)

        const item = Roupa.findById(id)
        if (item == null) {
            return res.status(400).json({
                mensagem: `Item de id ${id} não existe!`
            })
        }

        let campos = Roupa.verificaBody(req.body)
        
        if (!campos) {
            return res.status(400).json({
                mensagem: 'Você forneceu campos inválidos. Verifique a documentação!'
            })            
        }
        
        Roupa.findAndUpdate(req.body, id)
        
        res.status(200).json({
            mensagem: 'Campos atualizados com sucesso!',
            dado: tabelaRoupa
        })
    }

    static deletar = (req, res) => {
        const id = Number(req.params.id)

        const itemDeletado = Roupa.findAndDelete(id)
        
        if (!itemDeletado) {
            return res.status(404).json({
                mensagem: "Item não existe!"
            })
        }

        return res.status(200).json({
            mensagem: `Item ${id} deletado com sucesso!`,
            dado: tabelaRoupa
        })
    }
}

export default RoupaController