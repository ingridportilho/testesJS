function Cliente(nome,cpf,email,saldo){
    this.nome =  nome
    this.cpf = cpf
    this.email = email
    this.saldo =saldo
    this.depositar = function(valor){
        this.saldo+=valor

    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup)
{
    Cliente.call(this, nome, cpf, email, saldo) //mesmo que super()
    this.saldoPoup = saldoPoup
}

const ju = new ClientePoupanca("Ju", "2323423", "ju@gmail.com", 100, 200)

console.log(ju)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup+=valor
}

ju.depositarPoup(30)

console.log(ju.saldoPoup)