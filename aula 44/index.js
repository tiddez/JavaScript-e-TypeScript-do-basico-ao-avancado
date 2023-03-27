
// try {
//     console.log(naoExisto);
// } catch (error) {
//     console.log('naoExisto não existe.');
//     console.log(error); // Não exibir para o usuário o erro
// }

// TRY E CATCH TRATAMENTO DE ERROS

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números.');
    }

    return x + y;
}

try{
    console.log(soma(1, 2));
    console.log(soma('3', 2));
} catch(error) {
    // console.log(error);
    console.log('Alguma coisa amigável.');
}