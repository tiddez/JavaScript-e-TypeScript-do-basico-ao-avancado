/*
Leonardo Barbosa tem 24 anos, pesa 79 kg
tem 1,84 de altura e seu IMC é de 23.24
Leonardo Barbosa nasceu em 1998
*/

const nome = 'Leonardo';
const sobrenome = 'Barbosa';
const idade = 24;
const peso = 79;
const alturaEmM = 1.84;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM)
anoNascimento = 2022 - idade;

// template strings 

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}`);
