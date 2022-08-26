import Roupa from "../models/Roupa.js"
import {tabelaRoupa} from "../database.js"


class RoupaController {

    static listar = (req, res) => {
        res.status(200).json({
            tabelaRoupa
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
                erro: 'Campos incorretos! Verifique documentação!'
            })
        }

        if (
            listaPropriedades.includes('nome') &&
            listaPropriedades.includes('tipo') &&
            listaPropriedades.includes('valor')
        ) {
            const nome = req.body.nome
            const tipo = req.body.tipo
            const valor = req.body.valor

            const produto = new Roupa( nome, tipo, valor)
            produto.save()
    
            res.status(200).json({
                mensagem: 'Criamos o usuário com sucesso!',
                dados: tabelaRoupa
            })
        } else {
            resposta.status(400).json({
                erro: 'Os campos de email, senha, confirmacao e username são obrigatórios!',
                informados: listaPropriedades
            })
        }
    }

    static atualizar = (req, res) => {
        const id = Number(req.params.id)

        const item = Roupa.findById(id)
        if (item == null) {
            // com o return aqui, posso tirar o código do else, pois ele não seguirá executando o código
            return res.status(400).json({
                message: `Item de id ${id} não existe!`
            })
        }

        let campos = Roupa.verificaBody(req.body)
        
        if (!campos) {
            return res.status(400).json({
                message: 'Vc forneceu campos inválidos. Verifique a documentação!'
            })            
        }

        Roupa.findAndUpdate(req.body, id)
        
        res.status(200).json({
            message: 'Campos atualizados com sucesso!',
        })
    }

    static deletar = (req, res) => {
        const id = Number(req.params.id)

        const itemDeletado = Roupa.findAndDelete(id)
        
        if (!itemDeletado) {
            return res.status(404).send({
                message: "Item não existe!"
            })
        }

        res.status(200).send({
            message: `Item ${id} deletado com sucesso!`
        })
    }
}

export default RoupaController