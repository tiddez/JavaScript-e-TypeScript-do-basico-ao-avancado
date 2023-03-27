/*
Primitivos (imutáveis) - string, number, boolean, undefined, 
null (bigint, symbol)

Referência (mutável) - array, object, function - Passados por referência
*/

/*
let nome = 'Leonardo';
nome = 'Barbosa';
console.log(nome[0]);
*/

/*
let a = 'A';
let b = a; // Cópia 
console.log(a,b);

a = 'Outra coisa';
console.log(a, b);
*/

/*
let a = [1, 2, 3];
let b = [...a];
let c = b;
console.log(a, b);

a.push(4); // adiciona no final
console.log(a, b);

b.pop(); // remove no final
console.log(a, b);

a.push('Leonardo');
console.log(c);
*/

const a = {
nome: 'Leonardo',
sobrenome: 'Barbosa'
};
const b = {...a};

a.nome = 'Joao';
console.log(a)
console.log(b)