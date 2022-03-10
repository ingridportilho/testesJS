const numerosPares = [2,4,6]
const numerosImpares = [1,3,5]

const numeros = [...numerosPares, ...numerosImpares]
//... -> abre o array e joga só os valores no novo array

let [num1,num2, ...outrosNumeros] = [1,2,3,4,5]

console.log(num1,num2, outrosNumeros)

const[nome1 = 'Ju'] =[1]
console.log(nome1)

const pessoa = {
    nome:'Ju',
    idade:25
}

const pessoaComTelefone = {
    ...pessoa,
    telefone: 21212 
}

console.log(pessoa, pessoaComTelefone)

const {idade} = pessoa //pega o atributo correspondente ao nome entre chaves

console.log(idade)

function imprimeDados({nome, idade}){
    console.log(nome, idade) 
}


imprimeDados(pessoa)

const temp = new String("Alura")
console.log(temp.toString())