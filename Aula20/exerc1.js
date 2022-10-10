
const fizzBuzz = (n1, n2, p1="Fizz", p2="Buzz") => {
    for(i=0; i<=100; i++){
        if(i%n1===0 && i%n2===0) 
            console.log(p1 + p2)
        else if(i%n1===0)
            console.log(p1)
        else if(i%n2===0)
            console.log(p2)
        else
            console.log(i)
    }
}

fizzBuzz(3, 5)