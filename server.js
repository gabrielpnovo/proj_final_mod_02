import app from './src/app.js'

const port = 3300

app.listen(port, () => {
    console.log(`Estou escutando em http://localhost:${port}`)
})