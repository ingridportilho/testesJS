//método slice recebe parâmetros de início e fim
//no caso do fim, ele não é exclusivo, não pega a última posição passada

const nomes = ['lala', 'lele', 'lili', 'lolo', 'lulu', 'lalao']

const sala1 = nomes.slice(0,nomes.length/2)
const sala2 = nomes.slice(nomes.length/2);

console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2: ${sala2}`)