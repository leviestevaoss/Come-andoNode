const fs = require('fs')
const caminho = './arquivoTexto'
const nomeArquivo = 'musics.txt'
const codi = 'utf-8'

fs.readFile(`${caminho}/${nomeArquivo}`,codi,(erro,conteudo) => {
    console.log(`Pior Musica do Metallica : ${conteudo}`)
})