const nomes = ['Ana','Ju', 'Leo', 'Paula']

nomes.forEach(imprimeNomes)
//param b é opcional
function imprimeNomes(nome, indice){
    console.log(nome + ' - ' + indice)
}

//CallBack: é uma função que é executada
//após o processamento de outra função.
//É quando uma função é passada como 
//argumento de outra.