const nome = "José da Silva";
let idade = 27;
let peso = 83.5;
let altura = 1.7;
let temPlano = true;

function calculaImc(peso, altura) {
  return peso / altura ** 2;
}

let imcFormatado = calculaImc(peso, altura).toFixed(2);

if (temPlano == true) {
  msg = `${nome} tem ${idade} anos e seu indice de massa corporal é de ${imcFormatado}`;
  console.log(msg);
} else {
  console.log(`${nome} não tem plano.`);
}
