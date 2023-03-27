const pessoa = {
    nome: 'Leonardo',
    sobrenome: 'Barbosa',
    idade: 24,
    endereco: {
        rua: 'Imbe',
        numero: 144
    }
};

// Atribuição via desestruturação Objetos
const {nome, ...resto} = pessoa;
console.log(nome, resto);