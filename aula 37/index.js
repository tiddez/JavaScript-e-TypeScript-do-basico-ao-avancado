const nome = ['Leonardo Barbosa', 'Batata', 'Jose'];

// FOR CLÁSSICO
for (let i = 0; i < nome.length; i++ ) {
    console.log(nome[i]);
}

console.log('###');

// FOR IN
for (let i in nome) {
    console.log(nome[i]);
}

console.log('###');

// FOR OF
for (let valor of nome) {
    console.log(valor);
}

console.log('###');

// FOR EACH
nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});

// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)