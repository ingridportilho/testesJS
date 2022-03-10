class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor;
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

const andre = new Cliente("André", "andre@gmail.com", "3233323212", 100)

andre.exibirSaldo()
console.log(andre)

console.log(typeof Cliente)