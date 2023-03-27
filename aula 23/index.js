/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"

FALSY

*false
0
'' "" ``
null / undefined
NaN

*/

/* function falaOi () {
    return 'Oi';
}

let vaiExecutar = 'Joao';
console.log (vaiExecutar && falaOi());
*/

/*
const corUser = 'vermelho'; neste caso se a cor não for selecionada pelo usuário irá pegar a cor padrão
const corPadrao = corUser || 'preto';
console.log(corPadrao);
*/

const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

console.log(a || b || c || d || e);