const raiz = n => n ** 0.5; // Esta linha é igual a função de baixo porém utilizando as Arrow Functions ( => )
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

/*
const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
*/

/*
function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}

const resultado = soma(4, 2); // Se não declarar nenhum número ele irá assumir que é 1 + 1... x + y
console.log(resultado)
*/

/*
function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));
console.log(resultado);
*/

/*

function saudacao(nome) {
    return `Bom dia ${nome}!`; // O que está dentro da função está protegido para ser visualizado com console.log
}

const variavel = saudacao('Leonardo');
console.log(variavel);

*/
