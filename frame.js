const express = require('express')
const app = express()
const port = 8081
const path = require('path')
const basePath = path.join(__dirname, 'html')

app.use(express.static('Public')) /*O public está trazendo a estilização, o script do código e a imagem*/


app.get("/", (req, res) => {
    res.sendFile(`${basePath}/Pag_central.html`) /*As páginas estão sendo ultilizadas da pasta html*/ 
})
app.get("/Quiz_POO/POO.html", (req, res) => {
    res.sendFile(`${basePath}/POO.html`)
})
app.get("/Quiz_Banco_de_Dados/Banco_de_Dados.html", (req, res) => {
    res.sendFile(`${basePath}/Banco_de_Dados.html`)
})
app.get("/Quiz_FrontEnd/FrontEnd.html", (req, res) => {
    res.sendFile(`${basePath}/FrontEnd.html`)
})

app.listen(port, function () {
    console.log("Site Rodando - Endereço: http://localhost:8081") /*O servidor está funcionando */
})

