// For in -> Lê os índices ou chaves do objeto
const frutas = ['Pera', 'Maca', 'Uva'];

// for (let indice in frutas) {
//     console.log(frutas[indice]);
// }

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

const pessoa = {
    nome: 'Leonardo',
    sobrenome: 'Barbosa',
    idade: 24
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}