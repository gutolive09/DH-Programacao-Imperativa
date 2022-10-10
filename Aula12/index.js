let participanteA = [5, 8, 4, 9, 5]
let participanteB = [8, 7, 8, 6, 8]
let participanteC = [7, 5, 10, 8, 3]

function pontuacaoMedia(array){
    let divisao = array.length
    array = array.reduce((a, b) => a + b)
    return array/divisao
}

console.log(pontuacaoMedia(participanteA))


function pontuacaoMaior(array){
    let notaMaior = []
    for(let index = 0; index < array.length; index++){
        if(array[index] > notaMaior)
            notaMaior = array[index]
    }


    return notaMaior
}

let notaMaior = pontuacaoMaior(participanteA)

console.log(notaMaior)


function competicao(array1, array2, array3){
    let notas = [array1, array2, array3]
    let notaMaxima = []
    let medias = [pontuacaoMedia(array1), pontuacaoMedia(array2), pontuacaoMedia(array3)]
    for(let i = 0; i < notas.length; i++){
        let arrayNotas = notas[i]
        for(let j = 0; j < arrayNotas.length; j++){
            if( arrayNotas[j] > notaMaxima)
                notaMaxima = arrayNotas[j]
        }    
    }

    let mediaMaxima = pontuacaoMaior(medias)

    
    let vencedorNota
    let vencedorMedia

    if(notaMaxima in array1){
        vencedorNota = "participante A"
    }
    else if(notaMaxima in array2) {
        vencedorNota = "participante B"
    }
    else {
        vencedorNota = "participante C"
    }

    if(mediaMaxima == medias[0]){
        vencedorMedia = "participante A"
    }
    else if( mediaMaxima == medias[1]){
        vencedorMedia = "participante B"
    }
    else{
        vencedorMedia = "participante C"
    }

    let resultado = `O vencedor por media é ${vencedorMedia} e o vencedor por nota é ${vencedorNota}`

    return resultado
}

console.log(competicao(participanteA, participanteB, participanteC))