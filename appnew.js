const http = require('http');

const porta = 8080;

const modulos = require('./teste').carro;

const servidor = http.createServer((req,res) =>{
    res.write()
    res.end
})

servidor.listen(porta)