// ESTRUTURA DE REPETIÇÃO FOR
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');
// i++ adiciona de um em um
// i += 10 pula de 10 em 10
// i -> index

// for (let i = 0; i <= 10; i++) {
//     const par = i % 2 === 0 ? 'par' : 'ímpar';
//     console.log(i, par);
// }

// for (let i = 500; i >= 100; i -= 10) {
//     console.log(`Linha ${i}`);
// }

const frutas = ['Maçã', 'Pera', 'Uva'];
for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);
}