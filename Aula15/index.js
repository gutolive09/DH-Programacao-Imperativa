
const banco = {
    clientes:[],

    adicionarConta(NumConta, tipoConta, saldo, titular){
        
        const novaConta={
            NumConta,
            tipoConta,
            saldo, 
            titular,
        }

        this.clientes.push(novaConta)
        return novaConta
    },

    consultarCliente(nome){
     for(i = 0; i<this.clientes.length;i++){
        let conta = index[i]   
        for(j=0; j<this.conta.length; i++){
        }

        }
    }

}

clienteTeste = banco.adicionarConta(123, "Corrente", 10, "abc")
cliente1 = banco.adicionarConta(5486273622, "Conta Corrente", 27771, "Abigael Natte")
cliente2 = banco.adicionarConta(1183971869, "Conta Poupança", 8675, "Ramon Connell")
cliente3 = banco.adicionarConta(9582019689, "Conta Poupança", 27363, "Jarret Lafuente")
cliente4 = banco.adicionarConta(1761924656, "Conta Poupança", 32415, "Ansel Ardley")

console.table(banco.clientes)