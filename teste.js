const carro = {
    marca: 'bmw',
    modelo: '320i',
    ano: 2021,
    descricao: function(){
        return `carro ${carro.marca}, ${this.modelo} ano ${this.ano}`
    }
};

module.exports = {carro};
    