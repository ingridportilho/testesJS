const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediaDosAlunos = [10,7,9,6]

let listaNotasEAlunos = [alunos, mediaDosAlunos]

//console.log(`${listaNotasEAlunos[0][0]}, sua média é ${listaNotasEAlunos[1][0]}`)

const exibeNomeNota = (nomeDoAluno) => {
    if(listaNotasEAlunos[0].includes(nomeDoAluno)){
        indice = listaNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaNotasEAlunos[0][indice] + ', sua média é ' + listaNotasEAlunos[1][indice]
    }else{
        return 'Aluno não está cadastrado'
    }
}

console.log(exibeNomeNota("Ana"))