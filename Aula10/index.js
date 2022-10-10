function imprimirInverso (array){
    console.log(inverter(array))
}

function inverter (array){
    return array.reverse()
}

let palavras = ['a', 'b', 'c']
imprimirInverso(palavras)

function somarArray (array) {
    console.log(array.reduce((a, b) => a + b))
}

let numeros = [1, 2, 3]
somarArray(numeros)

function join(array) {
  console.log(array.toString())
}

join(['o', 'l', 'a'])

let filmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"]

function letraMaiuscula(array) {
    array[0] = array[0].toUpperCase(),
    array[1] = array[1].toUpperCase(),
    array[2] = array[2].toUpperCase(),
    array[3] = array[3].toUpperCase(),
    array[4] = array[4].toUpperCase()
    return array
}

letraMaiuscula(filmes)
console.log(filmes)

let filmes2 = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"]

function passagemDeElemento(array1, array2){
    let naoFilme = array2.pop()
    array1.push(array2.pop().toUpperCase())
    array1.push(array2.pop().toUpperCase())
    array1.push(array2.pop().toUpperCase())
    array1.push(array2.pop().toUpperCase())
    return array1
}
passagemDeElemento(filmes, filmes2)
console.log(filmes)

