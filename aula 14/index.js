// IEEE 754-2008 - padrao que o js segue para casas decimais

let num1 = 0.7;
let num2 = 0.1;

//num1 += num2;
//num1 += num2;
//num1 += num2;

num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;

//num1 = parseFloat(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1))
//console.log(num1.toString() + num2) -> Concatena
//console.log(num1.toString(2)); -> Transforma pra binário
//console.log(num1.toFixed(2)); -> Reduz casa decimal
//console.log(Number.isInteger(num1)); -> se o numero é inteiro ou não
//let temp = num1 * '5';
//console.log(Number.isNaN(temp)); -> Se é um número
