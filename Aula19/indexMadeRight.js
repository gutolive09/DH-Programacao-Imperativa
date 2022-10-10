class Pessoas {
    constructor(altura, sexo){
        this.altura = altura;
        this.sexo = sexo;
    }

}

let pessoa = new Pessoas(1.5, "F")
let pessoa1 = new Pessoas(1.6, "F")
let pessoa2 = new Pessoas(1.7, "F")
let pessoa3 = new Pessoas(1.8, "M")
let pessoa4 = new Pessoas(1.4, "F")
let pessoa5 = new Pessoas(1.6, "M") 

arrayPessoas = [pessoa, pessoa1, pessoa2, pessoa3, pessoa4, pessoa5]

console.table(arrayPessoas)