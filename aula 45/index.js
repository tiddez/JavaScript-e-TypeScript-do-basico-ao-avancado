// try {
// // É executada quando não há erros
// } catch (e) {
// // É executada quando há erros
// } finally {
// // Sempre
// }

// try{
//     // console.log(A); // exemplifica o erro
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou um erro');
//     console.log('Fechei o arquivo');
// } catch (e) {
//     console.log('Tratando o erro'); // Só exibe se tiver erro
// } finally {
//     console.log('FINALLY: Eu sempre sou executado'); // Sempre é exibido
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de date.');
    }

    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',  
      hour12: false  
    })
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch (e) {

} finally {
    console.log('Tenha um bom dia.');
}
