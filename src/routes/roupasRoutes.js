import RoupaController from '../controller/roupaController.js'

const routes = (app) => {
    app.get('/listar', RoupaController.listar)

    app.get('/listar/:id', RoupaController.listarPorID)

    app.post('/criar', RoupaController.criar)

    app.put('/atualizar/:id', RoupaController.atualizar)

    app.delete('/deletar/:id', RoupaController.deletar)
}

export default routes