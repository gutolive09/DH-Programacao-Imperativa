function adicionar(p1, p2) {
  return p1 + p2;
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

console.log("-------------- Teste de Operações / Calculador --------------");
console.log(adicionar(1, 0));
console.log(subtracao(3, 1));
console.log(multiplicacao(3, 1));
console.log(divisao(8, 2));
console.log(quadradoDoNumero(2));
console.log(mediaDeTresNumeros(3, 4, 5));
console.log(calculaPorcentagem(300, 15));
console.log(geradorDePorcentagem(2, 200) + "%");
