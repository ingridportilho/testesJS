//var -> funciona em qualquer parte do código
//tem escopo global
// pode ser modificada ao longo do código
// podemos usar a var antes de declarar
// o programa lê elas primeiro
//var altura =  5;
//var comprimento = 7;

//area = altura * comprimento;

//console.log(area);
//var area;

//let
//não permite que a mesma variável seja declarada mais de uma vez
//é bom para não correr o risco de reutilizar uma variável e perder valores
// let forma = 'retângulo';
// let altura = 5;
// let comprimento = 7;
// let area;

// if(forma==='retângulo'){
//     area = altura * comprimento;
// }else{
//     area = (altura * comprimento)/2;
// }

// console.log(area);
// let area;

//const 
//não pode ser

const forma = 'triângulo';
const altura = 5;
const comprimento = 7;
let area;
if(forma==='quadrado'){
    area = altura * comprimento;
}else{
    area = (altura * comprimento)/2;
}
console.log(area);
