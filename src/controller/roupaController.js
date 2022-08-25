import Roupa from "../models/Roupa.js"
import {tabelaRoupa} from "../database.js"


class RoupaController {

    static listar = (req, res) => {
        res.status(200).json({
            tabelaRoupa
        })
    }

    static listarPorID = (req, res) => {
        const id = req.params.id

        const produto = Roupa.findById(id)

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
            // produto.save()
    
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
        const id = req.params.id

        const item = Roupa.findById(id)
        if (item == null) {
            res.status(400).json({
                message: `Item de id ${id} não existe!`
            })
        } else {
            const listaPropriedades = Object.keys(req.body)

            let campos = Roupa.verificaBody(listaPropriedades)
            console.log(campos)
            
            if (campos) {
                listaPropriedades.forEach(e => {
                    if (listaPropriedades.includes(e)) {
                        const posItem = tabelaRoupa.findIndex(e => e.id == id)
                        tabelaRoupa[posItem][e] = req.body[e]
                    }
                })
                res.status(200).json({
                    message: 'Campos atualizados com sucesso!',
                    produto: Roupa.findById(id)
                })
            } else {
                res.status(400).json({
                    message: 'Vc forneceu campos inválidos. Verifique a documentação!'
                })
            }
        }


        

    }

    static deletar = (req, res) => {
        const id = req.params.id
        // devo colocar toda essa lógica dentro de um método deletar dentro de "Roupa.js"?
        const posItem = tabelaRoupa.findIndex(e => e.id == id)
        console.log(posItem)
        const itemDeletado = tabelaRoupa[posItem]
        tabelaRoupa.splice(posItem,1)

        if (posItem == -1) {
            res.status(404).send({
                message: "Item não existe!"
            })
        } else {
            res.status(200).json({
                message: "Item deletado com sucesso!",
                item: itemDeletado,
                itens: tabelaRoupa
            })
        }
    }
}

export default RoupaController