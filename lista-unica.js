const clientes = [
    {
        nome: "Andre",
        cpf: "12345678910",
        dependentes: [{
            nome: "Sara",
            parentesco:"filha",
            dataNasc: "20/03/2011"
        },
        {
            nome: "Samia Maria",
            parentesco: "filha",
            dataNasc: "04/01/2014"
        }]
    },
    {
        nome: "Juliana",
        cpf: "123457867868",
        dependentes: [{
            nome: "Sophia",
            parentesco:"filha",
            dataNasc: "20/03/2011"
        }]
    }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]
// ... -> operador de espalhamento
// espalhou os dados solicitados dentro de um único array
console.table(listaDependentes)