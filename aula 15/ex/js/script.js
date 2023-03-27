const numero = Number(prompt ('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = ` `;
// raiz
texto.innerHTML += `<p>${numero} Raiz: ${numero ** 0.5}.</p>`;
// inteiro
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
// É NaN
texto.innerHTML += `<p>${numero} é NaN: ${Number.isNaN(numero)}.</p>`;
// Arredondando p baixo
texto.innerHTML += `<p>${numero} Arredondando p baixo: ${Math.floor(numero)}.</p>`;
// Arredondando p cima
texto.innerHTML += `<p>${numero} Arredondando p cima: ${Math.ceil(numero)}.</p>`;
// Com duas casas decimais
texto.innerHTML += `<p>${numero} Com duas casas decimais: ${numero.toFixed(2)}.</p>`;