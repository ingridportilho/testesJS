//Método SPLICE
const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

listaDeChamada.splice(1,0,'Rodrigo')
//param a: começa alterar a partir desse índice
//param b: quantidade de elementos que serão removidos
//param c: o que substituirá esses elementos (opcional)

console.log(`Lista de chamada: ${listaDeChamada}`)