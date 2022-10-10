
const app = {
   pessoas:[
     //    [1.5, "F"],
     //    [1.4, "F"],
     //    [1.6, "M"],
     //    [1.6, "F"],
     //    [1.8, "M"],
     //    [1.7, "M"]
        
   ],

   adicionarPessoa(altura, sexo){

    const novaPessoa = {
        altura,
        sexo
   }

    this.pessoas.push(novaPessoa)
   },

   maiorMenorAltura(){
     let maiorAltura = this.pessoas.reduce((p, v)=>  p.altura > v.altura ? p : v)
     let menorAltura  =  this.pessoas.reduce((p, v)=>  p.altura < v.altura ? p : v)

    console.log(`Maior altura = ${maiorAltura.altura} Menor altura = ${menorAltura.altura}`)
   },

   mediaAltutaF(){
        let femeas = this.pessoas.filter(pessoa => pessoa.sexo == "F");
        let divisao = femeas.length
        femeas = femeas.reduce((a, b)=> a.altura + b.altura)
        console.log(femeas.altura/divisao)
   }


}

app.adicionarPessoa(1.5, "F")
app.adicionarPessoa(1.4, "F")
app.adicionarPessoa(1.6, "F")
app.adicionarPessoa(1.8, "M")
app.adicionarPessoa(1.7, "M")
app.adicionarPessoa(1.6, "M")

console.table(app.pessoas)
app.maiorMenorAltura()
app.mediaAltutaF()
