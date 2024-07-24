const http = require('http');
const porta = 8080;

const servidor = http.createServer((requisicao,resposta) =>{
    console.log('executei')
    resposta.write("Hello world")
    resposta.end();

}).listen(porta)
