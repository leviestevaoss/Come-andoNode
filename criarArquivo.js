const fs = require("fs");
const caminho = "./arquivoTexto";
const codi = "utf-8";
const nome = "receita.txt";
const caminhoArquivo = `${caminho}/${nome}`;
const conteudo = `Bolo de Cenoura 3 cenouras médias`;


fs.writeFile(caminhoArquivo,conteudo,(erro,dados) => {
    if(erro){
        console.log(erro)
    }else{
        console.log("Arquivo criado com sucesso")
        console.log(dados)
    }
})