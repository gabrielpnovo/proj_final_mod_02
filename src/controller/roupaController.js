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
        const posItem = tabelaRoupa.findIndex(e => e.id == id)
        res.status(200).json(tabelaRoupa[posItem])

        // const id = req.params.id
        // const posItem = Object.keys(tabelaRoupa).find(e => e==id)
        // res.status(200).json(tabelaRoupa[posItem-1])
    }

    static criar = (req, res) => {
        console.log(Object.keys(tabelaRoupa))
        // const posMaiorId = Math.max(Object.keys(tabelaRoupa))
        // res.status(200).send(posMaiorId)
        // const maiorId = tabelaRoupa[posMaiorId].id
        // res.status(200).send(maiorId)

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
        tabelaRoupa.splice(posItem,1)
        res.status(200).json(tabelaRoupa)
    }
}

export default RoupaController