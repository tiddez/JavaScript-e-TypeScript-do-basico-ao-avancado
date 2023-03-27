// Declaração de função (function hoisting)
// Não faz diferença se chamar a função antes ou depois de declarar o hoisting ajusta 

falaOi();
function falaOi() {
    console.log('Olá');
}

// First-class objects 
// Function expression
const souUmDado = function() {
    console.log('Sou um dado.');
};
souUmDado();

// Arrow function
const arrowFunction = () => {
    console.log('Sou uma arrow function')
};
arrowFunction();

// Dentro de um objeto 
const obj = {
    falar: function () {
        console.log('Estou falando...');
    }
};
obj.falar();

