const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12345678910",
    email: "andre@gmail.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

console.log(cliente[chaves[0]])
console.log(cliente[chaves[2]].substring(0,3))

chaves.forEach(info=> console.log(cliente[info]))

console.log(cliente["nome"])