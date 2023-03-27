const nome = 'Leonardo';

function falaNome() {
    
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Barbosa'
    falaNome();
}
usaFalaNome();

// escopo léxico