//Configuraçõs do servidor
const express = require('express')
const app = express()

const port = process.env.PORT || 3000

//exportar as configurações
module.exports = {app, port}