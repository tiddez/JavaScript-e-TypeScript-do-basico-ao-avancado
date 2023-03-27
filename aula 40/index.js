// BREAK E CONTINUE

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 2) {
        console.log('Pulei o 2');
        continue; // pula o numero 2 neste caso
    }
    console.log(numero);

if (numero === 7 ){
    console.log('7 encontrando, saindo...');
    break; // para ao encontrar o target
}

   
}