
function fatorial(x){
    for(let i=x-1;i>=1;i--){
        x *= i
    }
    return x;
}

function fatorialMelhor(x){
    if(x<=1) return 1;
    return x*fatorialMelhor(x-1)
}


console.log(fatorial(6))
console.log(fatorialMelhor(6))