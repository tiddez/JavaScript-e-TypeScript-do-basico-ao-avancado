function recursiva(max) {
    console.log(max);
    if (max >= 1000) return;
    max++;
    recursiva(max);
}

recursiva(0);

//recursividade a função fica rodando de novo e novo ela mesma.