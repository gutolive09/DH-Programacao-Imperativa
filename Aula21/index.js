
function num1(array){
    let soma = array.reduce((a, b) => a + b)
    console.log(soma)
    let resultado = array.map((numero)=> numero/soma)
    console.log(resultado)
}

let arrayNumeros = [1, 2, 3, 4, 5]

num1(arrayNumeros)

function num2(array, num){
    let arrayFiltrado = array.filter((palavra) => palavra.length>=num)
    console.log(arrayFiltrado)
}

let arrayPalavras = ["palavra", "abc", "abcd"]

num2(arrayPalavras, 4)

let alunos = [

]