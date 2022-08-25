import Roupa from "../models/Roupa.js"
import {tabelaRoupa, parametrosTabela} from "../database.js"


class RoupaController {

    static listar = (req, res) => {
        res.status(200).json({
            tabelaRoupa
        })
    }

    static listarPorID = (req, res) => {
        const id = req.params.id

        const produto = tabelaRoupa.find(e => e.id == id)

        if (produto == null) {
            res.status(200).json({
                message: "Não foi encontrado nenhum item"
            })
        } else {
            res.status(200).json({
                produto
            })
        }
    }

    static criar = (req, res) => {
        const listaPropriedades = Object.keys(req.body)

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
            const arrayIds = tabelaRoupa.map(e => e.id)
            console.log(arrayIds)
            // produto.findById()
            // usuario.save()
            // usuario.save() // A segunda chamada para .save()
                           // não deveria salvar o elemento
                           // duas vezes
    
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

        // const objeto = req.body
        // let camposInformados = true
        // Object.keys(req.body).forEach( e => {
        //     if (e in parametrosTabela) {

        //     } else {
        //         camposInformados = false
        //     }
        // })

        // if (camposInformados = true) {

        // }
        // let roupa = new Roupa(req.body.id, req.body.nome, req.body.tipo, req.body.valor)
        // res.status(200).send('ok')

        // tabelaRoupa.push(roupa)
        // res.status(200).json({
        //     message: 'Novo produto criado com sucesso!',
        //     roupa
        // })
    }

    static atualizar = (req, res) => {

    }

    static deletar = (req, res) => {
        const id = req.params.id
        const posItem = tabelaRoupa.findIndex(e => e.id == id)
        const itemDeletado = tabelaRoupa[posItem]

        if (posItem == -1) {
            res.status(404).send({
                message: "Item não existe!"
            })
        } else {
            res.status(200).json({
                message: "Item deletado com sucesso!",
                item: itemDeletado
            })
        }
    }
}

export default RoupaController