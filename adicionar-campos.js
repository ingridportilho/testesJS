const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12345678910",
    email: "andre@gmail.com"
}

console.log(cliente)
cliente.fone = "32342324"
console.log(cliente)

delete cliente.fone
delete cliente["idade"]

console.log(cliente)