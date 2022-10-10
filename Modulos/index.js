
function adicionar(p1, p2, p3=0, p4=0) {
    return p1 + p2 + p3 + p4;
}
  
function subtracao(p1, p2) {
    return p1 - p2;
}
  
function multiplicacao(p1, p2) {
    return p1 * p2;
}
  
function divisao(p1, p2) {
    return p1 / p2;
}

function quadradoDoNumero(p1) {
    return multiplicacao(p1, p1);
}
  
function mediaDeTresNumeros(p1, p2, p3) {
    return divisao(adicionar(p1, p2) + p3, 3);
}
  
function calculaPorcentagem(p1, p2) {
    return multiplicacao(divisao(p1, 100), p2);
}
  
function geradorDePorcentagem(p1, p2) {
    return multiplicacao(divisao(p1, p2), 100);
}



const calculadora = {
    adicionar,
    subtracao,
    multiplicacao,
    divisao,
    quadradoDoNumero,
    mediaDeTresNumeros,
    calculaPorcentagem,
    geradorDePorcentagem
}
  
module.exports = calculadora