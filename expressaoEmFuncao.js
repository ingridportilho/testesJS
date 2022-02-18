//EXPRESSÃO DE FUNÇÃO

//diferença principal: HOISTING (iniciar ou levantar)
//ou seja, funções e var são "listadas" no topo do arquivo. 

//const soma = function (num1, num2){return num1 + num2}
//console.log(soma(1,1));

console.log(apresentar());
function apresentar(){
    return "olá";
}
console.log(soma(1,1));
const soma = function (num1, num2){return num1 + num2}
