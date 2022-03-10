const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12345678910",
    email: "andre@gmail.com",
    fones: ["23423423", "234234234"],
    dependentes: [{
        nome: "Sara",
        parentesco:"filha",
        dataNasc: "20/03/2011"
    },
    {
        nome: "Samia Maria",
        parentesco: "filha",
        dataNasc: "04/01/2014"
    }],
    saldo: 100,
    depositar: function(valor){
        this.saldo+=valor
    }
}

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="04/01/2014")
//Filter sempre retorna um array
console.log(filhaMaisNova[0].nome)

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
}
   
   const objPersonagem2 = Object.create(objPersonagem)
   objPersonagem2.nome = "Gandalf, o Cinzento"
   
   //console.log(objPersonagem.nome) //Gandalf
   //console.log(objPersonagem2.nome) //Gandalf, o Cinzento

//    O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado via parâmetro. Dessa forma, objPersonagem2 é uma instância diferente de objPersonagem e pode ser trabalhada de forma independente.

// let relatorio="";

// for(let info in cliente){
//     if(typeof cliente[info] === "object" || typeof cliente[info]==="function"){
//         continue
//     }else{
//         relatorio += `
//         ${info} : ${cliente[info]}
//         `
//     }
     
// }
// console.log(relatorio)

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}
console.log(Object.values(cliente))
console.log(Object.entries(cliente))
oferecerSeguro(cliente)